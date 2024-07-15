'use client';
import CreateSection from "@/app/_components/dashboard-create-section";
import PostSection from "@/app/_components/post-section";
import { IPost, IPostSection } from "@/models/post";
import { AddCircle, Save } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function CreatePostPage() {
    const t = useTranslations("Dashboard.creations.post");
    const [sections, setSections] = useState<IPostSection[]>([]);
    const [EmptySection, setEmptySection] = useState(true);
    const [emptySectionData, setEmptySectionData] = useState<IPostSection>({ title: "", body: "", media: "" });
    const [classification, setClassification] = useState("");
    const [classificationErr, setClassificationErr] = useState("");
    let canSave = false;

    const addNewSection = () => {
        setEmptySection(true);
    }

    const onSaveSection = (title: string, body: string) => {
        setSections([...sections, { title, body, media: "" }]);
        setEmptySection(false);
        setEmptySectionData({ title: "", body: "", media: "" });
    }

    const onEditSavedSection = (val: IPostSection) => {
        setEmptySection(true);
        setEmptySectionData(val);
        setSections(sections.filter(sec => sec.body !== val.body || sec.title !== val.title));
    }

    const savePost = async () => {
        if (!classification) return setClassificationErr("errors.classification required");

        const data: IPost = {
            classification,
            sections,
        }

        const response = await axios.post("/api/posts", data);
        console.log(response);
    }

    const onChangeClassification = (classification: string) => {
        if (classificationErr) setClassificationErr("");
        setClassification(classification);
    }

    if (sections.length) canSave = true;
    else canSave = false;

    return (
        <div className="m-7 dark:text-gray-300 flex flex-col gap-28">
            <Typography variant="h4">{t("page title")}</Typography>

            <Box className="">
                {classificationErr && <Typography color="red" className="text-red-700" mb={1}>{t(classificationErr)}</Typography>}
                <Box className="dark:[&_*]:text-white dark:[&_*]:boder dark:[&_*]:border-sky-600">
                    <TextField fullWidth name="post-classification" label={t("post classification")} onChange={(e) => onChangeClassification(e.target.value)} />
                </Box>
            </Box>

            {sections.length ? (
                <Box className="flex flex-col gap-8 border-2 p-5">
                    {
                        sections.map(section => (
                            <PostSection data={section} key={section.body + section.title} onClickEdit={() => onEditSavedSection(section)} />
                        ))
                    }
                </Box>
            ) : undefined}

            {
                EmptySection && <CreateSection onSave={onSaveSection} defaultData={emptySectionData} />
            }

            <Box className="[&_*]:dark:text-gray-300 flex justify-between">
                <Button className="flex items-center gap-4" endIcon={<AddCircle />} variant="contained" color="success" onClick={() => addNewSection()} disabled={EmptySection}>
                    <Typography>{t("add section")}</Typography>
                </Button>


                <Button className="flex items-center gap-4" endIcon={<Save />} variant="contained" color="secondary" disabled={!canSave} onClick={savePost}>
                    <Typography>{t("save post")}</Typography>
                </Button>
            </Box>
        </div>
    )
}