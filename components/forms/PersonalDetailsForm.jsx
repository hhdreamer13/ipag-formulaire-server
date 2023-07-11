"use client";

import * as yup from "yup";

import InputField from "../common/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormState } from "@/utils/FormContext";

const PersonalDetailsForm = () => {
  const { handleNext, setFormData, formData } = useFormState();

  const schema = yup.object({
    // nomNaissance: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le nom ne peut pas dépasser 50 caractères"),
    // prenom: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le prénom ne peut pas dépasser 50 caractères"),
    // nomUsage: yup
    //   .string()
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // situationFamille: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // dateNaissance: yup
    //   .date()
    //   .required("Ce champ est obligatoire")
    //   .typeError("Veuillez entrer une date valide"),
    // lieuNaissance: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // securiteSocial: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^\d{15}$/,
    //     "Le numéro de sécurité sociale doit comporter exactement 15 chiffres"
    //   ),
    // nationalite: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // domicileFiscale: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // adressePerso: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L}\d '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des chiffres, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(200, "L'adresse ne peut pas dépasser 200 caractères"),
    // codePostal: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(/^\d+$/, "Uniquement des chiffres")
    //   .max(20, "Le code postal ne peut pas dépasser 20 caractères"),
    // villePostale: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // mail: yup
    //   .string()
    //   .email("Adresse mail non valide")
    //   .required("Ce champ est obligatoire")
    //   .max(254, "L'adresse mail ne peut pas dépasser 254 caractères"),
    // tel: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\d\s-]+$/,
    //     "Numéro de téléphone non valide, veuillez n'utiliser que des chiffres, des espaces et des tirets"
    //   )
    //   .min(7, "Le numéro de téléphone doit comporter au moins 7 chiffres")
    //   .max(20, "Le numéro de téléphone doit contenir moins de 20 chiffres"),
    // diplomePlus: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .matches(
    //     /^[\p{L} '-]+$/u,
    //     "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
    //   )
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
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
    handleNext();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onHandleFormSubmit)}
        className='mx-auto mt-16 max-w-xl sm:mt-20 text-left'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <InputField
              type='text'
              label='Nom de naissance'
              name='nomNaissance'
              register={register}
              placeholder='Dupont'
              error={errors["nomNaissance"]?.message}
            />
          </div>
          <div>
            <InputField
              type='text'
              label='Prénom'
              name='prenom'
              register={register}
              placeholder='Jean'
              error={errors["prenom"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Nom d’usage / d’époux(se)'
              name='nomUsage'
              register={register}
              placeholder='Dupont'
              // error={errors["nomUsage"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Situation de famille'
              name='situationFamille'
              register={register}
              placeholder='Célibataire'
              error={errors["situationFamille"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='date'
              label='Date de naissance'
              name='dateNaissance'
              register={register}
              // placeholder=''
              error={errors["dateNaissance"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Lieu de naissance'
              name='lieuNaissance'
              register={register}
              placeholder='Paris'
              error={errors["lieuNaissance"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='text'
              label='Numéro de sécurité sociale'
              name='securiteSocial'
              register={register}
              placeholder='011223344556677'
              error={errors["securiteSocial"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='text'
              label='Nationalité'
              name='nationalite'
              register={register}
              placeholder='Française'
              helperText='Si vous êtes ressortissant d’un pays hors union européenne, joindre impérativement une copie de votre titre de séjour et de votre autorisation de travail en cours de validité. A défaut prendre contact avec la drh pour que
              Les demarches nécessaires a votre declaration puissent être engagées avant le debut des enseignements.'
              error={errors["nationalite"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='text'
              label='Pays de résidence fiscale'
              name='domicileFiscale'
              register={register}
              placeholder='France'
              error={errors["domicileFiscale"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='text'
              label='Adresse personnelle'
              name='adressePerso'
              register={register}
              placeholder='Numéro, rue, etc'
              error={errors["adressePerso"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Code Postal'
              name='codePostal'
              register={register}
              placeholder='75000'
              error={errors["codePostal"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Ville'
              name='villePostale'
              register={register}
              placeholder='Paris'
              error={errors["villePostale"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='email'
              label='E-mail'
              name='mail'
              register={register}
              placeholder='jean.dupont@exemple.com'
              error={errors["mail"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='tel'
              label='Téléphone'
              name='tel'
              register={register}
              placeholder='0123456789'
              error={errors["tel"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='text'
              label='Diplôme le plus élevé'
              name='diplomePlus'
              register={register}
              placeholder='Master'
              error={errors["diplomePlus"]?.message}
            />
          </div>
        </div>
        <div className='mt-10'>
          <button className='block w-40 mx-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
