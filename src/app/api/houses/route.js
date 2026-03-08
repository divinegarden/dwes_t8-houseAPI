import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";



export async function GET(request) {

    const offset = +request.nextUrl.searchParams.get("offset") || 0;
    const limit = +request.nextUrl.searchParams.get("limit") || 10;

    const select = {
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
    };

    try {
        const houses = await prisma.house.findMany({ select, take: limit, skip: offset });

        const formattedHouses = houses.map(house => ({
            ...house,
            images: house.images.map(image => image.url),
        }));

        return NextResponse.json(
            formattedHouses,
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





export async function POST(request) {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader) {
        return NextResponse.json(
            { error: "Unauthorized. Token expired or invalid." },
            { status: 401 }
        )
    }

    const token = authHeader.split(' ')[1] || authHeader;

    // VERIFICAMOS TOKEN
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized. Token expired or invalid." },
            { status: 401 }
        )
    }

    try {
        const { title, price, description, slug, rooms, bathrooms, squareMeters, propertyType, tags, images } = await request.json();

        if (!title || price === undefined || !slug || rooms === undefined || bathrooms === undefined || squareMeters === undefined || !propertyType || !tags || !images) {
            return NextResponse.json(
                { error: "Missing data" },
                { status: 400 }
            )
        }

        const house = await prisma.house.create({
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
                    create: images.map(image => ({ url: image }))
                },
                userId: id,
            },
            // incluimos las imágenes en la respuesta
            include: {
                images: true,
            }
        });
        return NextResponse.json(
            house,
            { status: 201 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "House title or slug already exists" },
            { status: 409 }
        )
    }
}