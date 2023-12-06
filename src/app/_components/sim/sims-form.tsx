import FormOnly from "../forms/form-only";
import DemoContainer from "../ui/demo-container";
import SimsBirthForm from "./sims-birth-form";
import SimsPersonalityForm from "./sims-personality-form";
import SimsFeaturesForm from "./features-form";
import SimsLoveForm from "./sims-love";
import { type SimWithSpouse, type Sim } from "~/data/sim-typings";

const SimsForm = ({
  submitAction,
  data,
  neighbourhoodId,
  partners,
  children,
}: {
  submitAction: (input: FormData) => Promise<void>;
  data?: SimWithSpouse | null | undefined;
  partners?: Sim[];
  neighbourhoodId: number;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <FormOnly onSubmit={submitAction} className=" w-full">
        {data?.id && <input type="hidden" name="id" value={data?.id} />}
        <input type="hidden" name="neighbourhoodId" value={neighbourhoodId} />
        <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-4">
          <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
            <DemoContainer>
              <SimsBirthForm data={data} />
            </DemoContainer>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
            <DemoContainer>
              <SimsFeaturesForm data={data} />
            </DemoContainer>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
            <DemoContainer>
              <SimsPersonalityForm data={data} />
            </DemoContainer>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
            <DemoContainer>
              <SimsLoveForm data={data} partners={partners} />
            </DemoContainer>
          </div>
        </div>
        {children}
      </FormOnly>
    </>
  );
};
export default SimsForm;
