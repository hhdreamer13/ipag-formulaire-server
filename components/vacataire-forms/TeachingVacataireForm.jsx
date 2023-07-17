"use client";

import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormState } from "@/utils/FormContext";
import formatDatesInData from "@/utils/formatDatesInData";
import InputField from "../common/InputField";
import CheckboxGroup from "../common/CheckboxGroup";
import RadioButtonGroup from "../common/RadioButtonGroup";

const TeachingVacataireForm = () => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

  const schema = yup.object({
    recruteur: yup.string().required("Ce champ est obligatoire"),
    gestionnaire: yup.string().required("Ce champ est obligatoire"),
    enseignement: yup.string().required("Ce champ est obligatoire"),
    diplome: yup.string().required("Ce champ est obligatoire"),
    heuresCours: yup.string().required("Ce champ est obligatoire"),
    periodeRadio: yup.string().required("Ce champ est obligatoire"),
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
              register={register}
              defaultValue='IPAG'
              placeholder='IPAG'
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
              placeholder='Léo Angioletti'
              error={errors["gestionnaire"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='text'
              label='Intitulé de l’enseignement'
              name='enseignement'
              register={register}
              placeholder='Culture Administrative'
              error={errors["enseignement"]?.message}
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
          <div className=''>
            <RadioButtonGroup
              label='Période'
              name='periodeRadio'
              options={[
                { value: "semestre1Radio", label: "1er semestre" },
                { value: "semestre2Radio", label: "2nd semestre" },
                { value: "annuelRadio", label: "Annuel" },
              ]}
              register={register}
              error={errors.periodeRadio?.message}
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

export default TeachingVacataireForm;
