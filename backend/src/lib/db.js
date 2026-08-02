import mongoose from "mongoose"; 

export const connectDB = async () => { 
    try {
    const { MONGO_URI } = process.env;
    if(!MONGO_URI) throw new Error("MONGO URI is not Set")
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO CONNECTED" , conn.connection.host);
   }catch(error){ 
    console.error("Error connection to MONGODB" , error)
    process.exit(1); // 
}
}