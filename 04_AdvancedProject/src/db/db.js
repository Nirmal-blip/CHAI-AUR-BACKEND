import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js'



//DB IS IN ANOTHER CONTINENT


const ConnectDB=async ()=>{
try{
    const res=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(`Database connected successfully ${res.connection.host}`);//response from mongoose connect

}
catch(err){
    console.log("MONGODB CONNECTION ERROR", err);
    process.exit(1); // Exit the process with failure
}

}

export default ConnectDB;