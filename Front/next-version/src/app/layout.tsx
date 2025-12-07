import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blockchain Based Identity Management System",
  description: "Secure, blockchain-powered certificate verification platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* ⭐ Navbar always at top */}
        <Navbar />

        {/* Page */}
        <main className="flex-1">{children}</main>

        {/* ⭐ Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
