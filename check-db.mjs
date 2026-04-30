import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const count = await prisma.contactMessage.count();
  console.log('Total messages:', count);
  const messages = await prisma.contactMessage.findMany({ take: 5 });
  console.log(messages);
}
main().catch(console.error).finally(() => prisma.$disconnect());
