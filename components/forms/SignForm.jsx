import { useState } from "react";
import { useFormState } from "@/utils/FormContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Signature from "../common/Signature";
import InputField from "../common/InputField";
import SwitchToggle from "../common/SwitchToggle";

const SignForm = () => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

  const [signature, setSignature] = useState(null);

  const schema = yup.object({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  const handleFormSubmit = (data) => {
    if (data.dateSign) {
      const [year, month, day] = data.dateSign.split("-");
      data.dateSign = `${day}/${month}/${year}`;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
      signature,
    }));
    handleNext();
  };

  const onHandleBack = () => {
    handleSubmit((data) => {
      if (data.dateSign) {
        const [year, month, day] = data.dateSign.split("-");
        data.dateSign = `${day}/${month}/${year}`;
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...data,
        signature,
      }));
      handleBack();
    })();
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
              register={register}
              placeholder=''
              // error={errors["profession"]?.message}
            />
          </div>
        </div>

        <div className='mt-10'>
          <Signature setSignature={setSignature} />
        </div>
        <div className='mt-10'>
          <SwitchToggle />
        </div>
        <div className='mt-14 flex'>
          <button
            type='button'
            onClick={onHandleBack}
            className='block w-40 mx-auto rounded-md focus:bg-indigo-500 bg-indigo-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
          >
            Précédent
          </button>
          <button className='block w-40 mx-auto rounded-md focus:bg-indigo-700 bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
