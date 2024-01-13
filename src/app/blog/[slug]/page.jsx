import PostUser from "@/components/postUser/PostUser";
import styles from "./singlePostPage.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const fetchPostNextApi = async (slug)=>{
    // const post = await fetch("http://localhost:3000/api/blog/"+slug);
    const post = await fetch("http://localhost:3000/api/blog/"+slug,{cache:"no-store"});
    if(!post.ok){
        console.log("something wrong while fetching post");
        return {};
    }
    return post.json();
}

// dynamic title and description for seo
export const generateMetadata = async ({params})=>{
    const {slug} = params;
    const post = await getPost(slug);
    return {
        title: post?.title,
        description: post?.desc
    };
}

const SinglePostPage = async ({params,searchParams})=>{
    const {slug} = params;
    // // fetching without api
    // let post = await getPost(slug);

    // fetching with api
    let post = await fetchPostNextApi(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {post?.img && <Image src={post.img} alt="" fill className={styles.img}/>}
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>{post?.title}</div>
                <div className={styles.detail}>
                    <Suspense fallback={<div>..loading..</div>}>
                        <PostUser userId={post?.userId}></PostUser>
                    </Suspense>
                    
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post?.createdAt.toString().slice(4,16)}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post?.desc}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;