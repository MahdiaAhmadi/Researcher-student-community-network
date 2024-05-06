import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: { label: "Username", type: "text" },
                email: { label: "Email", type: "text" },
                institution: { label: "Institution", type: "text" },
            },
            async authorize(credentials, req) {

                const user = credentials
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],

    pages: {
        signIn: "/login",
    },
});