'use client';
import CreateSection from "@/app/_components/dashboard-create-section";
import PostSection from "@/app/_components/post-section";
import { IPostSection } from "@/models/post";
import { AddCircle } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function CreatePostPage() {
    const t = useTranslations("Dashboard.creations.post");
    const [sections, setSections] = useState<IPostSection[]>([]);
    const [EmptySections, setEmptySections] = useState(1);
    const [lastOneSaved, setLastOneSaved] = useState(false);

    const addNewSection = () => {
        setEmptySections(EmptySections + 1);
    }

    const onSaveSection = (title: string, body: string) => {
        setSections([...sections, { title, body, media: "" }]);
        setLastOneSaved(true);
        setEmptySections(EmptySections - 1);
    }

    return (
        <div className="m-7 dark:text-gray-300 flex flex-col gap-28">
            <Typography variant="h4">{t("page title")}</Typography>
            <Box className="flex flex-col gap-8 border-2 p-5">
                {
                    sections.map(section => (
                        <PostSection data={section} key={section.body} />
                    ))
                }
            </Box>
            {
                [...new Array(EmptySections)].map((i) => (
                    <CreateSection onSave={onSaveSection} />
                ))
            }

            <Box className="[&_*]:dark:text-gray-300">
                <IconButton onClick={() => addNewSection()} disabled={!lastOneSaved} >
                    <AddCircle />
                </IconButton>
            </Box>
        </div>
    )
}