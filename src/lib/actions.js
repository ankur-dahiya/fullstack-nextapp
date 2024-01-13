"use server"; //use it at top of file to make all functions server actions instead of writing inside every function
// server actions
// api request is made upon executing server actions
// executed at server side
// if a function is of type "use server" then it must be async, and server action functions create post request by default
// we can create server actions inside components as well

import { revalidatePath } from "next/cache";
import { connectToDb } from "./db_connection";
import { postModel, userModel } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const createPost = async (prevState,formData)=>{
    // read form data
    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");

    const {title,desc,slug,userId,img} = Object.fromEntries(formData);
    try{
        connectToDb();
        const newPost = new postModel({
            title,
            desc,
            slug,
            img,
            userId
        });
        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    }
    catch(err){
        console.log(err);
        return {error:err};
    }
}

export const deletePost = async (formData)=>{
    const {id} = Object.fromEntries(formData);
    try{
        connectToDb();
        await postModel.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    }
    catch(err){
        console.log(err);
        return {error:err};
    }
}

export const handleGithubSignin = async ()=>{
    await signIn("github");
}

export const handleLogout = async ()=>{
    await signOut("github")
}

export const createUser = async (prevState,formData)=>{
    const {username,email,password,img,repeatpassword} = Object.fromEntries(formData);
    if(password!==repeatpassword){
        return {error: "passwords do not match"};
    }
    try{
        connectToDb();
        const user = await userModel.findOne({email});
        if(user){
            return {error: "user already exists"};
        }
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password,salt);

        const newUser = new userModel({
            username,
            email,
            password : hashedPassword,
            img
        })
        await newUser.save();
        return {success: "registration successful"}
    }
    catch(err){
        console.log(err)
        return {error:"something went wrong"};
    }
}

export const deleteUser = async (formData)=>{
    const {id} = Object.fromEntries(formData);
    try{
        connectToDb();
        await postModel.deleteMany({userId:id});
        await userModel.findByIdAndDelete(id);
        console.log("user deleted from db");
        revalidatePath("/admin");
    }
    catch(err){
        console.log(err);
        return {error:err};
    }
}

export const addUser = async (prevState,formData)=>{
    const {username,email,password,img,isAdmin} = Object.fromEntries(formData);
    try{
        connectToDb();
        const user = await userModel.findOne({email});
        if(user){
            return {error: "user already exists"};
        }
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password,salt);

        const newUser = new userModel({
            username,
            email,
            password : hashedPassword,
            img,
            isAdmin
        })
        await newUser.save();
        revalidatePath("/admin");
        return {success: "registration successful"}
    }
    catch(err){
        console.log(err)
        return {error:"something went wrong"};
    }
}

export const loginWithCredentials = async (prevState,formData)=>{
    const {email,password} = Object.fromEntries(formData);
    try{
        await signIn("credentials",{email,password});
    }
    catch(err){
        console.log(err);
        if(err.message.includes("CredentialsSignin")){
            return {error: "wrong email or password"}
        }
        throw err;
    }
}