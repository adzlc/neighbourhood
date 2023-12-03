import Link from "next/link";

import { type Neighbourhood } from "@prisma/client";
import { cn } from "~/app/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  neighbourhood?: Neighbourhood | undefined | null;
}

export function MainNav({ className, neighbourhood, ...props }: SidebarProps) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      {neighbourhood && (
        <>
          <Link
            href={`/sims/${neighbourhood.id}`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            List Sims
          </Link>
          <Link
            href={`/dashboard/${neighbourhood.id}`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
           Dashboards
          </Link>
          <Link
            href={`/sims/create/${neighbourhood.id}`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Create Sim
          </Link>
          <Link
            href={`/neighbourhood/${neighbourhood.id}`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Edit Neighbourhood
          </Link>
        </>
      )}

    </nav>
  );
}
