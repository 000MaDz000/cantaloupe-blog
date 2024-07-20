import { Edit } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { IPostSection } from "@/models/post";

export default function PostSection({ data, onClickEdit, onClick, demo }: { data: IPostSection, onClickEdit?: () => void, demo?: boolean, onClick?: () => void }) {

    return (
        <div onClick={onClick} className={"dark:text-white " + (onClick ? "cursor-pointer" : "") + (demo ? "max-h-44 flex flex-col-reverse gap-4" : "flex flex-col")}>

            <Box className="grow">

                <Typography variant={demo ? "body1" : "h5"} className="font-open_sans">
                    {data.title}
                    {onClickEdit && (
                        <span>
                            <IconButton onClick={onClickEdit} className="dark:text-gray-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 mx-3">
                                <Edit />
                            </IconButton>
                        </span>
                    )}
                </Typography>
                <Typography variant="body1" mt={1} className={"text-lg " + (demo ? "line-clamp-2" : "")}>{data.body}</Typography>
            </Box>
            <Box className="flex items-center justify-center">
                {data.media && <img src={data.media} alt="" className={"text-center mt-7 " + (demo ? "max-h-40 w-full" : "max-h-96 w-full max-w-inherit")} />}
            </Box>
        </div>
    )
}