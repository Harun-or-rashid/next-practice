import post from "../../components/post";

function News(post) {
return
    <>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
    </>
}

export default News
export async function getStaticPath() {
return {
    paths:[
        {
            params: {
                postId: '1'
            },
        },{
        params: {postId: '2'},
        },
        {
            params: {postId: '3'},

        },

    ],
    fallback:false
}
}
export async function getStaticProps(context) {
    const {params}=context
    const response=await fetch('http://jsonplaceholder.typicode.com/posts/${params.newsId}')
    const post=await response.json()
return {
        props:{
            post:data,
        }
}
}
