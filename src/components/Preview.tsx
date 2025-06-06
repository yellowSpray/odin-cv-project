import type { FormData } from "../types/FormData";

export default function Preview({ formData }: { formData: FormData }) {
    
    return (
        <div className="flex flex-col h-lvh align-center p-10">
            <div className="flex flex-col align-center p-10 bg-white">
                <p>input 1 : {formData.subtitle}</p>
                <p>input 2 : {formData.firstname}</p>
                <p>input 3 : {formData.lastname}</p>
                <p>input 4 : {formData.address}</p>
                <p>input 5 : {formData.email}</p>
            </div>
        </div>
    )
}