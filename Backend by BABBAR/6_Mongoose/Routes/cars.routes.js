import router from "express";
import Cars from "../Models/cars.models.js";
const cars=router();

//veiwing models

cars.get('/',async(req,res)=>{
    
    try{
        const car=await Cars.find();
        res.status(200).json(car.map(c => c.name
        ));
    }
    catch(err){
        console.log("Error fetching cars:", err);
        return res.status(500).json({ success:false,message: "Internal Server Error" });
    }

})


//creating models

cars.post('/',async(req,res)=>{
    try{
        const{name,model}=await req.body;

        const car=new Cars({
            name,
            model,
        });
        await car.save();//to save the things in the database
        res.status(200).json({
            success:true,
            message:"Car created successfully",
            car
        });
    }

    catch(err){
        console.log("Error creating car:", err);
        return res.status(500).json({ success:false,message: "Internal Server Error" });
    }
})

//updating models

cars.put('/:id',async(req,res)=>{
const{id}=req.params;
const{ name, model } = req.body;

try{
    const updatedCar= await Cars.findByIdAndUpdate(id, { name, model });
    if(!updatedCar){
        return res.status(404).json({ success: false, message: "Car not found" });
    }
    //but if the car is found then we will update it
    res.status(200).json({
        success: true,
        message: "Car updated successfully",
        car: updatedCar// this will return the not updated car(previous wala hi deta hai)
    }
    );
}

catch(err){
    console.log("Error updating car:", err);
    return res.status(500).json({ success:false,message: "Internal Server Error" });
}
})

//deleting models

cars.delete('/:id',async(req,res)=>{

    console.log("Deleting car with ID:", req.params);
    try{
        const {id}= req.params;
        const deletedCar=await Cars.findByIdAndDelete(id);
        if(!deletedCar){
            return res.status(404).json({ success: false, message: "Car not found" });
        }
        res.status(200).json({
            success: true,
            message: "Car deleted successfully",
            car: deletedCar
        });
    }
    catch(err){
        console.log("Error deleting car:", err);
        return res.status(500).json({ success:false,message: "Internal Server Error" });
    }

})
export default cars;