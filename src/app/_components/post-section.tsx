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
                        <IconButton onClick={onClickEdit} className="dark:text-gray-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 mx-3">
                            <Edit />
                        </IconButton>
                    </span>
                )}
            </Typography>
            <Typography variant="body1" mx={3} my={3}>{data.body}</Typography>
        </div>
    )
}