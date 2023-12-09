"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { Neighbourhood, Pet, Sim } from "~/data/sim-typings";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormOnly = ({
  children,
  className = '',
  onSubmit,
}: {
  children: React.ReactNode;
  className?: string;
  onSubmit: (input: FormData) => void;
}) => {
  const form = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
    <form
      className={`${className}`}
      ref={formRef}
      action={onSubmit}
    >
      {children}
    </form>
    </Form>
  );
};
export default FormOnly;
