import { prisma } from '../../db/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'Post ID is required' });
    }

    const post = await prisma.post.update({
      where: { id: parseInt(id, 10) },
      data: { likes: { increment: 1 } },
    });

    res.status(200).json(post);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
