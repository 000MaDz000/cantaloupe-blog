import DashboardPostsPaper from "@/app/_components/dashboard-posts-paper";
import { Container } from "@mui/material";

export default function PostsPage() {
    return (
        <div className="mt-7">
            <Container>
                <DashboardPostsPaper />
                <DashboardPostsPaper draft />
            </Container>
        </div>
    )
}