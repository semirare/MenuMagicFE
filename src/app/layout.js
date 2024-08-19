import "./globals.css";
import NavBar from "./navbar/page";

export const metadata = {
  title: "MenuMagic",
  description: "Make meal planning easy with magic!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full w-full flex flex-col">
        <NavBar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
