"use client";

import { startTransition, useState } from "react";
import { Button } from "~/app/_components/ui/button";
import { Input } from "~/app/_components/ui/input";
import { Label } from "~/app/_components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const ImportForm = ({ onSubmit }: { onSubmit: (data: string) => void }) => {
  const [file, setFile] = useState<File>();
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    startTransition(() => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileContents = fileReader.result as string;
        onSubmit(fileContents);
      };
      fileReader.readAsText(file);
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Import CSV of Sims</CardTitle>
          <CardDescription>
            Import a CSV file to upload all of the sims to the neighbourhood.
            <br />
            This will upload all of the Sims. This process is <b>not</b>{" "}
            idempotent.
            <p>
              The csv columns must be: gender, firstName, lastName, lifestage,
              aspiration, secondAspiration, career, Hobby, subHobby, Zodiac,
              orientation, hairColour, eyeColour, lifetimeWish, notes
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <form onSubmit={submitForm}>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="fileUpload">CSV File</Label>
              <Input
                id="fileUpload"
                type="file"
                onChange={(e) => setFile(e.target.files?.[0])}
              />
              <div className="mt-6 flex justify-end">
                <Button type="submit">Upload</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ImportForm;
