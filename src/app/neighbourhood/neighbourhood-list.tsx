import type { Neighbourhood } from "@prisma/client";
import Link from "next/link";

const NeighbourhoodList = ({
  neighbourhoods,
}: {
  neighbourhoods: Neighbourhood[] | undefined;
}) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {neighbourhoods?.map((neighbourhood) => (
        <li
          key={neighbourhood.id}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <Link href={`/sims/${neighbourhood.id}`}>
            <div className="flex flex-1 flex-col p-8">
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {neighbourhood.name}
              </h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NeighbourhoodList;
