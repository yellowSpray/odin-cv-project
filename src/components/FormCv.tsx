import type { FormData } from "../types/FormData";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form } from "./ui/form";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import DetailsForm from "./DetailsForm";
import BioForm from "./BioForm";
import NavForm from "./NavForm";

type OnFormChange = (field: keyof FormData, value: string) => void;


export default function FormCv({  formData, onFormChange }: { formData: FormData, onFormChange: OnFormChange }) {

  const [ currentPage, setCurrentPage ] = useState(1)

  const form = useForm();

  return (
    <div className="flex flex-col h-lvh align-center bg-white">

      <div className="flex flex-row align-center px-16 py-8">
        <Avatar>
          <AvatarImage src="https://randomuser.me/api/portraits/men/86.jpg" />
          <AvatarFallback>image credit</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold ml-4 leading-14">
          Joe Smith's Front-end Developer CV
        </h2>
      </div>

      <Form {...form}>
        <form>
          {currentPage === 1 && (
            <div className="pageA">
              <DetailsForm form={form} formData={formData} onFormChange={onFormChange} />
              <BioForm form={form} />
            </div>
          )}
          {currentPage === 2 && (
            <div className="pageB">
              <h4>page B</h4>
            </div>
          )}
          {currentPage === 3 && (
            <div className="pageC">
              <h4>page C</h4>
            </div>
          )}
        </form>
      </Form>

      <NavForm numPage={currentPage} setPage={setCurrentPage} />
    </div>
  );
}
