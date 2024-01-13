import {handleGithubSignin } from "@/lib/actions";
import Login from "@/components/login/Login";
import styles from "./login.module.css";

const LoginPage = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubSignin}>
                    <button className={styles.github}>Login With Github</button>
                </form>
                <Login></Login>
            </div>
        </div>
    )
}

export default LoginPage;