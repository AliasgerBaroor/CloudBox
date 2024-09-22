import { User } from "@/models/userModel";
import { checkPassword, hashPassword } from "@/util/backend/BackendFunction";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET; // Store your secret in an environment variable

export const POST = async (request) => {
    let { email, password } = await request.json();
    let encrypted_password = await hashPassword(password);
    
    // Find user by email
    let response_email = await User.findOne({ email }); // Assuming 'findOne' to return a single user
    if (response_email) {
        if (checkPassword(response_email.password, encrypted_password)) {
            // Generate JWT
            const token = jwt.sign(
                { userId: response_email._id, email: response_email.email }, // Payload
                JWT_SECRET, // Secret key
                { expiresIn: '3h' } // Token expiration (adjust as needed)
            );

            // Return the JWT token in the response
            return NextResponse.json({ success: true, token }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
        }
    } else {
        return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }
};
