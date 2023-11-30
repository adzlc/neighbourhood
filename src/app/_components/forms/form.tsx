"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Form = ({
  children,
  className = '',
  onSubmit,
}: {
  children: React.ReactNode;
  className?: string;
  onSubmit: (input: FormData) => void;
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      className={`flex max-w-md flex-col gap-4 ${className}`}
      ref={formRef}
      action={onSubmit}
    >
      {children}
      <div className="mt-6 flex justify-end">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};
export default Form;
