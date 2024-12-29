import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/register",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
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
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.newUser = token.newUser as boolean;
      return session;
    },
    async redirect({ url, baseUrl }) {
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
