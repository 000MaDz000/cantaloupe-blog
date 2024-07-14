import { IPostSection } from "@/models/post";
import { Edit } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

export default function PostSection({ data, onClickEdit }: { data: IPostSection, onClickEdit?: () => void }) {

    return (
        <div>
            <Typography variant="h4">
                {data.title}
                {onClickEdit && (
                    <span>
                        <IconButton onClick={onClickEdit}>
                            <Edit />
                        </IconButton>
                    </span>
                )}
            </Typography>
            <Typography variant="body1" mx={3} my={3}>{data.body}</Typography>
        </div>
    )
}