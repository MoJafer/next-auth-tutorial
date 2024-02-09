'use client'
import Image from "next/image"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Home() {
  const { data: session, status } = useSession()
  console.log(session)

  return (
    <div>
      {session ?
        <div className="flex flex-col items-center ">
          <p className="">welcome {session.user?.name}</p>

          <Image
            priority={true} // Change this line
            src={session?.user?.image}
            alt="image"
            width={100}
            height={100}
            className="avatar"
          />
          <button
            className="btn btn-primary"
            onClick={() => signOut()}>
            Signout
          </button>
        </div>
        :
        <div className="flex flex-col items-center">
          <Link
            href='/api/auth/signin'
            className="btn btn-primary mb-5"
          >
            Sign in
          </Link>

          <button
            onClick={() => signIn('google')}
            className="btn btn-primary"
          >
            <span className="google">G </span>Sign in with google
          </button>
          

        </div>
      }
    </div>
  )
}
