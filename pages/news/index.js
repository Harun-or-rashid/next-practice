import Link from "next/link";
import {Fragment} from "react";


function NewsPage(){
    return(
            <Fragment>
            <ul>
                <li>
                    <Link href='/news/details'>
                        It's a detail s page
                    </Link>
                </li>
            </ul>
            </Fragment>
    );
    }
    export default NewsPage;
