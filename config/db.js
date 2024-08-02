import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MOMGO_URL);
        console.log(`Conneted To Mongodb Database ${conn.connection.host}`
        .bgMagenta.white);

    }
    catch (error){
        console.log(`Errro in MongoDB ${error}`.bgRed.white);
    }
};
export default connectDB;