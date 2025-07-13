import mongoose from 'mongoose';
import { Schema ,model} from 'mongoose';



const carSchema=new Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
 },{
    timestamps: true,
    })


const Cars= model('Cars', carSchema);
     
export default Cars;  