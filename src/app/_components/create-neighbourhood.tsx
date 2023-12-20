import Link from "next/link";
import { Suspense } from "react";
import { create, list } from "~/server/actions/neighbourhoods";
import NeighbourhoodForm from "./neighbourhood/neighbourhood-form";

export default async function CreateNeighbourhood() {
  const neighbourhoods = await list();
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Suspense fallback={<p>Loading neighbourhoods...</p>}>
          {neighbourhoods?.map((neighbourhood) => (
            <Link
              key={neighbourhood.id}
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-cyan-700 p-4 hover:bg-cyan-900"
              href={`/sims/${neighbourhood.id}`}
            >
              <h3 className="text-2xl font-bold text-white">
                {neighbourhood.name} →
              </h3>
              <div className="text-lg text-white">
                {neighbourhood.description}
              </div>
            </Link>
          ))}
        </Suspense>
      </div>
      <div className="w-full h-full max-w-xs">
        <NeighbourhoodForm submitAction={create} />
      </div>
    </>
  );
}
