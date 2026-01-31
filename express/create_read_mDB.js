const connectDB = require("./config/db_connection");
const User = require("./models/users");

connectDB();

// create
const createUser = async () => {
    try {
        await User.insertOne({ name: "Umair", message: ".Net Developer" });
        console.log("User added Successfully");
    }
    catch (err) {
        console.log(err);
    }
}

// createUser();

// get 
// const getUsers = async() => {
//     try{
//         const users = await User.find();
//         console.log(users);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// getUsers();

// update


const updateUser = async () => {
    const id = "697da577a9d5852bbd306b1a";
    const updatedData = {
        name: "Jawad Abbasi"
    }
    try {
        await User.updateOne({_id: id}, {$set: updatedData});
        console.log("User Updated");
    }
    catch (err) {
        console.log(err);
    }
}

updateUser();