import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-[700] tracking-tight">Welcome Back!</h1>
        <p className="mt-3 text-gray-500">Create an account or sign in to continue to the dashboard</p>
        <div className="mt-8">
          <ClerkLoading>
            <LoaderCircle size={24} className="animate-spin"/>
          </ClerkLoading>
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
        </div>
      </div>
      <div className="h-full hidden lg:flex gap-x-4 text-4xl text-white font-[700] justify-center items-center bg-gradient-to-b from-blue-700 to-blue-500">
        <Image src={"/images/logo.svg"} height={100} width={100} alt="logo" /> Finance
      </div>
    </div>
  )
}