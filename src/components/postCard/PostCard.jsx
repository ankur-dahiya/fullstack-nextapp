import Link from "next/link";
import styles from "./postCard.module.css";
import Image from "next/image";
const PostCard = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/17815413/pexels-photo-17815413/free-photo-of-sunrise-over-the-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam, eaque commodi fugiat molestiae repellat illo suscipit, eius inventore porro odit fuga nam id nemo, velit soluta voluptates itaque pariatur.</p>
                <Link href="/blog/post" className={styles.link}>Read More</Link>
            </div>
        </div>
    );
}

export default PostCard;