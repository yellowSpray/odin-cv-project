import type {FormData} from "../types/FormData";
import type {UseFormReturn} from "react-hook-form";
import InputField from "@/components/InputField.tsx";

type onFormChange = (field: keyof FormData, value: string) => void;

export default function DetailsForm({form, formData, onFormChange}: {
    form: UseFormReturn;
    formData: FormData;
    onFormChange: onFormChange;
}) {
    return (
        <div className="py-5">
            <h3 className="text-[22px] font-bold mb-10">Your details</h3>
            <InputField
                form={form}
                formData={formData}
                onFormChange={onFormChange}
                name={"jobtitle"}
                label={"Job Title"}
                placeholder={"Front-end developer"}
                title={"subtitle"}
            />
            <div className="grid grid-cols-2 grid-rows-2 gap-7 mt-7">
                <InputField
                    form={form}
                    formData={formData}
                    onFormChange={onFormChange}
                    name={"firstname"}
                    label={"First Name"}
                    placeholder={"Joe"}
                    title={"firstname"}
                />
                <InputField
                    form={form}
                    formData={formData}
                    onFormChange={onFormChange}
                    name={"lastname"}
                    label={"Last Name"}
                    placeholder={"Smith"}
                    title={"lastname"}
                />
                <InputField
                    form={form}
                    formData={formData}
                    onFormChange={onFormChange}
                    name={"address"}
                    label={"Address"}
                    placeholder={"1000 Brussels, rue de machin, 36"}
                    title={"address"}
                />
                <InputField
                    form={form}
                    formData={formData}
                    onFormChange={onFormChange}
                    name={"email"}
                    label={"Email"}
                    placeholder={"joe.smith@gmail.com"}
                    title={"email"}
                />
            </div>
        </div>
    );
}
