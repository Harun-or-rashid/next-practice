import Link from "next/link";
import {useRouter} from "next/router";

function HomePage(){
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
    </div>)}
export default HomePage;
