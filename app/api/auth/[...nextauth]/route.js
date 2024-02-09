import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifire: {
          label:"Identifire", 
          type: "text",
          placeholder: "Your username or email"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      async authorize(credentials, req) {
        console.log('credentials: ', credentials)
        const profilePicture = "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?size=100"
        // Add logic here to look up the user from the credentials supplied
        const user = {
          id: "1",
          name: credentials.identifire,
          image: profilePicture
        }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })

  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }