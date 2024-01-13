import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { connectToDb } from "./db_connection";
import { userModel } from "./models";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

const login = async (credentials)=>{
    try{
        connectToDb();
        const user = await userModel.findOne({email:credentials.email});
        if(!user){
            throw new Error("wrong email or password")
        }
        const isPasswordCorrect  = bcrypt.compareSync(credentials.password,user.password);
        const {password} = user;
        if(isPasswordCorrect){
            return user;
        }
        else{
            throw new Error("wrong email or password");
        }
    }
    catch(err){
        console.log(err);
        throw new Error("failed to login");
    }
}

export const {handlers:{GET,POST},auth,signIn,signOut} = NextAuth({...authConfig,
    providers: [GitHub({
    clientId:process.env.GITHUB_ID,
    clientSecret:process.env.GITHUB_SECRET
}),
    CredentialsProvider({
        async authorize(credentials){
            try{
                const user = await login(credentials);
                return user;
            }
            catch(err){
                console.log(err);
                return null;
            }
        }
    })
],callbacks:{
    async signIn({user,account,profile}){
        connectToDb();
        try{
            if(account.provider==="github"){
                const user = await userModel.findOne({email:profile.email});
                if(!user){
                    const newUser = new userModel({
                        username:profile.login,
                        email : profile.email,
                        img: profile.avatar_url
                    })
                    await newUser.save();
                }
            }
            return true;
        }
        catch(err){
            console.log(err);
            return false;
        }
    },
    ...authConfig.callbacks,
}

})