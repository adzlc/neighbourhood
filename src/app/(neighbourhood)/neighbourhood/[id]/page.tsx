import {
  deleteNeighbourhood,
  editNeighbourhood,
  get,
} from "~/server/actions/neighbourhoods";
import NeighbourhoodForm from "~/app/_components/neighbourhood/neighbourhood-form";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { type NeighbourhoodFormValues } from "~/data/sim-typings";

interface PageProps {
  params: {
    id: string;
  };
}

const EditNeighbourhoodPage = async ({ params }: PageProps) => {
  const neighbourhoodId = params.id;

  async function deleteAction(id: string) {
    "use server";
    await deleteNeighbourhood(id);
    redirect('/');
  }
  async function editAction(data: NeighbourhoodFormValues) {
    "use server";
    await editNeighbourhood(neighbourhoodId, data);
    redirect("/");
  }

  const neighbourhood = await get(neighbourhoodId);
  return (
    <>
      <Suspense fallback={"Loading neighbourhood"}>
        <NeighbourhoodForm data={neighbourhood} submitAction={editAction} deleteAction={deleteAction} />
      </Suspense>
    </>
  );
};
export default EditNeighbourhoodPage;
