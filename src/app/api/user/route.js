import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { User } from '@/models/userModel';

const JWT_SECRET = process.env.JWT_SECRET;

export const GET = async (request) => {
    // Get token from the Authorization header
    const authHeader = request.headers.get('Authorization');
    const token = authHeader && authHeader.split(' ')[1]; // format "Bearer <token>"
    
    if (!token) {
        return NextResponse.json({ success: false, message: 'No token provided' }, { status: 401 });
    }

    try {
        // Decode and verify the JWT
        const decoded = jwt.verify(token, JWT_SECRET);
        const response_user = await User.findOne({_id : decoded.userId})

        // Decoded payload contains userId and email
        return NextResponse.json({ success: true, user : response_user }, { status: 200 });
    } catch (err) {
        // Handle invalid token or decoding error
        return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 403 });
    }
};
