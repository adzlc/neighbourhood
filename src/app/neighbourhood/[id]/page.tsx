
import { revalidatePath } from "next/cache";
import { get, updateNeighbourhood } from "~/server/actions/neighbourhoods";
import NeighbourhoodForm from "~/app/_components/neighbourhood/neighbourhood-form";
import { type Neighbourhood } from "@prisma/client";
interface PageProps {
  params: {
    id: string;
  };
}

export async function editAction(data: FormData) {
  "use server";
  const inputData = {
    name: data.get("name"),
    description: data.get("description")
  };
  const neighbourhoodId = parseInt(data.get("id") as string, 10);
  await updateNeighbourhood(neighbourhoodId, inputData as Neighbourhood);
}

const EditNeighbourhoodPage = async ({ params }: PageProps) => {
  const neighbourhoodId = parseInt(params.id, 10);
  const neighbourhood = await get(neighbourhoodId);
  return (
    <>
      <h2 className="text-2xl font-bold text-black dark:text-white">
        {neighbourhood?.name}
      </h2>
      <NeighbourhoodForm data={neighbourhood} submitAction={editAction} />
    </>
  );
};
export default EditNeighbourhoodPage;
