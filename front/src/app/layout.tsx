"use client"; // Esto es necesario en un componente que se ejecuta en el cliente (Next.js 13 con React Server Components)

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Chatbot from "@/components/chatbot/chatbot";
import { LogginProvider, useLoggin } from "@/context/logginContext";
import Providers from "./providers";
import ProvidersAuth from "@/contextauth/providersAuth";
import Sidebar from "@/components/SideBar";
import ShowComponent from "@/components/ShowComponent/ShowComponent";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Aquí se debe llamar al hook dentro del componente
  const { userData } = useLoggin();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <ProvidersAuth>
            <LogginProvider>
              <Header />
              <div className="flex flex-1 bg-gray-100">
                  <ShowComponent>
                    <Sidebar />
                  </ShowComponent>
              
                <main className="flex-1 p-4 bg-gray-100 overflow-y-auto ml-5">
                  {children}
                </main>
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
