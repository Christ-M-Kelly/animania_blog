import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import process from "process";

dotenv.config();

const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri);

async function updateCategories() {
  try {
    await client.connect();
    const database = client.db("Animania");
    const posts = database.collection("Post");

    const result = await posts.updateMany(
      {}, // Sélectionne tous les documents
      {
        $set: { category: "animaux terrestres" }, // Définit la catégorie par défaut
      }
    );

    console.log(`${result.modifiedCount} documents ont été mis à jour`);
  } finally {
    await client.close();
  }
}

updateCategories().catch(console.dir);
