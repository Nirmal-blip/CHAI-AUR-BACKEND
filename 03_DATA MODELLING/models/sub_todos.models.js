import mongoose from "mongoose"

const subTodoSchema= new mongoose.Schema({

    title:{
        type:String,
        required:true   
    },
    description:{   
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false   
    },
    createdBy:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User', // Reference to the User model
       required:true
    }
    },{
        timestamps:true
    }
)


export const SubTodo=mongoose.model("SubTodo",subTodoSchema);// Export the SubTodo model based on the subTodoSchema
// Note: Name SubTodo will be used to create a collection named 'subtodos' in MongoDB (collection is same as table in SQL)