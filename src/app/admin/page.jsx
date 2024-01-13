import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminPostFrom from "@/components/adminPostFrom/AdminPostFrom";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import AdminUserFrom from "@/components/adminUserForm/AdminUserForm";
import { auth } from "@/lib/auth";

const Admin = async ()=>{
    const session = await auth();
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPosts></AdminPosts>
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminPostFrom userId={session.user.id}></AdminPostFrom>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUsers></AdminUsers>
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminUserFrom></AdminUserFrom>
                </div>
            </div>
        </div>
    )
}

export default Admin;