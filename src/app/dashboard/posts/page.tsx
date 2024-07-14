import DashboardPostsPaper from "@/app/_components/dashboard-posts-paper";
import { Box, Container } from "@mui/material";

export default function PostsPage() {
    return (
        <div className="mt-7">
            <Container>
                <Box className="flex flex-col gap-4">
                    <DashboardPostsPaper />
                    <DashboardPostsPaper draft />
                </Box>
            </Container>
        </div>
    )
}