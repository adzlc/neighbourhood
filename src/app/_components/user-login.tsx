"use client";

import { signIn } from "next-auth/react";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { useState } from "react";
import { FaGoogle, FaSpinner } from "react-icons/fa";

export function UserAuthForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setisAuthLoading] = useState<boolean>(false);
  return (
    <>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          signIn("google");
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
    </>
  );
}
