"use client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const TextArea = ({
  id,
  name,
  label,
  value,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
}) => {
  const [formValue, setFormValue] = useState<string>(value ?? "");
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={name}>{label}</Label>
      </div>
      <Textarea
        id={id}
        name={name}
        value={formValue}
        onChange={(e) => setFormValue(e.currentTarget.value)}
      />
    </div>
  );
};
export default TextArea;
