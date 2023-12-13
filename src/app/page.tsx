"server only";
import Image from "next/image";
import { getServerAuthSession } from "~/server/auth";
import { UserAuthForm } from "./_components/user-login";
import CreateNeighbourhood from "./_components/create-neighbourhood";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Image
          src="/logo.png"
          alt="Neighbourhoods"
          width="420"
          height="64"
          className="mr-4"
        />
        {session == null ? <UserAuthForm/> :  <CreateNeighbourhood/>}
      </div>
    </main>
  );
}