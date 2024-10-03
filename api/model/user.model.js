import mongoose from "mongoose";

// User schema (existing users with policies)
const userSchema = new mongoose.Schema({
    idNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true }, // User's name
    policies: [{
        policyId: String,
        productName: String,
        subscribedDate: Date,
        consentForm: String, // URL or embedded form template
        termsAccepted: { type: Boolean, default: false },
    }],
});

export const User = mongoose.model('User', userSchema);