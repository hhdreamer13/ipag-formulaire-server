"use client";

import * as yup from "yup";

import InputField from "../common/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxGroup from "../common/CheckboxGroup";
import { useFormState } from "@/utils/FormContext";
import RadioButtonGroup from "../common/RadioButtonGroup";

const EmploymentDetailsForm = () => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

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
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  const handleFormSubmit = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  };

  const onHandleBack = () => {
    handleSubmit((data) => {
      setFormData((prevFormData) => ({ ...prevFormData, ...data }));
      handleBack();
    })();
  };

  const profession = watch("qualiteRadio");
  const civilite = watch("civilite");
  const prenom = watch("prenom");
  const nom = watch("nomNaissance");

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
              label={
                civilite === "M."
                  ? "Je soussigné Monsieur"
                  : "Je soussignée Madame"
              }
              name='soussigne'
              register={register}
              defaultValue={nom && prenom ? `${prenom} ${nom}` : ""}
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
            <RadioButtonGroup
              label='En qualité de'
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
                { value: "autreProfessionRadio", label: "Autre" },
              ]}
              register={register}
              error={errors.preferences?.message}
            />
          </div>
          {profession === "autreProfessionRadio" && (
            <div className=''>
              <InputField
                type='text'
                name='autreProfessionTitle'
                register={register}
                placeholder='Veuillez préciser'
                error={errors["autreProfessionTitle"]?.message}
              />
            </div>
          )}
          {profession === "contractuelRadio" && (
            <div className='sm:col-span-2 text-justify'>
              <RadioButtonGroup
                label='Ma rémunération brute mensuelle dépasse le plafond des cotisations de la sécurité sociale (plafond au 1er janvier 2023 : 3.666€)'
                name='remunerationContractuelRadio'
                options={[
                  { value: "contractuelOuiRadio", label: "Oui" },
                  { value: "contractuelNonRadio", label: "Non" },
                ]}
                register={register}
                error={errors.fonction?.message}
              />
            </div>
          )}
          {profession === "salarieRadio" && (
            <div className='sm:col-span-2 text-justify'>
              <RadioButtonGroup
                label='Ma rémunération brute mensuelle dépasse le plafond des cotisations de la sécurité sociale (plafond au 1er janvier 2023 : 3.666€)'
                name='remunerationSalarieRadio'
                options={[
                  { value: "salarieOuiRadio", label: "Oui" },
                  { value: "salarieNonRadio", label: "Non" },
                ]}
                register={register}
                error={errors.fonction?.message}
              />
            </div>
          )}
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
