import { postModel } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req)=>{
    try{
        const posts = await postModel.find();
        return NextResponse.json(posts);
    }
    catch(err){
        console.log(err);
        return NextResponse("error occured while fetching posts");
    }
}