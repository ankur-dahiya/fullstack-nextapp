"use client";
import { createUser } from "@/lib/actions";
import styles from "./register.module.css";
import {useFormState} from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Register() {
    const [state,formAction] = useFormState(createUser,undefined);
    let router = useRouter();
    useEffect(()=>{
        state?.success && router.push("/login");
    },[state?.success,router])

  return (
    <form className={styles.form} action={formAction}>
        <input type="text" placeholder="username" name="username"></input>
        <input type="text" placeholder="email" name="email"></input>
        <input type="password" placeholder="password" name="password"></input>
        <input type="password" placeholder="repeatpassword" name="repeatpassword"></input>
        <input type="text" placeholder="image url from pexels" name="img"></input>
        <button>Register</button>
        <Link href="/login">Have an account? <b>Login</b></Link>
        {state?.error}
    </form>
  )
}
