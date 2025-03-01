import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/app/models/User";
import Payment from "@/app/models/Payment";
import connectDB from "@/app/db/connectdb";

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await connectDB();
        const currUser = await User.findOne({ email: email });
        if (!currUser) {
          User.create({
            username: user.email.split("@")[0],
            email: user.email,
          });
        }
        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.name;
      return session;
    },
  },
});
export { authoptions as GET, authoptions as POST };
