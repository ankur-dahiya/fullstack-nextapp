import Register from "@/components/register/Register";
import styles from "./register.module.css";

const RegisterPage = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Register/>
            </div>
        </div>
    )
}

export default RegisterPage;