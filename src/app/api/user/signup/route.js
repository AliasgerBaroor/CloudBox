import { User } from "@/models/userModel";
import { hashPassword } from "@/util/backend/BackendFunction";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    let payload = await request.json();
    delete payload.confirmPassword;
    let encrypted_password = await hashPassword(payload.password)
    payload.password = encrypted_password;
    let response_user = await User.create(payload)
    return NextResponse.json({ success : true, user_data :  response_user}, { status: 201 });
}