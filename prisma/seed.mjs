import { users, houses, houseImages } from './data.mjs';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const resetDatabase = async () => {
    console.log("Reiniciando base de datos (TRUNCATE)...");
    // PostgreSQL
    await prisma.$executeRaw`TRUNCATE TABLE "users", "houses", "house_images" RESTART IDENTITY CASCADE;`;
}


async function main() {
    // PELIGRO: Borramos todo
    await resetDatabase()

    console.log("Añadiendo usuarios...")
    await prisma.user.createMany({
        data: users,
        skipDuplicates: true,
    });

    console.log("Añadiendo casas...")
    await prisma.house.createMany({
        data: houses,
        skipDuplicates: true,
    });

    console.log("Añadiendo imágenes...")
    await prisma.houseImage.createMany({
        data: houseImages,
        skipDuplicates: true,
    });

    console.log("Listo!")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
