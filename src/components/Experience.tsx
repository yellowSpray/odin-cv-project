import type {FormData} from "../types/FormData";
import type {UseFormReturn} from "react-hook-form";
import InputField from "@/components/InputField.tsx";
import DatePicker from "@/components/DatePicker.tsx";
import TextAreaField from "@/components/TextAreaField.tsx";
import {Button} from "@/components/ui/button.tsx";
import { Plus } from 'lucide-react';

type onFormChange = (field: keyof FormData, value: string) => void

export default function Experience({ form, formData, onFormChange }: {
    form: UseFormReturn,
    formData: FormData,
    onFormChange: onFormChange
}) {
    return (
        <div className="flex flex-col justify-between border-gray-200 px-16 py-8">

            <div>
                <h3 className="text-[22px] font-bold mb-10">Your Experience</h3>
                <p>Include your last 10 years experience of relevant experience and dates this section.</p>
                <p>List your most recent position.</p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-7 mt-7">
                <InputField
                    form={form}
                    formData={formData}
                    onFormChange={onFormChange}
                    name={"expjobtitle"}
                    label={"Job Title"}
                    placeholder={"Front-end developer"}
                    title={"expjobtitle"}
                />
                <InputField
                    form={form}
                    formData={formData}
                    onFormChange={onFormChange}
                    name={"company"}
                    label={"Company/Employer"}
                    placeholder={"Uber"}
                    title={"company"}
                />
                <div className="flex flex-row gap-2 justify-between">
                    <DatePicker
                        form={form}
                        formData={formData}
                        onFormChange={onFormChange}
                        name={"expstartdate"}
                        label={"Start Date"}
                        title={"expstartdate"}
                    />
                    <DatePicker
                        form={form}
                        formData={formData}
                        onFormChange={onFormChange}
                        name={"expenddate"}
                        label={"End Date"}
                        title={"expenddate"}
                    />
                </div>

                <InputField
                    form={form}
                    formData={formData}
                    onFormChange={onFormChange}
                    name={"location"}
                    label={"Location"}
                    placeholder={"Brussels, Belgium"}
                    title={"location"}
                />
            </div>

            <div>
                <TextAreaField
                    form={form}
                    formData={formData}
                    onFormChange={onFormChange}
                    name={"descriptive"}
                    placeholder={"Short descriptive of this job experience."}
                    title={"shortDesc"}
                    description={"Describe your experience here."}
                />
            </div>
            <Button variant={"secondary"} size={"lg"} className={"w-25 mt-5 hover:cursor-pointer text-xs"}>
                <Plus/> Add More
            </Button>
        </div>
    );
}