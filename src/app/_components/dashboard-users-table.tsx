'use client';
import { IUser, UserRole } from "@/models/user";
import { MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useTranslations } from "next-intl";

export default function DashboardUsersTable({ data, changeRole }: { data: IUser[], changeRole: (userId: string, targetRole: UserRole) => void }) {
    const t = useTranslations("Dashboard.users");
    const onChangeRole = (userId: string, targetRole: UserRole) => {
        changeRole(userId, targetRole);
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>{t("name")}</TableCell>
                    <TableCell>{t("email")}</TableCell>
                    <TableCell>{t("role")}</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    data.map(user => (
                        <TableRow key={(user as any)._id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Select value={user.role} color="secondary" onChange={(v) => onChangeRole((user as any)._id, v.target.value as UserRole)}>
                                    <MenuItem value={"admin"}>{t("admin")}</MenuItem>
                                    <MenuItem value={"user"}>{t("user")}</MenuItem>
                                </Select>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}