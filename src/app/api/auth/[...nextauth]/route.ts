import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { supabase } from '../../../lib/supaBaseClient'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Supabase',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const { email, password } = credentials as { email: string; password: string };

                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) {
                    throw new Error(error.message);
                }

                return data?.user || null;
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.email = token.email as string;
                session.user.name = token.name as string
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
