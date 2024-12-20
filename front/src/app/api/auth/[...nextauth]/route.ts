
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
  debug: true,
  // pages: {
  //   signIn: "/", // Página de inicio de sesión
  // },
  // callbacks: {
  //   async redirect({ baseUrl }) {
  //     // Redirigir a la página deseada después de iniciar sesión
  //     return baseUrl; // Cambia esto a la URL a la que deseas redirigir
  //   },
  // },
});

export { handler as GET, handler as POST };


