"use client";

import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormState } from "@/utils/FormContext";
import InputField from "../common/InputField";
import TelephoneField from "../common/TelephoneField";
import SocialSecurityField from "../common/SocialSecurityField";
import SelectField from "../common/SelectField";
import formatDatesInData from "@/utils/formatDatesInData";

const PersonalDetailsForm = () => {
  const { handleNext, setFormData, formData } = useFormState();

  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const hundredYearsAgo = new Date(
    today.getFullYear() - 100,
    today.getMonth(),
    today.getDate()
  );

  const schema = yup.object({
    // nomNaissance: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .max(50, "Le nom ne peut pas dépasser 50 caractères"),
    // prenom: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .max(50, "Le prénom ne peut pas dépasser 50 caractères"),
    // nomUsage: yup
    //   .string()
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // situationFamille: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // dateNaissance: yup
    //   .date()
    //   .required("Ce champ est obligatoire")
    //   .min(hundredYearsAgo, "Date trop ancienne")
    //   .max(eighteenYearsAgo, "Doit être majeur")
    //   .typeError("Veuillez entrer une date valide"),
    // lieuNaissance: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // securiteSocial: yup.string().required("Ce champ est obligatoire"),
    // nationalite: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // domicileFiscale: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    // adressePerso: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .max(200, "L'adresse ne peut pas dépasser 200 caractères"),
    // codePostal: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
    //   .max(20, "Le code postal ne peut pas dépasser 20 caractères"),
    // villePostale: yup
    //   .string()
    //   .required("Ce champ est obligatoire")
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
    //   .max(50, "Le texte ne peut pas dépasser 50 caractères"),
  });

  const defaultFormData = {
    securiteSocial: "",
    tel: "",
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...defaultFormData, ...formData },
  });

  const onHandleFormSubmit = (data) => {
    data = formatDatesInData(data);

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
          <div className='sm:col-span-1 flex space-x-2'>
            <div className='w-32'>
              <SelectField
                label='Civilité'
                name='civilite'
                options={[
                  { value: "M.", label: "M." },
                  { value: "Mme.", label: "Mme." },
                ]}
                register={register}
                error={errors.civilite?.message}
              />
            </div>
            <div className='flex-grow'>
              <InputField
                type='text'
                label='Prénom'
                name='prenom'
                register={register}
                placeholder='Jean'
                error={errors["prenom"]?.message}
              />
            </div>
          </div>
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
              // required
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
            <SocialSecurityField
              name='securiteSocial'
              control={control}
              placeholder='1 94 03 75 120 005 22'
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
              defaultValue='France'
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
            <TelephoneField
              name='tel'
              register={register}
              control={control}
              placeholder='01 23 45 67 89'
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
          <button className='block w-40 mx-auto rounded-md focus:bg-indigo-700 bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
