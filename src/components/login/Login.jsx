"use client";
import {useFormState} from "react-dom";
import {loginWithCredentials} from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./login.module.css";

export default function Login() {
  const [state,formAction] = useFormState(loginWithCredentials,undefined)
  const router = useRouter();
  useEffect(()=>{
    state?.success && router.push("/")
  },[state?.success,router])
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="email" name="email"></input>
      <input type="password" placeholder="password" name="password"></input>
      <button>Login</button>
      <Link href="/register">{"Don't Have an account?"}<b>Register</b></Link>
      {state?.error}
    </form>
  )
}
