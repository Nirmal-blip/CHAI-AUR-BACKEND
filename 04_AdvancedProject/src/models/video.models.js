import mongoose,{Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const VideoSchema = new Schema({
   videoFile:{
    type:String,// cloudinary video url
    required:true,
    trim:true,
   },
   thumbnail:{
     type:String,
     required:true,
     trim:true,
   },
   owner:{
    type:Schema.Types.ObjectId,
    ref:'User', // Reference to the User model
    required:true,
   },
   title:{
    type:String,
    required:true,
    trim:true,
   },
   description:{
    type:String,
    required:true,
    trim:true,
   },
   duration:{
    type:Number,//will be get throough cloudinary
    required:true,
   },
   views:{
    type:Number,
    default:0, // Default value for views
   },
   isPublished:{
    type:Boolean,
    default:false, // Default value for isPublished
   }

},{timestamps:true});

VideoSchema.plugin(mongooseAggregatePaginate); // Add pagination plugin to the schema

export const Video= mongoose.model('Video', VideoSchema); 