"use client";

import * as yup from "yup";

import InputField from "../common/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxGroup from "../common/CheckboxGroup";
import { useFormState } from "@/utils/FormContext";

const TeachingDetailsForm = () => {
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState();

  const schema = yup.object({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    onHandleNext();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onHandleFormSubmit)}
        className='mx-auto mt-16 max-w-xl sm:mt-20 text-left'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className=''>
            <InputField
              type='text'
              label='Service recruteur'
              name='recruteur'
              register={register}
              placeholder='IPAG'
              error={errors["recruteur"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Gestionnaire'
              name='gestionnaire'
              register={register}
              placeholder='Léo Angioletti'
              error={errors["gestionnaire"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='text'
              label='Intitulé de la conférence'
              name='conference'
              register={register}
              placeholder='La renaissance du monde'
              error={errors["conference"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Diplôme'
              name='diplome'
              register={register}
              placeholder=''
              error={errors["diplome"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Sous la responsabilité de'
              name='responsable'
              register={register}
              placeholder=''
              error={errors["responsable"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='date'
              label='Date de la conférence'
              name='date'
              register={register}
              placeholder=''
              error={errors["date"]?.message}
            />
          </div>
          <div className='sm:col-span-2 -mb-4'>
            <p className='block text-sm font-semibold leading-6 text-slate-900'>
              Nombre d’heures prévisionnel pour lequel le recrutement est
              effectué
            </p>
          </div>
          <div className=''>
            <InputField
              type='number'
              // label='heures cours'
              name='heuresCours'
              register={register}
              placeholder=''
              helperText='heures cours'
              error={errors["heures"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='number'
              // label='heures TD'
              name='heuresTd'
              register={register}
              placeholder=''
              helperText='heures TD'
              error={errors["heures"]?.message}
            />
          </div>
          <div className=''>
            <CheckboxGroup
              label='Discipline'
              name='preferences'
              options={[
                { value: "option1", label: "droit privé" },
                {
                  value: "option2",
                  label: "droit public",
                },
                {
                  value: "option3",
                  label: "histoire du droit et des institutions",
                },
                { value: "option4", label: "sciences économiques" },
                {
                  value: "option5",
                  label: "sciences de gestion",
                },
                { value: "option6", label: "mathématique et informatique" },
                { value: "option7", label: "sciences de l’information" },
                { value: "option8", label: "langues" },
                { value: "option9", label: "sports" },
              ]}
              register={register}
              error={errors.preferences?.message}
            />
          </div>
        </div>
        <div className='mt-14 flex'>
          <button
            type='button'
            onClick={onHandleBack}
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

export default TeachingDetailsForm;
