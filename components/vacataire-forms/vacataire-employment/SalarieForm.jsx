/* eslint-disable react/no-unescaped-entities */
"use client";

import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormState } from "@/utils/FormContext";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const SalarieForm = () => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

  const schema = yup.object({});

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
            Vous êtes salarié du secteur privé
          </h2>
          <p className='text-sm'>
            Les salariés du privé doivent justifier d’au moins 900 heures de
            travail (ou 300 heures d’enseignement) par an{" "}
          </p>
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
                      Dernier bulletin de salaire
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>5</td>
                    <td className='border px-4 py-2'>
                      Attestation téléchargeable ci-dessous signée et tamponnée
                      par votre employeur principal (il vous est conseillé d’en
                      conserver une copie)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul>
              <li className='px-4 py-3 text-sm'>
                <ExclamationTriangleIcon className='inline h-4 w-4' /> Veuillez
                télécharger l'attestation employeur principal
                <a
                  href='/attestation-employeur-principal.pdf'
                  download
                  className='inline-block ml-3 py-2 text-xs font-medium border-[1px] px-2 rounded-lg no-underline text-slate-950 hover:bg-white'
                >
                  Télécharger
                </a>
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

export default SalarieForm;
