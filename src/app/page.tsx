"server only";
import Image from "next/image";
import { UserAuthForm } from "./_components/user-login";
import CreateNeighbourhood from "./_components/create-neighbourhood";
import { getCurrentUser } from "~/server/session";

export default async function Home() {
  const user = await getCurrentUser();

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
        {user == null ? <UserAuthForm/> :  <CreateNeighbourhood/>}
      </div>
    </main>
  );
}