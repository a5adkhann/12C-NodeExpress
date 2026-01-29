const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://asadkaptech_db_user:12C-backend@cluster0.8rfwtpd.mongodb.net/?appName=Cluster0");
        console.log("Database Connected");
    }
    catch(err){
        console.log("Error Connecting DB:", err);
    }
}

module.exports = connectDB;