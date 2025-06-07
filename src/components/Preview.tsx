import type { FormData } from "../types/FormData";

export default function Preview({ formData }: { formData: FormData }) {
    
    return (
        <div className="flex flex-col h-lvh align-center p-10">
            <div className="flex flex-col align-center p-10 bg-white">
                <div className="border-b-2 border-gray-200 pb-5">
                    <p>job title : {formData.subtitle}</p>
                    <p>first name : {formData.firstname}</p>
                    <p>last name : {formData.lastname}</p>
                    <p>address : {formData.address}</p>
                    <p>email : {formData.email}</p>
                    <p>short bio : {formData.shortBio}</p>
                </div>
                <div className="border-b-2 border-gray-200 py-5">
                    <p>Experience : {formData.expjobtitle} for {formData.company} in {formData.location}</p>
                    <p>From : {formData.expstartdate} to {formData.expenddate}</p>
                    <p>Short explanation : {formData.shortDesc}</p>
                </div>
            </div>
        </div>
    )
}