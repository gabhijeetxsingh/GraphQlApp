import mongoose from "mongoose";

export const Course = mongoose.model("Course", {
    title : String,
    author : String,
    description : String,
    topic : String,
    url : String
})