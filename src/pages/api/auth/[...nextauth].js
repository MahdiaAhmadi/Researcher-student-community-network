import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                userId: {
                    label: "UserId",
                    type: "user_id",
                },
                email: {
                    label: "Email",
                    type: "email",
                },
                username: {
                    label: "Username",
                    type: "username",
                },
                displayName: {
                    label: "DisplayName",
                    type: "display_name",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                const credentialDetails = {
                    userId: credentials.userId,
                    email: credentials.email,
                    username: credentials.username,
                    displayName: credentials.displayName,
                    token: credentials.token
                };

                return credentialDetails

            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.user_id = user.userId;
                token.email = user.email;
                token.username = user.username;
                token.display_name = user.displayName;
                token.accessToken = user.token;
            }

            return token;
        },
        session: ({ session, token, user }) => {
            if (token) {
                session.user.userId = token.user_id;
                session.user.email = token.email;
                session.user.username = token.username;
                session.user.displayName = token.display_name;
                session.user.accessToken = token.accessToken;
            }
            return session;
        },
    }
});
