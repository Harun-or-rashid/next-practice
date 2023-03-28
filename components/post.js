import Link from "next/link";

function Post({post}){
  return(
      <>
     <div key={post.id}>
         <Link href={'blog/${post.postId}'} passHref>
         <h3> {post.title}</h3>
     </Link>

     </div>
          {/*{news.body}*/}
      </>
  )
}

export default Post
