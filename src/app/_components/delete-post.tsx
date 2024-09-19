'use client';
import { Delete } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeletePostButton({ postId }: { postId: string }) {
    const [snack, setSnack] = useState("");
    const router = useRouter();
    const duration = 5000;
    const t = useTranslations("Dashboard");

    const deletePost = async () => {
        try {
            setSnack("creations.post.post deleted");
            await axios.delete("/api/posts/" + postId);
            router.back();
        }
        catch (err) {
            setSnack("creations.post.post deleted err");
        }
    }
    return (
        <>
            <IconButton onClick={deletePost} color="warning">
                <Delete />
            </IconButton>
            {snack && (
                <Snackbar open message={t(snack)} color="success" autoHideDuration={duration} onClose={deletePost}>
                    <Alert variant="filled" severity="success" color="success" sx={{ width: "100%" }}>
                        {t(snack)}
                    </Alert>
                </Snackbar>
            )}
        </>

    )
}