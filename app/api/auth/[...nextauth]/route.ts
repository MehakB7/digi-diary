import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import User from "@/models/userModal";
import { connectDB } from "@/lib/dbconfig";
import NextAuth from "next-auth/next";

const OPTIONS: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: "login",
            type: "credentials",
            credentials: {
                email: {
                  label: "Email",
                  type: "text",
                  placeholder: "email@domain.com",
                },
                password: {
                  label: "Password",
                  type: "password",
                },
              },

            async authorize(credentials){
              
                await connectDB();
                try{
                    
                const user = await User.findOne({ email: credentials?.email });
                if (!user) {
                  return null;
                }
            
                const valid = await bcrypt.compare(credentials?.password||"", user.password);
                if (!valid) {
                  return null
                }

                return user;            
            } catch(e){

                return null;

            }
                
        }})
    ],
    pages: {
        signIn: '/login',
    },
    session: {
        strategy:"jwt",
    },

    callbacks: {
        async jwt ({
          token, user,
        }) {
          if (user) {
            return {
              ...token,
              id: user._id,
              email: user.email,
              firstName: user.name,
            };
          }
          return token;
        },
        async session ({
          session, token,
        }) {
    
          if (token) {
            session.token = token.token as string;
            session.user.email = token.email as string;
            session.user.name = token.name as string;
            session.user._id = token.id as string;
          }
          return session;
        },
      },

    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(OPTIONS);

export {
  handler as GET, handler as POST,
};

