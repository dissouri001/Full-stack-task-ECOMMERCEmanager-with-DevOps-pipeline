import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "Wireless Mouse", description: "Ergonomic wireless mouse", price: 19.99, stock: 50, imageUrl: "" },
      { name: "Mechanical Keyboard", description: "RGB mechanical keyboard", price: 59.99, stock: 30, imageUrl: "" },
      { name: "USB-C Hub", description: "7-in-1 USB-C hub", price: 24.99, stock: 40, imageUrl: "" },
    ],
    skipDuplicates: true,
  });
  console.log("Seed done ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
