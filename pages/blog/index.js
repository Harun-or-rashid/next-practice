import Link from "next/link";
import Post from "../../components/post";
function Blog({post}) {
    return (<div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
        </ul>
        {
           post.map(post=>{
              return( <>
               <Post post={post}>

               </Post>
               </>)
           })


        }

    </div>)
}
 export default Blog
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data)
    return {
        props: {
            post: data
        }
    }
}
