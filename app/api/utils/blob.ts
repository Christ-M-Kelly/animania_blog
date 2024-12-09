export async function uploadImage(file: Blob): Promise<string> {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Erreur de l'API : ${response.statusText}`);
    }

    const data = await response.json();

    // Retourne l'URL de l'image stockée
    return data.url;
  } catch (error) {
    console.error("Erreur lors de l'upload de l'image :", error);
    throw new Error("L'upload de l'image a échoué.");
  }
}
