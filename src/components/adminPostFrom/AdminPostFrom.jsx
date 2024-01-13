"use client";
import { createPost } from "@/lib/actions";
import styles from "./adminPostFrom.module.css";
import {useFormState} from "react-dom";

export default function AdminPostFrom({userId}) {
    const [state,formAction] = useFormState(createPost,undefined);
  return (
    <form action={formAction} className={styles.container}>
        <h1>Add new post</h1>
        <input type="hidden" name="userId" value={userId}></input>
        <input type="text" name="title" placeholder="Title"></input>
        <input type="text" name="slug" placeholder="slug"></input>
        <input type="text" name="img" placeholder="Post img url from pexels"></input>
        <textarea type="text" name="desc" placeholder="Description" rows={10}></textarea>
        <button>Add</button>
        {state?.error}
    </form>
  )
}
