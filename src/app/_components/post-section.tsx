import { IPostSection } from "@/models/post";
import { Typography } from "@mui/material";

export default function PostSection({ data }: { data: IPostSection }) {

    return (
        <div>
            <Typography variant="h4">{data.title}</Typography>
            <Typography variant="body1" mx={3} my={3}>{data.body}</Typography>
        </div>
    )
}