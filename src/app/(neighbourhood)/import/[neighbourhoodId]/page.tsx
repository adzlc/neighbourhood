
import { importCsv } from "~/server/actions/import-sims";
import ImportForm from "./import-form";
import { redirect } from "next/navigation";
interface PageProps {
  params: {
    neighbourhoodId: string;
  };
}

const ImportSims = async ({ params }: PageProps) => {

  async function importFile(data: string) {
    "use server";
    await importCsv(params.neighbourhoodId, data);
    redirect(`/sims/${params.neighbourhoodId}`);
  }

  return (
    <>
      <ImportForm onSubmit={importFile}/>
    </>
  );
};

export default ImportSims;
