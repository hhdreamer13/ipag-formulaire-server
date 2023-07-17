"use client";

import * as yup from "yup";

import InputField from "../common/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxGroup from "../common/CheckboxGroup";
import { useFormState } from "@/utils/FormContext";
import formatDatesInData from "@/utils/formatDatesInData";

const TeachingDetailsForm = () => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

  const schema = yup.object({
    recruteur: yup.string().required("Ce champ est obligatoire"),
    gestionnaire: yup.string().required("Ce champ est obligatoire"),
    conference: yup.string().required("Ce champ est obligatoire"),
    diplome: yup.string().required("Ce champ est obligatoire"),
    responsable: yup.string().required("Ce champ est obligatoire"),
    dateConference: yup
      .date()
      .required("Ce champ est obligatoire")
      .typeError("Veuillez entrer une date valide"),
    heuresCours: yup.string().required("Ce champ est obligatoire"),
    disciplinePreferences: yup.object().test(
      "oneCheckboxChecked",
      "Vous devez sélectionner au moins une option",
      (value) => Object.values(value).some((v) => v !== false) // Checks if any checkbox is checked
    ),
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
    data = formatDatesInData(data);

    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  };

  const onHandleBack = () => {
    handleSubmit((data) => {
      data = formatDatesInData(data);

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
          <div className=''>
            <InputField
              type='text'
              label='Service recruteur'
              name='recruteur'
              // disabled
              register={register}
              defaultValue='IPAG'
              // placeholder='IPAG'
              error={errors["recruteur"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Gestionnaire'
              name='gestionnaire'
              // disabled
              register={register}
              defaultValue='Léo Angioletti'
              // placeholder='Léo Angioletti'
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
              defaultValue='Toutes formations'
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
              name='dateConference'
              register={register}
              placeholder=''
              error={errors["dateConference"]?.message}
            />
          </div>

          <div className=''>
            <InputField
              type='number'
              label='Nombre d’heures prévisionnel'
              name='heuresCours'
              register={register}
              defaultValue='15'
              // disabled
              placeholder='heures cours'
              helperText='Nombre d’heures prévisionnel pour lequel le recrutement est effectué'
              error={errors["heuresCours"]?.message}
            />
          </div>
          <div className=''>
            <CheckboxGroup
              label='Discipline'
              name='disciplinePreferences'
              options={[
                { value: "droitPrive", label: "droit privé" },
                {
                  value: "droitPublic",
                  label: "droit public",
                },
                {
                  value: "histoireDroit",
                  label: "histoire du droit et des institutions",
                },
                { value: "scienceEconomique", label: "sciences économiques" },
                {
                  value: "scienceGestion",
                  label: "sciences de gestion",
                },
                {
                  value: "scienceInformation",
                  label: "sciences de l’information",
                },
              ]}
              register={register}
              error={errors.disciplinePreferences?.message}
            />
          </div>
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

export default TeachingDetailsForm;
