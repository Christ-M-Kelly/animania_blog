import { prisma } from "./db/prisma";
import Footer from "../src/components/Footer";
export default async function Home() {
  const allUsers = await prisma.user.findMany({
    select: { name: true },
  });
  return (
    <div>
      <div>
        <ul>
          {allUsers.map((user: { name: string }) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
