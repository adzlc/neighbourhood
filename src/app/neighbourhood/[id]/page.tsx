import {
  deleteNeighbourhood,
  editNeighbourhood,
  get,
} from "~/server/actions/neighbourhoods";
import NeighbourhoodForm from "~/app/_components/neighbourhood/neighbourhood-form";
import NeighbourhoodDeleteDialog from "~/app/_components/neighbourhood/neighbourhood-delete-dialog";
import { Suspense } from "react";
import { redirect } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}


const EditNeighbourhoodPage = async ({ params }: PageProps) => {
  const neighbourhoodId = params.id;

  async function deleteAction(id: string) {
    "use server";
    await deleteNeighbourhood(params.id);
    redirect('/');
  }
  const neighbourhood = await get(neighbourhoodId);
  return (
    <>
      <h2 className="text-2xl font-bold text-black dark:text-white">
        {neighbourhood?.name}
      </h2>
      <Suspense fallback={"Loading neighbourhood"}>
        <NeighbourhoodForm data={neighbourhood} submitAction={editNeighbourhood} />
        {neighbourhood && (
          <NeighbourhoodDeleteDialog
            neighbourhood={neighbourhood}
            deleteAction={deleteAction}
          />
        )}
      </Suspense>
    </>
  );
};
export default EditNeighbourhoodPage;
