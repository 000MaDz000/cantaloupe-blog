import PageBox from "@/app/_components/page-box";
import PostSection from "@/app/_components/post-section";
import ValidateId from "@/functions/validate-id";
import { UserVisitsCounter } from "@/functions/visits";
import { Post } from "@/models";
import { Container } from "@mui/material";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: { classification: string, id: string } }) {

    const { id } = params;
    if (!ValidateId(id)) notFound();

    const data = (await Post.findById(id))?.toObject();

    if (!data) notFound();

    await UserVisitsCounter(data);


    return (
        <PageBox withHeader>
            <Container className="mt-7">

                {data && data.sections.map(sectionData => (
                    <PostSection key={sectionData.body} data={sectionData} />
                ))}
            </Container>
        </PageBox>
    )
}