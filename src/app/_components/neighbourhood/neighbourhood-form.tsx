"use client";
import {
  type NeighbourhoodFormValues,
  type Neighbourhood,
  NeighbourhoodInput,
} from "~/data/sim-typings";
import { Form, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DemoContainer from "../ui/demo-container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import NeighbourhoodDeleteDialog from "./neighbourhood-delete-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

const NeighbourhoodForm = ({
  submitAction,
  deleteAction,
  data,
}: {
  submitAction: (data: NeighbourhoodFormValues) => Promise<void>;
  deleteAction?: (id: string) => Promise<void>;
  data?: Neighbourhood | null | undefined;
}) => {
  const defaultValues: Partial<NeighbourhoodFormValues> = {
    name: data?.name ?? "",
    description: data?.description ?? "",
  };

  const form = useForm<NeighbourhoodFormValues>({
    resolver: zodResolver(NeighbourhoodInput),
    defaultValues,
  });

  async function onSubmit(data: NeighbourhoodFormValues) {
    await submitAction(data);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex grid w-full grid-cols-1 justify-center"
        >
          <input type="hidden" name="id" value={data?.id} />
          <div className="hidden items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-1">
            <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>{data ? `Edit ${data.name}` : "New Neighbourhood"}</CardTitle>
                  { data == null && <CardDescription>Create a new Neighbourhood</CardDescription>}
                </CardHeader>
                <CardContent className="grid gap-6">
                  <DemoContainer>
                    <div className="col-span-2 grid items-start gap-6 lg:col-span-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Choose a name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter the description"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </DemoContainer>
                  <div className="mt-6 flex justify-end gap-6">
                    <Button type="submit">Create</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
      {data && deleteAction && (
        <div className="p-6 pt-0 grid gap-6">
        <NeighbourhoodDeleteDialog
          neighbourhood={data}
          deleteAction={deleteAction}
        />
        </div>
      )}
    </>
  );
};

export default NeighbourhoodForm;
