import { User } from "../model/user.model.js";

// Function to get the policies of a user
export const fetchProducts = async (req, res) => {
    const idNumber = req.params.idNumber;
    try {
        const user = await User.find({ idNumber });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
}
