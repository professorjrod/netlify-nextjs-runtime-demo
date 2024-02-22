import blogPosts from "../../../blogPosts.json";

export default (req, res) => {
  const { id } = req.query;
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    res.status(404).json({ error: "post not found" });
  } else if (!id) {
    res.status(200).json(blogPosts);
  } else {
    res.status(200).json(post);
  }
};
