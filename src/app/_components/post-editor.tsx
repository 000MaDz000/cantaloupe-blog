'use client';
import { IPost, IPostSection } from "@/models/post";
import PostSection from "./post-section";
import { useState } from "react";
import CreateSection from "./dashboard-create-section";

export default function PostEditor({ post }: { post: IPost }) {
    const [sections, setSections] = useState<(null | IPostSection)[]>(post.sections);
    const [openedEdit, setOpenedEdit] = useState<{ section: IPostSection, index: number } | null>(null);

    const onWantEdit = (section: IPostSection, index: number) => {
        setOpenedEdit({
            section, index
        });
    }
    const onSaveEdited = (section: IPostSection, index: number) => {
        sections[index] = section;
        setSections([...sections]);
        setOpenedEdit(null);
    }

    const isOpenedInEdit = (i: number) => openedEdit?.index === i;

    return (
        <div>
            {post.sections.map((section, i) => (
                isOpenedInEdit(i) ?
                    <CreateSection defaultData={openedEdit?.section as any} onSave={(title, body, mediaURL) => onSaveEdited({ title, body, media: mediaURL || "" }, i)} />
                    :
                    <PostSection data={section} onClickEdit={() => onWantEdit(section, i)} />
            ))}
        </div>
    )
} 