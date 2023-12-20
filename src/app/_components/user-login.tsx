"use client";
import { signIn } from "next-auth/react";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { useState } from "react";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function UserAuthForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setisAuthLoading] = useState<boolean>(false);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-8">
        <Card>
          <CardHeader className="container flex flex-col items-center justify-center ">
            <CardTitle className="mb-4">Login</CardTitle>
            <CardDescription >
              Login to start making your  Sims Neighbourhoods.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-1">
            <button
              type="button"
              className={cn(buttonVariants({ variant: "outline" }))}
              onClick={async () => {
                await signIn("google");
              }}
              disabled={isLoading || isAuthLoading}
            >
              {isAuthLoading ? (
                <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <FaGoogle className="mr-2 h-4 w-4" />
              )}{" "}
              Sign in with Google
            </button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
