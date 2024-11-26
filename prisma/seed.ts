import { prisma } from './prisma-client';

async function up() {}
async function down() {
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
}
async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}
