"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const SelectField = ({
  placeholder,
  name,
  label,
  value,
  children,
  required = false,
}: {
  placeholder?: string;
  name: string;
  label: string;
  value: string | undefined | null;
  required?: boolean;
  children: React.ReactNode;
}) => {
  const [formValue, setFormValue] = useState<string>(value ?? "");
  return (
    <div>
      <div className="mb-2 block">
        <Label>{label}</Label>
      </div>
      <Select
        name={name}
        value={formValue}
        onValueChange={(value) => setFormValue(value)}
        required={required}
      >
        <SelectTrigger className="">
          <SelectValue placeholder={placeholder ?? `Select a ${name}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>{children}</SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default SelectField;
