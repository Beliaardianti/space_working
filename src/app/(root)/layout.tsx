import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import { Toaster } from "@/components/atomics/toaster";
import ReduxProvider from "@/providers/redux";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sewaja",
  description: "Find Glorious Office And Working Space",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Toaster Component (or any global components) */}
            <Toaster />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
