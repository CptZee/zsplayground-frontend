import '@/app/global.css'

export const metadata = {
    title: "Z's Playground",
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}

export default RootLayout
