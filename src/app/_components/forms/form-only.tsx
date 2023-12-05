"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";

const FormOnly = ({
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
      className={`${className}`}
      ref={formRef}
      action={onSubmit}
    >
      {children}
    </form>
  );
};
export default FormOnly;
