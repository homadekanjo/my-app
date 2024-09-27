import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
  const postID = params.postId;
  const myFallBack = (<h2>Hello World</h2>);
  return (
    <section>
      <h2>Post details</h2>
      <Suspense fallback={myFallBack}>
        <PostDetails postId = {postID}/>
      </Suspense>
      
    </section>
  );
}
