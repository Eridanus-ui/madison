import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

// Function to get the policies of a user
export const fetchProducts = async (req, res) => {
    const idNumber = req.body.idNumber;
    const phoneNumber = req.body.phoneNumber
    console.log(idNumber);
    try {
        const user = await User.findOne({ idNumber, phoneNumber });
        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {});
        res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};
