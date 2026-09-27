import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  { name: "iPhone 15 Case - Silicone", description: "Coque silicone premium, protection anti-choc", price: 14.99, stock: 120, category: "Accessoires", imageUrl: "https://picsum.photos/seed/case1/400/300" },
  { name: "Wireless Earbuds Pro", description: "Écouteurs sans fil, réduction de bruit active", price: 49.99, stock: 85, category: "Audio", imageUrl: "https://picsum.photos/seed/earbuds1/400/300" },
  { name: "Mechanical Keyboard RGB", description: "Clavier mécanique gamer, switches bleus, rétroéclairage RGB", price: 59.99, stock: 40, category: "Informatique", imageUrl: "https://picsum.photos/seed/keyboard1/400/300" },
  { name: "Wireless Mouse Ergonomic", description: "Souris ergonomique sans fil, autonomie 6 mois", price: 19.99, stock: 150, category: "Informatique", imageUrl: "https://picsum.photos/seed/mouse1/400/300" },
  { name: "USB-C Hub 7-in-1", description: "HDMI, USB 3.0, lecteur SD, charge rapide 100W", price: 24.99, stock: 95, category: "Informatique", imageUrl: "https://picsum.photos/seed/hub1/400/300" },
  { name: "Portable Power Bank 20000mAh", description: "Charge rapide, 2 ports USB, écran LED", price: 29.99, stock: 200, category: "Accessoires", imageUrl: "https://picsum.photos/seed/power1/400/300" },
  { name: "Laptop Stand Aluminum", description: "Support ordinateur portable ajustable, refroidissement", price: 22.50, stock: 60, category: "Informatique", imageUrl: "https://picsum.photos/seed/stand1/400/300" },
  { name: "Bluetooth Speaker Mini", description: "Enceinte portable étanche, basses puissantes", price: 34.99, stock: 110, category: "Audio", imageUrl: "https://picsum.photos/seed/speaker1/400/300" },
  { name: "Smart Watch Fitness Tracker", description: "Suivi cardiaque, sommeil, notifications, étanche", price: 45.00, stock: 70, category: "Wearables", imageUrl: "https://picsum.photos/seed/watch1/400/300" },
  { name: "Webcam HD 1080p", description: "Webcam avec micro intégré, idéale visioconférence", price: 27.99, stock: 55, category: "Informatique", imageUrl: "https://picsum.photos/seed/webcam1/400/300" },
  { name: "Phone Ring Light", description: "Anneau lumineux pour selfies et vidéos, trépied inclus", price: 15.99, stock: 130, category: "Accessoires", imageUrl: "https://picsum.photos/seed/ring1/400/300" },
  { name: "Gaming Mouse Pad XXL", description: "Tapis de souris extra-large, surface anti-glisse", price: 12.99, stock: 180, category: "Accessoires", imageUrl: "https://picsum.photos/seed/pad1/400/300" },
];

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: products });
  console.log("Seed done ✅ — 12 produits (avec catégorie + image) ajoutés");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
