"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
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
  allowBlank = true,
}: {
  placeholder?: string;
  name: string;
  label: string;
  value: string | undefined | null;
  required?: boolean;
  allowBlank?: boolean;
  children: React.ReactNode;
}) => {
  const [formValue, setFormValue] = useState<string | undefined>(value ?? "");
  return (
    <div>
      <div className="mb-2 block">
        <Label>{label}</Label>
      </div>
      <Select
        name={name}
        value={formValue}
        onValueChange={(value) => {
          setFormValue(value === "notset" ? undefined : value);
        }}
        required={required}
        defaultValue={""}
      >
        <SelectTrigger className="">
          <SelectValue placeholder={placeholder ?? `Select a ${name}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {allowBlank && (
              <SelectItem key="notset" value="notset">
                {"Not set"}
              </SelectItem>
            )}
            {children}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default SelectField;
