import Link from "next/link";
export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const data = await response.json();
  const JSXdataPosts = data.map((post) => {
    return (
      <Link href={`posts/${post.id}`} style={{color: "#000"}}><li
        key={post.id}
        style={{ padding: "10px 8px", marginBlock: "10px", background: "#fff",borderRadius :'13px' }}
      >
        <h2>{post.title}</h2>
        {post.body}
      </li></Link>
      
    );
  });
  return (
    <>
      <h2>Posts</h2>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            width: "90%",
            padding: "10px 3px",
            color: "#000",
            listStyleType: "none",
          }}
        >
          {JSXdataPosts}
        </ul>
      </div>
    </>
  );
}
