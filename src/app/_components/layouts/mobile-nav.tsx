import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useLockBody } from "~/hooks/use-lock-body";
import { type Neighbourhood } from "~/data/sim-typings";
import { UserAccountNav } from "../user-account-nav";
import { signOut } from "next-auth/react";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

export function MobileNav({
  neighbourhood,
  user,
}: {
  neighbourhood?: Neighbourhood | undefined | null;
  user: {
    name: string | null | undefined;
    image: string | null | undefined;
    email: string | null | undefined;
  };
}) {
  useLockBody();
  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          <Link
            href="/"
            className={cn(
              "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
            )}
          >
            Home
          </Link>
          {neighbourhood && (
            <>
              <Link
                href={`/sims/${neighbourhood.id}`}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                )}
              >
                Visit Neighbourhood
              </Link>
              <Link
                href={`/pets/${neighbourhood.id}`}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                )}
              >
                Visit Pets
              </Link>
              <Link
                href={`/sims/create/${neighbourhood.id}`}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                )}
              >
                Create Sims
              </Link>
              <Link
                href={`/pets/create/${neighbourhood.id}`}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                )}
              >
                Create Pets
              </Link>
              <Link
                href={`/dashboard/${neighbourhood.id}`}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                )}
              >
                Dashboards
              </Link>
              <Link
                href={`/neighbourhood/${neighbourhood.id}`}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                )}
              >
                Edit Neighbourhood
              </Link>
            </>
          )}
          <a
            className="mt-2 cursor-pointer"
            onClick={async (event) => {
              event.preventDefault();
              await signOut({
                callbackUrl: `${window.location.origin}`,
              });
            }}
          >
            Sign out
          </a>
        </nav>
      </div>
    </div>
  );
}
