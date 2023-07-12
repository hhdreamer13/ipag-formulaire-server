import { useFormState } from "@/utils/FormContext";
import { pdfHandler } from "@/utils/pdfHandler";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Signature from "../common/Signature";
import InputField from "../common/InputField";
import SwitchToggle from "../common/SwitchToggle";

const Summary = () => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

  const today = new Date().toISOString().split("T")[0];

  const schema = yup.object({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  const handlePdfGenerate = async () => {
    const pdfDoc = await pdfHandler(formData);
    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "formulaire-conferencier-rempli.pdf";
    link.click();
  };

  const handleFormSubmit = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='mx-auto mt-16 max-w-xl sm:mt-20 text-left'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-8'>
          <div className=''>
            <InputField
              type='text'
              label='Faite à'
              name='lieuSign'
              register={register}
              placeholder='Paris'
              // error={errors["soussigne"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='date'
              label='Le'
              name='dateSign'
              defaultValue={today}
              register={register}
              placeholder=''
              // error={errors["profession"]?.message}
            />
          </div>
        </div>

        <div className='mt-10'>
          <Signature />
        </div>
        <div className='mt-10'>
          <SwitchToggle />
        </div>
        <div className='mt-14 flex'>
          <button
            type='button'
            onClick={handleBack}
            className='block w-40 mx-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Précédent
          </button>
          <button className='block w-40 mx-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
};

export default Summary;
