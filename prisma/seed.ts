import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories, ingredients } from './constants';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'Teddy Mcdonald',
        email: 'plug@cia.com',
        password: hashSync('11111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@test.com',
        password: hashSync('11111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories
  })

  await prisma.ingredient.createMany({
    data: ingredients
  })
}
async function down() {
  await prisma.$executeRaw `TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
}
async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
