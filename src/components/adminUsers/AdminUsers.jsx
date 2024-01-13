import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";

export default async function AdminUsers() {
    const users = await getUsers();
    return (
      <div className={styles.container}>
        <h1>Users</h1>
        {users.map((user)=>(
            <div className={styles.user} key={user.id}>
                <div className={styles.detail}>
                    <Image src={user.img || "/noavatar.png"} height={50} width={50}></Image>
                    <span className={styles.username}>{user.username}</span>
                </div>
                <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id}></input>
                    <button className={styles.userButton}>Delete</button>
                </form>
            </div>
        ))}
      </div>
    )
  }
