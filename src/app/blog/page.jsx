import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

// TODO: fix dates

// fetching data from nextApi
const getPostsNextApi = async ()=>{
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts"); //by default next caches api requests
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next: {revalidate:3600}}); //now reponse will be fetched after a duration(3600s) once cached
    const res = await fetch("http://localhost:3000/api/blog",{cache:"no-cache"}); //now reponse will not be cached
    if(!res.ok){
        console.log("error occured")
        return [];
    }
    return res.json();
}

const BlogPage = async ({params,searchParams})=>{
    // console.log(searchParams)

    // // fetching without api
    // const posts = await getPosts();

    // fetching posts using next api
    const posts = await getPostsNextApi();

    return (
        <div className={styles.container}>
            {posts.map((post)=>(
                <div key={post.id}className={styles.post}>
                <PostCard post={post}></PostCard>
                </div>
            ))}
        </div>
    )
}

export default BlogPage;