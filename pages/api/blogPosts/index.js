import blogPosts from "../../../blogPosts.json";

export default (req, res) => {
  res.status(200).json(blogPosts);
};
