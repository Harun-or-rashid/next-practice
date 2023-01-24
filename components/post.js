
function Post({post}){
  return(
      <>
     <div key={post.id}>
         <h3> {post.title}</h3>
     </div>
          {/*{news.body}*/}
      </>
  )
}

export default Post
