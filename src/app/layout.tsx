if (!global.models) {
    global.models = {} as any;
}

export default async function RootLayout({ children }: any) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
} 