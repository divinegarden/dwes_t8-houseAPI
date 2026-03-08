import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";



export async function GET(request, { params }) {
    const { id: idOrSlug } = await params;


    try {
        const house = await prisma.house.findFirst({
            where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }] },
            select: {
                id: true,
                title: true,
                price: true,
                description: true,
                slug: true,
                rooms: true,
                bathrooms: true,
                squareMeters: true,
                propertyType: true,
                tags: true,
                images: { select: { url: true } },
                user: {
                    select: {
                        id: true,
                        email: true,
                        fullName: true,
                        isActive: true,
                        roles: true,
                    },
                },
            },
        });

        if (!house) {
            return NextResponse.json(
                { message: "House not found" },
                { status: 404 }
            );
        }

        const formattedHouse = {
            ...house,
            images: house.images.map((image) => image.url),
        };
        return NextResponse.json(
            formattedHouse,
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}




export async function PATCH(request, { params }) {
    const { id } = await params;

    const authHeader = request.headers.get("Authorization");

    if (!authHeader) {
        return NextResponse.json(
            { error: "Unauthorized. Token expired or invalid." },
            { status: 401 }
        )
    }

    const token = authHeader.split(' ')[1] || authHeader;

    // VERIFICAMOS TOKEN
    const { id: idUser } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: idUser } });

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized. Token expired or invalid." },
            { status: 401 }
        )
    }

    try {
        const house = await prisma.house.findUnique({
            where: { id },
            include: { images: true }
        });

        if (!house) {
            return NextResponse.json(
                { message: "House not found" },
                { status: 404 }
            );
        }

        const body = await request.json();
        const { title, price, description, slug, rooms, bathrooms, squareMeters, propertyType, tags, images = [] } = body;

        const updatedHouse = await prisma.house.update({
            where: { id },
            data: {
                title,
                price,
                description,
                slug,
                rooms,
                bathrooms,
                squareMeters,
                propertyType,
                tags,
                images: {
                    connectOrCreate: images.map(url => ({
                        where: { url },
                        create: { url }
                    })),
                },
                userId: idUser,
            },
            // incluimos las imágenes en la respuesta
            include: {
                images: true,
            }
        });

        return NextResponse.json(
            updatedHouse,
            { status: 200 }
        );

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}




export async function DELETE(request, { params }) {
    const { id } = await params;

    const authHeader = request.headers.get("Authorization");

    if (!authHeader) {
        return NextResponse.json(
            { error: "Unauthorized. Token expired or invalid." },
            { status: 401 }
        )
    }

    const token = authHeader.split(' ')[1] || authHeader;

    // VERIFICAMOS TOKEN
    const { id: idUser } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: idUser } });

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized. Token expired or invalid." },
            { status: 401 }
        )
    }


    try {
        const house = await prisma.house.findUnique({ where: { id } });

        if (!house) {
            return NextResponse.json(
                { message: "House not found" },
                { status: 404 }
            );
        }

        const deletedHouse = await prisma.house.delete({
            where: { id },
            // incluimos las imágenes en la respuesta
            include: {
                images: true,
            }
        });

        return NextResponse.json(
            deletedHouse,
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "House title or slug already exists" },
            { status: 409 }
        )
    }

}



