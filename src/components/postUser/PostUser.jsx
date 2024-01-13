import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// const fetchUser = async (userId)=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/"+userId)
//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }
//     return await res.json();
// }

export default async function PostUser({userId}) {
    // fetching using api
    // const user = await fetchUser(userId);

    // fetching without api
    const user = await getUser(userId);
  return (
    <div className={styles.container}>
        <Image src={user?.img || "/noavatar.png"} alt="avatar" 
          width={50}
          height={50}
          className={styles.avatar}/>
        <div className={styles.texts}>
          <span className={styles.title}>Author</span>
          <span className={styles.username}>{user?.username}</span>
        </div>
    </div>
  )
}
