import nextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        _id: string,
        name: string,
        email: string,
    }

    interface Session {
        token: string,
        user: {
            email: string;
            name: string;
            _id: string;
          } & DefaultSession["user"]
    }
}