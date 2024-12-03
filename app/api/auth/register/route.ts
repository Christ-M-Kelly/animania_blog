import bcrypt from "bcrypt";

// Lors de la création d'un utilisateur
const hashedPassword = await bcrypt.hash(password, 10);
await prisma.user.create({
  data: {
    email,
    name,
    password: hashedPassword,
  },
});
