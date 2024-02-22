import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div id="welcome">
        <h1>Welcome to Jared's Blog page</h1>
      </div>
      <div id="posts">
        <Link href="/blog">Click to view blog posts!</Link>
      </div>
    </main>
  );
}
