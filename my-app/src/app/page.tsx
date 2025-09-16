"use client"

import Image from "next/image";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        {isSignedIn ? (
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.fullName} 🎉</h1>
            
            {user.imageUrl && (
              <Image
                src={user.imageUrl}
                alt="User profile picture"
                width={100}
                height={100}
                className="rounded-full mx-auto sm:mx-0 mb-4"
              />
            )}

            <p className="text-lg mb-2">Email: {user.primaryEmailAddress?.emailAddress}</p>

            
          </div>
        ) : (
          <h1 className="text-2xl font-bold">Hello Guest 👋</h1>
        )}

      </main>
    </div>
  );
}
