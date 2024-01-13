import NextAuth from "next-auth"
import { authConfig } from "./lib/auth.config"

export default NextAuth(authConfig).auth




// matcher allows us to filter middleware to run on specific paths. because if matcher is not specified middlware will run for all routes
export const config = {matcher:['/((?!api|static|.*\\..*|_next).*)'],}