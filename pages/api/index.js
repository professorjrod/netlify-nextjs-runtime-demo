import getBlogPosts from "get";
import addBlogPost from "post";
export default async (req, res) => {
  if (req.method === "GET") {
    console.log("GET REQUEST");
    const data = await getBlogPosts();
    res.status(200).json({ posts: data });
  }
  if (req.method === "POST") {
    console.log("POST REQUEST");
    if (req.body.title && req.body.content && req.body.industry) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
        industry: req.body.industry,
        author: Date.now(),
      };

      const insertedId = await addBlogPost(newPost);
      res.revalidate("/blog");
      res.status(200).json(insertedId);
    } else {
      res.status(400).json({ error: "title,body,or content missing" });
    }
  }
};
