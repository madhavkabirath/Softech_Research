import "../globals.css";
import Navbar from "@/app/(auth)/Components/Navbar";
import Sidebar from "./Components/Sidebar";
export const metadata = {
  title: "Admin Page",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <div className="md:ml-56">
        {children}
        </div>
      </body>
    </html>
  );
}