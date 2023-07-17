"use client";

import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormState } from "@/utils/FormContext";
import RadioButtonGroup from "../common/RadioButtonGroup";

const EmploymentVacataireForm = () => {
  const { handleNext, handleBack, setFormData, step, formData } =
    useFormState();

  const schema = yup.object({
    qualiteRadio: yup.string().required("Ce champ est obligatoire"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  const handleFormSubmit = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
      employmentType: data.qualiteRadio,
    }));
    handleNext();
  };

  const onHandleBack = () => {
    handleSubmit((data) => {
      setFormData((prevFormData) => ({ ...prevFormData, ...data }));
      handleBack();
    })();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='mx-auto mt-16 max-w-xl sm:mt-20 text-left'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <RadioButtonGroup
              label='Votre situation professionnelle'
              name='qualiteRadio'
              options={[
                { value: "fonctionnaireRadio", label: "Fonctionnaire" },
                {
                  value: "contractuelRadio",
                  label: "Contractuel de la Fonction Publique",
                },
                { value: "salarieRadio", label: "Salarié du secteur privé" },
                { value: "retraiteRadio", label: "Retraité" },
                {
                  value: "independantRadio",
                  label: "Travailleurs indépendant, profession libérale",
                },
                { value: "entrepreneurRadio", label: "Auto-entrepreneur" },
                { value: "etudiantRadio", label: "Étudiant" },
              ]}
              register={register}
              error={errors.qualiteRadio?.message}
            />
          </div>
        </div>
        <div className='mt-14 flex'>
          <button
            type='button'
            onClick={onHandleBack}
            className='block w-40 mx-auto border-2 border-indigo-50 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-500 shadow-sm hover:bg-indigo-50 focus:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
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

export default EmploymentVacataireForm;
