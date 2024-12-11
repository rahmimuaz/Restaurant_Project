import mongoose from "mongoose";


 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rahmi123:rahmi123@cluster0.2kfwr.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}