import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";

export default async function AdminPosts() {
    const posts = await getPosts();

    // const deletePostWithId = (id)=>{
    //     "use sever";
    //     return deletePost.bind(null,id)
    // }
    return (
      <div className={styles.container}>
        <h1>Posts</h1>
        {posts.map((post)=>(
            <div className={styles.post} key={post.id}>
                <div className={styles.detail}>
                    {post.img && <Image src={post.img} width={50} height={50}></Image>}
                    <span className={styles.postTitle}>{post.title}</span>
                </div>
                {/* <form action={()=>deletePostWithId(id)}> */}
                <form action={deletePost}>
                    <input type="hidden" name="id" value={post.id}></input>
                    <button className={styles.postButton}>Delete</button>
                </form>
            </div>
        ))}
      </div>
    )
  }