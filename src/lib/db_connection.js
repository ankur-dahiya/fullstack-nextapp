import mongoose from "mongoose";

// connection will keep track of existing connections
// this will prevent making new connections to db on every reload
const connection = {isConnected:false};

export const connectToDb = async ()=>{
    // if connection exists don't make another connection
    try{
        if(connection.isConnected){
            console.log("using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log("DB connected");   
    }
    catch(err){
        console.log(err);
    }
}