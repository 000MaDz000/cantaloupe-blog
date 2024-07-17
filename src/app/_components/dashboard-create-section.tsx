'use client';
import { Box, Button, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import axios from "axios";
import { IPostSection } from "@/models/post";

export default function CreateSection({ onSave, defaultData }: { postId?: string, defaultData?: IPostSection, onSave: (title: string, body: string, mediaURL?: string,) => void }) {
    const t = useTranslations("Dashboard.creations.post");
    const title = useRef<HTMLInputElement>(null);
    const body = useRef<HTMLTextAreaElement>(null);
    const [media, setMedia] = useState("");
    const [titleErr, setTitleErr] = useState("");

    const saveSection = async () => {
        onSave(
            title.current?.value || "",
            body.current?.value || "",
            media
        )
    }

    const sectionMediaHandler = (e: any) => {
        const value = e.target.value;
        setMedia(value);
    }

    return (
        <Box className="flex flex-col gap-4">
            <Typography variant="h5">{t("create section title")}</Typography>
            <Box className="flex flex-col gap-10 dark:[&_*]:placeholder:text-gray-300 dark:[&>*]:caret-white dark:[&>*]:text-gray-200">
                <Box className="flex flex-col gap-3 dark:border-2 dark:border-sky-900 rounded-md">
                    {titleErr && <Typography color="red">{t(titleErr)}</Typography>}
                    <TextField className="[&_*]:text-inherit" fullWidth inputRef={title} defaultValue={defaultData?.title} onChange={() => titleErr ? setTitleErr("") : ""} name="section-title" variant="outlined" color={titleErr ? "error" : undefined} placeholder={t("section title placeholder")} />
                </Box>

                <Box className="flex flex-col gap-3 dark:border-2 dark:border-sky-900 rounded-md">
                    <TextField className="[&_*]:text-inherit" placeholder="media url" onChange={sectionMediaHandler}></TextField>
                </Box>

                <TextareaAutosize ref={body} defaultValue={defaultData?.body} name="section-title" color="secondary" placeholder={t("section body placeholder")} className="min-h-56 outline-none p-5 border dark:bg-transparent dark:border-2 dark:border-sky-900 rounded-md" />
                <Button variant="contained" onClick={saveSection}>{t("save section")}</Button>
            </Box>
        </Box>
    )
}