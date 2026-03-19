import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@company.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // TODO: Replace with your user lookup logic
        const user = await fakeUserCheck(credentials.email, credentials.password)
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/signin"
  }
}

export default NextAuth(authOptions)

// Example user check (replace with real DB lookup)
async function fakeUserCheck(email, password) {
  if (email === "admin@demo.com" && password === "admin123") {
    return { id: 1, name: "Admin", email }
  }
  return null
}
