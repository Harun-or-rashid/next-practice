import User from "../../components/user";
import Link from "next/link";

function Users({user}){
    return <>
        <Link href="/">
            Back to Home
        </Link>
        <hr/>
        <div>
            {user.map(user => {

                return(


                    <div key={user.id}>
                        <User user={user}>

                        </User>
                    </div>
                )
            })}
        </div>
    </>
}
export default Users
export  async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const user=await res.json();
    console.log(user)
    return{
        props:{
            user:user
        }
    }
}
