import styles from "./singlePostPage.module.css";
import Image from "next/image";

const SinglePostPage = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/17815413/pexels-photo-17815413/free-photo-of-sunrise-over-the-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>Title</div>
                <div className={styles.detail}>
                    <Image src="/noavatar.png" alt="avatar" 
                    width={50}
                    height={50}
                    className={styles.avatar}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus ratione eos alias, soluta numquam expedita illo deleniti exercitationem blanditiis reprehenderit, molestias architecto accusantium modi in consequatur. Sit, iste laboriosam.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;