"use client";

import * as yup from "yup";

import InputField from "../common/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxGroup from "../common/CheckboxGroup";
import { useFormState } from "@/utils/FormContext";

const EmploymentDetailsForm = () => {
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState();

  const schema = yup.object({
    // soussigne: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // profession: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // autre: yup
    //   .string()
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // preferences: yup
    //   .object()
    //   .test(
    //     "au moins une case à cocher",
    //     "Veuillez choisir au moins une option",
    //     (value) => value && Object.values(value).some((v) => v)
    //   )
    //   .required(),
  });

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
              label='Je soussigné(e) M. / Mme'
              name='soussigne'
              register={register}
              placeholder='Jean Dupont'
              error={errors["soussigne"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Déclare exercer la profession suivante'
              name='profession'
              register={register}
              placeholder='Maitre de conférence'
              error={errors["profession"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <CheckboxGroup
              label='En qualité de'
              name='preferences'
              options={[
                { value: "option1", label: "Fonctionnaire" },
                {
                  value: "option2",
                  label: "Contractuel de la Fonction Publique",
                },
                { value: "option3", label: "Salarié du secteur privé" },
                { value: "option4", label: "Retraité" },
                {
                  value: "option5",
                  label: "Travailleurs indépendant, profession libérale",
                },
                { value: "option6", label: "Auto-entrepreneur" },
                { value: "option7", label: "Étudiant" },
                { value: "option7", label: "Autre" },
              ]}
              register={register}
              error={errors.preferences?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              // label='Si autre, veuillez préciser'
              name='autre'
              register={register}
              placeholder='Si autre, veuillez préciser'
              // error={errors["autre"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <CheckboxGroup
              label='Si vous êtes « Contractuel de la Fonction Publique » ou « Salarié du secteur privé » Ma rémunération brute mensuelle dépasse le plafond des cotisations de la sécurité sociale (plafond au 1er janvier2023 : 3.666€)'
              name='fonction'
              options={[
                { value: "option1", label: "Oui" },
                { value: "option2", label: "Non" },
              ]}
              register={register}
              // error={errors.preferences?.message}
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

export default EmploymentDetailsForm;
