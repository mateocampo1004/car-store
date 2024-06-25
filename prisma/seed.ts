import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const car1 = await prisma.car.create({
    data: {
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      color: 'Red',
    },
  });

  const car2 = await prisma.car.create({
    data: {
      make: 'Ford',
      model: 'Mustang',
      year: 2019,
      color: 'Blue',
    },
  });

  console.log({ car1, car2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });