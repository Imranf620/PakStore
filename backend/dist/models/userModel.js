import mongoose, { Schema } from "mongoose";
import validator from "validator";
// Create the schema with type IUser
const userSchema = new Schema({
    _id: {
        type: String,
        required: [true, "Please enter Id"],
    },
    name: {
        type: String,
        required: [true, "Please enter Name"],
        minlength: [3, "Name should be at least 3 characters long"],
        maxlength: [50, "Name should not be more than 50 characters long"],
    },
    email: {
        type: String,
        required: [true, "Please enter Email"],
        unique: true,
        validate: [
            validator.default.isEmail,
            "Please enter a valid email address",
        ],
    },
    photo: {
        type: String,
        required: [true, "Please enter Photo URL"],
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please enter your gender"],
    },
    dob: {
        type: Date,
        required: [true, "Please enter your date of birth"],
    },
}, {
    timestamps: true,
});
// Define the virtual age property
userSchema.virtual("age").get(function () {
    const today = new Date();
    const birthDate = new Date(this.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
});
// Export the model
export const User = mongoose.model("User", userSchema);
