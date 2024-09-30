// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken"; // Optional, if you want to sign tokens yourself

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // Perform your own user authentication logic here
        const user = await authenticateUser(credentials.name, credentials.password);
        console.log('NextAuth ========',user);
        
        if (user) {
          // If the user is authenticated, return user object (it will be encoded in JWT)
          return { id: user.id, name: user.name, email: user.email };
        }
        // Return null if authentication fails
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT instead of database sessions
  },
  jwt: {
    // Optional: You can define how the JWT is signed or customized
    secret: process.env.JWT_SECRET,
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY, // Optional if you want to sign it yourself
    encryption: true, // Optional: you can also enable encryption if needed
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add custom fields to the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id; // Add token fields to the session object
      return session;
    },
  },
});
