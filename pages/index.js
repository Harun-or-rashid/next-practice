import Link from "next/link";
import {useRouter} from "next/router";

function HomePage({news}){
    const router=useRouter()
    const clickHandler=()=>{
        router.push('/blog')
    }
    return (<div>
        <ul>
            <li>
                <Link href="/news">
                        News
                </Link>
            </li>
        <button type="button" onClick={clickHandler}> Blogs</button>
        </ul>
                <div>
                    {news.map(news => {

                        return(
                            <div>
                                <h1 key={news.id}><p>{news.title}</p></h1>
                            </div>
                        )
                    })}
                </div>
    </div>)}
export default HomePage;
export  async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const news=await res.json();
    console.log(news)
    return{
        props:{
            news:news
        }
        }
}
