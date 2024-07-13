'use client';
import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";

export default function SearchBar() {
    const t = useTranslations("Index");
    const input = useRef<HTMLInputElement>(null);
    const [opened, setOpened] = useState(false);
    const id = useId();
    const boxId = useId();

    const handleInnerClick = () => {
        input.current?.select();
        setOpened(true);
    }

    const handleOutsideClick = (e: any) => {
        // close the opened full width input when outside click
        if (e.target.id !== id && e.target.parentElement.id !== boxId) {
            setOpened(false);
        }
    };

    useEffect(() => {
        if (opened) {
            window.addEventListener("click", handleOutsideClick);
            return () => {
                window.removeEventListener("click", handleOutsideClick);
            }
        }
    }, [opened]);

    return (
        <div className="flex justify-start grow sm:justify-center" >
            <Box className="cursor-text sm:grow flex items-center gap-2 max-w-[42rem] py-1 px-3 bg-gray-400 rounded-lg dark:bg-gray-700 dark:text-gray-100" onClick={handleInnerClick} id={boxId}>
                <Search />

                <input
                    ref={input} type="search"
                    className="hidden sm:block grow outline-none bg-transparent placeholder:text-gray-800 focus:placeholder:text-gray-500 dark:placeholder:text-gray-100 placeholder:text-sm"
                    placeholder={t("header.search placeholder")}
                />

            </Box>

            <input
                id={id}
                ref={input}
                type="search"
                className={`top-0 left-0 h-full w-full absolute md:hidden ${opened ? "block" : "hidden"} z-10 outline-none bg-gray-400 dark:bg-gray-700 dark:text-gray-100 placeholder:text-gray-800 focus:placeholder:text-gray-500 dark:placeholder:text-gray-100 px-4 py-1`}
                placeholder={t("header.search placeholder")} />
        </div>
    )

}