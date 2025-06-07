import type { FormData } from "../types/FormData";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form } from "./ui/form";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import DetailsForm from "./DetailsForm";
import TextAreaField from "./TextAreaField.tsx";
import NavForm from "./NavForm";
import Experience from "@/components/Experience.tsx";

type OnFormChange = (field: keyof FormData, value: string) => void;


export default function FormCv({  formData, onFormChange }: { formData: FormData, onFormChange: OnFormChange }) {

  const [ currentPage, setCurrentPage ] = useState(1)

  const form = useForm();

  return (
    <div className="flex flex-col justify-between h-lvh align-center bg-white">

      <div className="flex flex-row align-center px-16 py-5 border-b-1 border-gray-200">
        <Avatar>
          <AvatarImage src="https://randomuser.me/api/portraits/men/86.jpg" />
          <AvatarFallback>image credit</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold ml-4 leading-14">
          Joe Smith's Front-end Developer CV
        </h2>
      </div>

      <Form {...form}>
        <form className={"h-full"}>
          {currentPage === 1 && (
            <div className="flex flex-col justify-evenly h-full px-16">

              <DetailsForm form={form} formData={formData} onFormChange={onFormChange} />
              <h3 className="text-[22px] font-bold">Short Bio</h3>
              <TextAreaField
                  form={form}
                  formData={formData}
                  onFormChange={onFormChange}
                  name={"bio"}
                  placeholder={"Short bio of you."}
                  title={"shortBio"}
                  description={"Be concise - The harsh is that hiring managers only spent an\n" +
                      "                    average of 6 seconds on each resume."}
              />
            </div>
          )}
          {currentPage === 2 && (
            <div className="flex flex-col justify-evenly h-full w-full">
              <Experience form={form} formData={formData} onFormChange={onFormChange} />
            </div>
          )}
          {currentPage === 3 && (
            <div className="flex flex-col justify-evenly h-full">
              <h4>page C</h4>
            </div>
          )}
        </form>
      </Form>

      <NavForm numPage={currentPage} setPage={setCurrentPage} />

    </div>
  );
}
