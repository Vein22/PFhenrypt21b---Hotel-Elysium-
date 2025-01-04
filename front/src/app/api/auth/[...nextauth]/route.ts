<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from "next";
=======
>>>>>>> 781d3bb557e44e44a54d2796140010279ba3a839
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
<<<<<<< HEAD
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/register",
  },
  callbacks: {
    async jwt({ token, user, account, profile }: { token: any, user?: any, account?: any, profile?: any }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id;

        if (profile) {
          // Verificar si el correo existe en la base de datos
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/check-email?email=${profile.email}`
          );
          const data = await response.json();
          if (data.exists) {
            token.email = profile.email;
          } else {
            token.newUser = true;
          }
        }
      }
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      session.accessToken = token.accessToken as string;
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.newUser = token.newUser as boolean;
      return session;
    },
    async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
      if (url === "/auth/register") {
        return baseUrl + url;
      }
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const GET = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);
export const POST = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);
=======
  
  callbacks: {
    async signIn({ user, account}) {
      if (account && account.provider === "google") {
        try {
          console.log('====================================');
          console.log(account.access_token);
          console.log('====================================');
          const response = await fetch(`${process.env.API_URL}/auth/google-auth`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${account.access_token}`,
            },
          });

          if (response.ok) {
            const users = await response.json();
            const userExists = users.some((u: { email: string }) => u.email === user.email);
            
            if (userExists) {
              const password = "Admin123+";
              const emailgoogle = user.email ?? "";
              return `/logingoogle?email=${encodeURIComponent(emailgoogle)}&password=${encodeURIComponent(password)}`;

            } else {


              // Si no existe el correo registrado, redirige a la página de registro
              const name = user.name ?? "";
              const emailgoogle = user.email ?? "";
              console.log(`Redirecting to register page with name: ${name} and email: ${emailgoogle}`);
              return `/registergoogle?name=${encodeURIComponent(name)}&email=${encodeURIComponent(emailgoogle)}`; // Cambia la ruta si es necesario
            }
          }

          return false; // Si la API falla, deniega el acceso ojo importante
        } catch (error) {
          console.error("Error en signIn callback:", error);
          return false;
        }
      }

      // Si no es Google, permite el inicio de sesión
      return true;
    },
  },
  pages: { 
    error: "/auth/error", 
  },
  



});

export const GET = handler;
export const POST = handler;
>>>>>>> 781d3bb557e44e44a54d2796140010279ba3a839
