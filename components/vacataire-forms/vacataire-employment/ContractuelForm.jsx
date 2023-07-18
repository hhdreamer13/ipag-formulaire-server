/* eslint-disable react/no-unescaped-entities */
"use client";

import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormState } from "@/utils/FormContext";

import InputField from "@/components/common/InputField";

const ContractuelForm = () => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

  const schema = yup.object({
    fonctionContractuel: yup
      .string()
      .required("Ce champ est obligatoire")
      .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    adminContractuel: yup
      .string()
      .required("Ce champ est obligatoire")
      .max(50, "Le texte ne peut pas dépasser 50 caractères"),
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
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  };

  const onHandleBack = () => {
    handleBack();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='mx-auto mt-16 max-w-xl sm:mt-20 text-left'
      >
        <h2 className='text-center mb-12 font-semibold leading-6 text-slate-900 text-lg'>
          Vous êtes agent contractuel de la fonction publique
        </h2>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className=''>
            <InputField
              type='text'
              label='Fonction'
              name='fonctionContractuel'
              register={register}
              placeholder=''
              error={errors["fonctionContractuel"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label="Nom de l'administration"
              name='adminContractuel'
              register={register}
              placeholder=''
              error={errors["adminContractuel"]?.message}
            />
          </div>
        </div>
        {/* Table */}
        <div className='mt-12'>
          <h4>Pièces à joindre :</h4>
          <div className='relative mt-4 bg-gray-50 rounded-xl overflow-hidden'>
            <div className='relative bg-white'>
              <table className='w-full divide-y divide-gray-200 table-auto text-sm'>
                <tbody>
                  <tr className='first:rounded-t-xl'>
                    <td className='px-4 py-2 border-t-0 border-l border-r border-b'>
                      1
                    </td>
                    <td className='px-4 py-2 border-t-0 border-l border-r border-b'>
                      Photocopie lisible d’une pièce d’identité
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>2</td>
                    <td className='border px-4 py-2'>
                      Copie de l’attestation d’affiliation à la sécurité sociale
                      ou photocopie en couleur et lisible de la carte vitale
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>3</td>
                    <td className='border px-4 py-2'>
                      Relevé d'identité bancaire ou postal original sur lequel
                      figurent votre nom et votre prénom, BIC et IBAN
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>4</td>
                    <td className='border px-4 py-2'>
                      Dernier bulletin de salaire
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>5</td>
                    <td className='border px-4 py-2'>
                      Autorisation de cumul d’activités ou déclaration de cumul
                      en fonction de votre statut pour l’année universitaire
                      2023/2024 et pour le nombre d’heures défini
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>6</td>
                    <td className='border px-4 py-2'>
                      Si vous êtes encore en activité alors que vous avez
                      atteint la limite d’âge, merci d’en préciser la raison
                      (recul de limite d’âge...) et de fournir une pièce
                      justificative
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='absolute inset-0 pointer-events-none border border-gray-200 rounded-xl'></div>
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

export default ContractuelForm;
