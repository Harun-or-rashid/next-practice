import Link from "next/link";
import {useRouter} from "next/router";
import Post from "../components/post";
import User from "../components/user";
function HomePage({user}){
    const router=useRouter()
    const clickHandler=()=>{
        router.push('/blog')
    }
    return (<div>
        <ul>
            <li>
                <Link href="/news">
                        News
                </Link><br/>
                <Link href='/users'>
                    Users
                </Link>
            </li>
        <button type="button" onClick={clickHandler}> Blogs</button>
        </ul>

    </div>)}
export default HomePage;
