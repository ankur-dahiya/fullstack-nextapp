import { connectToDb } from "./db_connection";
import { postModel, userModel } from "./models";
import { unstable_noStore as noStore } from "next/cache";


// const users = [
//     {id:1,name:"Ankur"},
//     {id:2,name:"Dahiya"},
//     {id:3,name:"Nikhil"},
//     {id:4,name:"Sourabh"},
// ]
// const posts = [
//     {id:1,title:"new title1",body:".......",userId:1},
//     {id:2,title:"new title2",body:".......",userId:2},
//     {id:3,title:"new title3",body:".......",userId:3},
//     {id:4,title:"new title4",body:".......",userId:4},
// ]

// by default next.js will catch all responses so if there's an update it'll not be visible immediately at client side
// revalidatePath() can be used to revalidate path(to check if there's new update available) even if data is catched

export const getPosts = async ()=>{
    noStore(); // used to stop caching for this response
    try{
        connectToDb();
        const posts = await postModel.find();
        return posts;
    }
    catch(err){
        console.log("getPosts error: ",err);
    }
}
export async function getPost(slug){
    // const post = posts.find((post)=>post.id===parseInt(id));
    // noStore();
    try{
        connectToDb();
        const post = await postModel.findOne({slug});
        return post;
    }
    catch(err){
        console.log("getPost error: ",err);
    }
}
export async function getUser(id){
    // return users.find((user)=>user.id===parseInt(id));
    try{
        connectToDb();
        const user = userModel.findById(id);
        return user;
    }
    catch(err){
        console.log("getUser error: ",err);
    }

}

export async function getUsers(){
    try{
        connectToDb();
        const users = await userModel.find();
        return users;
    }
    catch(err){
        console.log("getUsers error: ",err);
    }
}
