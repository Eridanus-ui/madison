import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

// Helper function to fetch user based on idNumber and phoneNumber
const fetchUserByIdAndPhone = async (idNumber, phoneNumber) => {
    try {
        return await User.findOne({ idNumber, phoneNumber });
    } catch (err) {
        throw new Error("Database query failed.");
    }
};

// Function to generate JWT for a user
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Main function to handle user authentication and product fetching
export const fetchProducts = async (req, res) => {
    const { idNumber, phoneNumber } = req.body;

    if (!idNumber || !phoneNumber) {
        return res.status(400).json({ error: 'idNumber and phoneNumber are required!' });
    }

    try {
        const user = await fetchUserByIdAndPhone(idNumber, phoneNumber);

        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        const token = generateToken(user);

        res
            .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 3600000
            })
            .status(200)
            .json({
                message: 'Login successful',
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            });
    } catch (err) {
        res.status(500).json({ error: err.message || 'Failed to fetch user.' });
    }
};