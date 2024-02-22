import getBlogPosts from "../../get";

export const getStaticProps = async (context) => {
  const data = await getBlogPosts();

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

export default function BlogPosts({ posts }) {
  return (
    <>
      <div>
        <h1>Blog Posts</h1>
      </div>
      <div>
        {posts.map((post) => {
          return (
            <div id={post.id}>
              <p>{post.title}</p>
              <p>Author: {post.author}</p>
              <p>Industry: {post.industry}</p>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
