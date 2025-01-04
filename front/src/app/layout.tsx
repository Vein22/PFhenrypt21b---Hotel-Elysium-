"use client";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Chatbot from "@/components/chatbot/chatbot";
import { LogginProvider } from "@/context/logginContext";
import Providers from "./providers";
import Sidebar from "@/components/SideBar";
import ShowComponent from "@/components/ShowComponent/ShowComponent";
import ProvidersAuth from "@/context/providersAuth";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <ProvidersAuth>
            <LogginProvider>
              <Header />

<<<<<<< HEAD
              <div className="flex flex-1 ">
=======
              <div className="flex flex-1 bg-gray-100">
>>>>>>> 781d3bb557e44e44a54d2796140010279ba3a839
                <ShowComponent>
                  <Sidebar />
                </ShowComponent>

<<<<<<< HEAD
                <main className="flex-1 overflow-y-auto">{children}</main>
=======
                <main className="flex-1 p-4 bg-gray-100 overflow-y-auto ml-5">
                  {children}
                </main>
>>>>>>> 781d3bb557e44e44a54d2796140010279ba3a839
              </div>

              <Chatbot />
              <Footer />
            </LogginProvider>
          </ProvidersAuth>
        </Providers>
      </body>
    </html>
  );
}
