import { postModel } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req,{params})=>{
    const {slug} = params;
    try{
        const post = await postModel.findOne({slug});
        return NextResponse.json(post);
    }
    catch(err){
        console.log(err);
        return NextResponse("error while fetching post");
    }
}

export const DELETE = async (req,{params})=>{
    const {slug} = params;
    try{
        const post = await postModel.deleteOne({slug});
        return NextResponse("post deleted successfully");
    }
    catch(err){
        console.log(err);
        return NextResponse("error while deleting post");
    }
}