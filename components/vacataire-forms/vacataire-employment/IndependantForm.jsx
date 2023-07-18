/* eslint-disable react/no-unescaped-entities */
"use client";

import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormState } from "@/utils/FormContext";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import InputField from "@/components/common/InputField";
import CheckboxGroup from "@/components/common/CheckboxGroup";

const IndependantForm = () => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

  const schema = yup.object({
    dirigeantPreferences: yup.object(),
    raisonIndependant: yup
      .string()
      .required("Ce champ est obligatoire")
      .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    siretIndependant: yup
      .string()
      .required("Ce champ est obligatoire")
      .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    adresseIndependant: yup
      .string()
      .required("Ce champ est obligatoire")
      .max(200, "L'adresse ne peut pas dépasser 200 caractères"),
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
        <div className='prose'>
          <h2 className='text-center mb-12 font-semibold leading-6 text-slate-900 text-lg'>
            Vous êtes travailleur indépendant, profession libérale
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <CheckboxGroup
              // label='Dirigeant d’entreprise'
              name='dirigeantPreferences'
              options={[
                {
                  value: "dirigeantIndependant",
                  label: "Dirigeant d’entreprise",
                },
              ]}
              register={register}
              error={errors.dirigeantPreferences?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Raison sociale de l’entreprise'
              name='raisonIndependant'
              register={register}
              placeholder=''
              error={errors["raisonIndependant"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='N° Siret'
              name='siretIndependant'
              register={register}
              placeholder=''
              error={errors["siretIndependant"]?.message}
            />
          </div>
          <div className='sm:col-span-2'>
            <InputField
              type='text'
              label='Adresse de l’entreprise'
              name='adresseIndependant'
              register={register}
              placeholder=''
              error={errors["adresseIndependant"]?.message}
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
                      Relevé d'identité bancaire ou postal personnel original
                      sur lequel figurent votre nom et votre prénom, BIC et IBAN
                      (les RIB de société seront refusés)
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>4</td>
                    <td className='border px-4 py-2'>
                      Copie de l’avis à la contribution économique territoriale
                      (CET) si vous y êtes assujetti
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>5</td>
                    <td className='border px-4 py-2'>
                      Copies des documents suivants si vous n’êtes pas assujetti
                      à la CET :
                      <ul className='list-disc pl-3 pt-2'>
                        <li className='pt-1'>
                          INSEE ou extrait Kbis ou attestation URSSAF de moins
                          d’un an
                        </li>
                        <li className='pt-1'>
                          Avis d’imposition 2023 sur les revenus de 2022 ou
                          attestation récente de revenus du cabinet comptable
                        </li>
                        <li className='pt-1'>
                          En cas de création récente d’entreprise, toutes pièces
                          justifiant de la perception de revenus professionnels
                          réguliers (par exemple, factures){" "}
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul>
              <li className='px-4 py-3 text-sm'>
                <ExclamationTriangleIcon className='inline h-4 w-4' /> Vous
                devez justifier d’un minimum de 10.000 € bruts/an dans votre
                activité principale
              </li>
            </ul>
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

export default IndependantForm;
