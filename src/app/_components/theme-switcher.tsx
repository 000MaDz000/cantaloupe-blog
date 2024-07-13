'use client';

import ToggleTheme from "@/functions/toggle-theme";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export default function ThemeSwitcher() {
    return (
        <Box>
            <IconButton onClick={ToggleTheme} className="hidden dark:flex text-white bg-gray-700 hover:bg-gray-600">
                <DarkMode />
            </IconButton>

            <IconButton onClick={ToggleTheme} className="dark:hidden">
                <LightMode />
            </IconButton>
        </Box>
    )
}