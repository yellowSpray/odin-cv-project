import {
  FormField,
  FormItem,
  FormDescription,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "@/types/FormData.tsx";

type onFormChange = (field: keyof FormData, value: string) => void

export default function TextAreaField({
    form,
    formData,
    onFormChange,
    name,
    description,
    placeholder,
    title
}: {
    form: UseFormReturn,
    formData: FormData,
    onFormChange: onFormChange,
    name: string,
    placeholder: string,
    title: keyof FormData,
    description: string,
}) {
  return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormDescription className="mt-5">
                {description}
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className="resize-none h-48"
                {...field}
                value={formData[title]}
                onChange={(e) => onFormChange(title, e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
  );
}
