// require('dotenv').config({path: '/.env'})

import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME} from "./constants"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
    
})



try {
    app.on("error", (error) => {
      console.log("ERR : ", error);
      throw error;
    });
  
    connectDB()
      .then(() => {
        app.listen(process.env.PORT || 8000, () => {
          console.log(`server is running at port : ${process.env.PORT || 8000}`);
        });
      })
      .catch((error) => {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Optionally exit the process
      });
  } catch (error) {
    console.error("Error during server setup:", error);
    process.exit(1); // Optionally exit the process
  }


/*
import express from "express"
const app = express()


//wrote in iife
( async () => {

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR : ",error)
            throw error
        })

        app.listen(process.env.PORT , () => {
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    } catch(error){
        console.error("ERROR : ",error)
        throw error
    }

})()

*/