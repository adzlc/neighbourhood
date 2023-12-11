import NeighbourhoodList from "./neighbourhood-list";
import { create, list } from "~/server/actions/neighbourhoods"; 
import { revalidatePath } from "next/cache";
import { type NeighbourhoodFormValues } from "~/data/sim-typings";
import NeighbourhoodForm from "~/app/_components/neighbourhood/neighbourhood-form";

const NeighbourhoodPage = async () => {
  const neighbourhoods = await list();

  async function createAction(data: NeighbourhoodFormValues) {
    "use server";
    await create(data);
    revalidatePath("/");
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-green-400">Neighbourhoods</h2>
      <NeighbourhoodList neighbourhoods={neighbourhoods} />

      <h2 className="mt-10 text-2xl font-bold text-green-400">New Neighbourhood</h2>
      <NeighbourhoodForm submitAction={createAction} />
    </>
  );
};

export default NeighbourhoodPage;
