import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx"
import { Calendar } from "@/components/ui/calendar.tsx"
import { Label } from "@/components/ui/label.tsx"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover.tsx"
import type { FormData } from "../types/FormData";
import type { UseFormReturn } from "react-hook-form";
import {useState} from "react";
import { FormField, FormItem } from "@/components/ui/form.tsx";

type onFormChange = (field: keyof FormData, value: string) => void

export default function DatePicker({
    form,
    onFormChange,
    name,
    label,
    title
}: {
    form: UseFormReturn,
    onFormChange: onFormChange,
    name: string,
    label: string,
    title: keyof FormData
}) {

    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)

    return (
        <FormField
            control={form.control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <Label htmlFor={name} className="px-1">{label}</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className="w-48 justify-between font-normal"
                            >
                                {date ? date.toLocaleDateString() : "Select date"}
                                <ChevronDownIcon className="mr-2 h-4 w-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                captionLayout="dropdown"
                                {...field}
                                onSelect={(selectedDate) => {
                                    if (selectedDate) {
                                        setDate(selectedDate);
                                        setOpen(false);
                                        onFormChange(title, selectedDate.toLocaleDateString("en-GB"));
                                    }
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </FormItem>
            )}
        />
    )
}