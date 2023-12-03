import Link from "next/link";
import { Suspense } from "react";
import NeighbourhoodForm from "./_components/neighbourhood/neighbourhood-form";
import { create, list } from "~/server/actions/neighbourhoods";

export default async function Home() {
  const neighbourhoods = await list();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Neighbourhoods
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Suspense fallback={<p>Loading neighbourhoods...</p>}>
            {neighbourhoods?.map((neighbourhood) => (
              <Link
              key={neighbourhood.id}
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-cyan-700 p-4 hover:bg-cyan-900"
                href={`/sims/${neighbourhood.id}`}
              >
                <h3 className="text-2xl font-bold text-white">{neighbourhood.name} →</h3>
                <div className="text-lg text-white">{neighbourhood.description}
                </div>
              </Link>
            ))
            }
            
          </Suspense>
        </div>

        <CreateNeighbourhood />
      </div>
    </main>
  );
}

async function CreateNeighbourhood() {

  return (
    <div className="w-full max-w-xs">
      <NeighbourhoodForm submitAction={create} />
    </div>
  );
}
