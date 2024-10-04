import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

// Helper function to fetch user based on idNumber
const fetchUserById = async (idNumber) => {
    try {
        return await User.findOne({ idNumber });
    } catch (err) {
        console.error("Database query failed:", err);
        throw new Error("Database query failed.");
    }
};

// Function to generate JWT for a user
const generateToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Main function to handle user authentication and product fetching
export const fetchProducts = async (req, res) => {

    const { idNumber, phoneNumber } = req.body;


    if (!idNumber || !phoneNumber) {
        return res.status(400).json({ error: 'idNumber and phoneNumber are required!' });
    }

    try {

        const user = await fetchUserById(idNumber);

        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        const token = generateToken(user);

        res
            .cookie("access_token", token, {
                httpOnly: false,
                secure: false,
                maxAge: 3600000
            })
            .status(200)
            .json({
                message: 'Login successful',
                user: user
            });
    } catch (err) {
        res.status(500).json({ error: err.message || 'Failed to fetch user.' });
    }
};


// Persistent sign-in function
export const persistentSignIn = async (req, res) => {

    const idNumber = req.user.idNumber;

    try {
        const validUser = await fetchUserById(idNumber);

        if (!validUser) {
            return res.status(404).json({ error: 'User not found!' });
        }

        // Return user data if found
        return res.status(200).json({ message: 'User Found!!', user: validUser });

    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};