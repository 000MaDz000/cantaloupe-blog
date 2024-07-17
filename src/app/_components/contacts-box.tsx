'use client';
import { Facebook, X, YouTube } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function ContactsBox() {
    const t = useTranslations();
    return (
        <Container maxWidth="md">
            <Box className="text-sm flex items-center justify-between gap-4 bg-gray-200 dark:bg-zinc-800 dark:text-neutral-300 dark:[&_*]:text-inherit px-4 py-1">
                <Box>
                    <Typography variant="caption" className="font-contact text-lg font-normal">{t("contacts.follow", { appname: t("app logo") })}</Typography>
                </Box>

                <Box>
                    <IconButton>
                        <Facebook />
                    </IconButton>

                    <IconButton>
                        <YouTube />
                    </IconButton>

                    <IconButton>
                        <X />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    )
}