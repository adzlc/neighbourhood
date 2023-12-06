import Form from "~/app/_components/forms/form";
import TextField from "~/app/_components/forms/textfield";
import TextArea from "../forms/textarea";
import { type Neighbourhood } from "~/data/sim-typings";

const NeighbourhoodForm = ({
  submitAction,
  data,
}: {
  submitAction: (input: FormData) => Promise<void>;
  data?: Neighbourhood | null | undefined;
}) => {
  return (
    <>
      <Form onSubmit={submitAction}>
        <input type="hidden" name="id" value={data?.id} />
        <TextField id="name" name="name" label="Neighbourhood" value={data?.name} />
        <TextArea id="description" name="description" label="Description" value={data?.description} />
      </Form>
    </>
  );
};

export default NeighbourhoodForm;
