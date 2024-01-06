import mongoose from "mongoose";

const connectMongoDB = async function(){
    try {
        await mongoose.connect(process.env.DATABASE_API_KEY as string)
        console.log("Connection Established👍")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB