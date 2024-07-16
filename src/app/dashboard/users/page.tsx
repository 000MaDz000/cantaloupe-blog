'use client';

import DashboardUsersTable from "@/app/_components/dashboard-users-table";
import { IUser, UserRole } from "@/models/user";
import { Container, Paper } from "@mui/material";
import { useEffect, useState } from "react";

export default function DashboardUsersPage() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        if (pending) {
            fetch("/api/users").then(r => r.json()).then(setUsers);
        }
    }, [pending]);

    const changeRole = async (userId: string, targetRole: UserRole) => {
        try {
            const res = await fetch("/api/users?userId=" + userId + "&targetRole=" + targetRole, { method: "put" });
            if (res.status !== 200) return;
            setUsers(
                users.map(user => (user as any)._id === userId ? { ...user, role: targetRole } : user),
            )
        }
        catch (err) {

        }
    }

    return (
        <Container>
            <Paper className="mt-7 p-7 bg-slate-100 dark:bg-zinc-700 dark:[&_*]:text-white">
                <DashboardUsersTable data={users} changeRole={changeRole} />
            </Paper>
        </Container>
    )
}