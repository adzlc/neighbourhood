import NeighbourhoodForm from "../_components/neighbourhood/neighbourhood-form";
import NeighbourhoodList from "./neighbourhood-list";
import { createNeighbourhood, list } from "~/server/actions/neighbourhoods"; 
import { revalidatePath } from "next/cache";
import { type Neighbourhood } from "~/data/sim-typings";

const NeighbourhoodPage = async () => {
  const neighbourhoods = await list();

  async function create(data: FormData) {
    "use server";
    const createData = {
      name: data.get("name") as string,
    } as Neighbourhood;
    await createNeighbourhood(createData);
    revalidatePath("/");
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-green-400">Neighbourhoods</h2>
      <NeighbourhoodList neighbourhoods={neighbourhoods} />

      <h2 className="mt-10 text-2xl font-bold text-green-400">New Neighbourhood</h2>
      <NeighbourhoodForm submitAction={create} />
    </>
  );
};

export default NeighbourhoodPage;
