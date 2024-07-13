'use client';
export default function ToggleTheme() {
    const doc = document.documentElement;
    const current = doc.classList.contains("dark") ? "dark" : "light";
    if (current == "dark") {
        doc.classList.remove("dark");
    }
    else {
        doc.classList.add("dark");
    }
}