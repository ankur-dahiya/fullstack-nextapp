"use client";
import styles from "./adminUserForm.module.css";
import { addUser } from "@/lib/actions";
import {useFormState} from "react-dom";

export default function AdminUserFrom() {
    const [state,formAction] = useFormState(addUser,undefined);
  return (
    <form action={formAction} className={styles.container}>
        <h1>Add new user</h1>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="text" name="email" placeholder="Email"></input>
        <input type="text" name="img" placeholder="User img url from pexels"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <select name="isAdmin">
            <option value={false}>Is Admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <button>Add</button>
        {state?.error}
    </form>
  )
}
