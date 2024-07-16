import { IPostSection } from "@/models/post";
import { Edit } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

export default function PostSection({ data, onClickEdit, demo }: { data: IPostSection, onClickEdit?: () => void, demo?: boolean }) {

    return (
        <div>
            <Typography variant={demo ? "body1" : "h4"}>
                {data.title}
                {onClickEdit && (
                    <span>
                        <IconButton onClick={onClickEdit} className="dark:text-gray-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 mx-3">
                            <Edit />
                        </IconButton>
                    </span>
                )}
            </Typography>
            <Typography variant="body1" mx={demo ? 0 : 3} my={demo ? 1 : 3} className={demo ? "line-clamp-2" : undefined}>{data.body}</Typography>
        </div>
    )
}