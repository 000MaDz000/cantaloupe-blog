'use client';

import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function GoogleLoginButton() {
    return (
        <GoogleLogin onSuccess={(data) => {
            axios.post("/api/auth/google", data);
        }} />
    )
}