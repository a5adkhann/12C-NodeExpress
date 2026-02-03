const connectDB = require("./config/db_connection");
const User = require("./models/users");

connectDB();

// update
// const updateUser = async () => {
//     const id = "697da577a9d5852bbd306b1a";
//     const updatedData = {
//         name: "Jawad Abbasi"
//     }
//     try {
//         await User.updateOne({_id: id}, {$set: updatedData});
//         console.log("User Updated");
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// updateUser();


const deleteUser = async() => {
    try{
        await User.deleteOne({_id: "697da54b1dda0f20fd813e0c"});
        console.log("User Deleted Successfully");
    }
    catch(err){
        console.log("Error Deleting:", err);
    }
}

deleteUser();


