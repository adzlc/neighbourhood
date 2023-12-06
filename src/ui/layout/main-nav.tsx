"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/app/_components/ui/navigation-menu";
import { FaCat, FaHome } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { type Neighbourhood } from "~/data/sim-typings";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  neighbourhood?: Neighbourhood | undefined | null;
}

export function MainNav({ className, neighbourhood, ...props }: SidebarProps) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {neighbourhood && (
            <>
              <NavigationMenuItem>
              <NavigationMenuTrigger>Visit</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-1">
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={`/sims/${neighbourhood.id}`}
                      >
                        <FaHome  />
                        <div className="mb-2 mt-4 text-lg font-medium">Neighbourhood</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {`View the ${neighbourhood.name}'s Sims.`}
                        </p>
                      </a>
                    </li>
                    <li className="row-span-1">
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={`/pets/${neighbourhood.id}`}
                      >
                        <FaCat />
                        <div className="mb-2 mt-4 text-lg font-medium">Pets</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                        {`View the ${neighbourhood.name}'s Pets.`}
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href={`/dashboard/${neighbourhood.id}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Dashboards
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Create</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={`/sims/create/${neighbourhood.id}`}
                      >
                        <FaPerson />
                        <div className="mb-2 mt-4 text-lg font-medium">Sim</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Create a sim for your neighbourhood.
                        </p>
                      </a>
                    </li>
                    <li className="row-span-3">
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={`/pets/create/${neighbourhood.id}`}
                      >
                        <FaCat />
                        <div className="mb-2 mt-4 text-lg font-medium">Pet</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Create a pet for your neighbourhood.
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
      {/* <nav
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
      </nav> */}
    </>
  );
}
