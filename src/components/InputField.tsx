import {FormField, FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import type {FormData} from "../types/FormData";
import type {UseFormReturn} from "react-hook-form";

type onFormChange = (field: keyof FormData, value: string) => void

export default function InputField({
    form,
    formData,
    onFormChange,
    name,
    label,
    placeholder,
    title
}: {
    form: UseFormReturn,
    formData: FormData,
    onFormChange: onFormChange
    name: string,
    label: string,
    placeholder: string
    title: keyof FormData
}) {

    return (
        <FormField
            control={form.control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            value={formData[title]}
                            onChange={(e) => onFormChange(title, e.target.value)}
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}