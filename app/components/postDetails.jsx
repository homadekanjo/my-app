export default async function PostDetails( params ) {
  const postID = params.postId;
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postID}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <section>
      <h2>Post details</h2>
      <div
        className="post"
        style={{ background: "#fff", color: "#000", padding: "3px 2px" }}
      >
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </section>
  );
}
