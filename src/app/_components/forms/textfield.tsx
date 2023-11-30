"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const TextField = ({
  id,
  name,
  label,
  value,
  required = false,
}: {
  id: string;
  name: string;
  label: string;
  value: string | undefined | null;
  required?: boolean;
}) => {
  const [formValue, setFormValue] = useState<string>(value ?? "");
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={name}>{label}</Label>
      </div>
      <Input
        id={id}
        name={name}
        value={formValue}
        onChange={(e) => setFormValue(e.currentTarget.value)}
        required={required}
      />
    </div>
  );
};
export default TextField;
