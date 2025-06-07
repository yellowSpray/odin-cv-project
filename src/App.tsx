import { useState } from "react";
import "./App.css";
import FormCv from "./components/FormCv";
import Preview from "./components/Preview.tsx";

import type { FormData } from "./types/FormData";


function App() {

  const [ formData, setFormData ] = useState<FormData>({
    subtitle: '',
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    shortBio: '',
    expjobtitle: '',
    company: '',
    expstartdate: '',
    expenddate: '',
    location: '',
  })

  const handleFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <>
      <main className="flex flex-row items-center">
        <section className="w-1/2 ">
          <FormCv formData={formData} onFormChange={handleFormData} />
        </section>
        <section className="flex flex-col w-1/2">
          <Preview formData={formData} />
        </section>
      </main>
    </>
  );
}

export default App;
