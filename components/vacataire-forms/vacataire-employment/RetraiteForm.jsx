/* eslint-disable react/no-unescaped-entities */
"use client";

import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormState } from "@/utils/FormContext";

import InputField from "@/components/common/InputField";
import RadioButtonGroup from "@/components/common/RadioButtonGroup";

const RetraiteForm = () => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

  const schema = yup.object({
    nomEtudiantRetraite: yup.string().required("Ce champ est obligatoire"),
    prenomEtudiantRetraite: yup.string().required("Ce champ est obligatoire"),
    nomMaritalEtudiantRetraite: yup
      .string()
      .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    totalEtudiantRetraiteRadio: yup
      .string()
      .required("Ce champ est obligatoire"),
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
        <div className='prose text-sm text-justify mb-12'>
          <h2 className='text-center mb-12 font-semibold leading-6 text-slate-900 text-lg'>
            Vous êtes retraité en-dessous de la limite d'age (67 ans)
          </h2>
          <ul>
            Conditions :
            <li>
              Personnes bénéficiant d'une pension de retraite, d'une allocation
              de préretraite ou d'un congé de fin d'activité, à la condition
              d'avoir exercé au moment de la cessation de leurs fonctions une
              activité professionnelle principale extérieure à l'établissement.
            </li>
            <li>
              Etre en-dessous de la limite d’âge de 67 ans au 1er septembre de
              l’année universitaire considérée (cf décret n°2011-2103 du 30
              décembre 2011)
            </li>
          </ul>
        </div>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className=''>
            <InputField
              type='text'
              label='Nom patronymique'
              name='nomEtudiantRetraite'
              defaultValue={formData.nomNaissance}
              register={register}
              placeholder=''
              error={errors["nomEtudiantRetraite"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Prénom'
              name='prenomEtudiantRetraite'
              defaultValue={formData.prenom}
              register={register}
              placeholder=''
              error={errors["prenomEtudiantRetraite"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Nom marital'
              name='nomMaritalEtudiantRetraite'
              defaultValue={formData.nomUsage}
              register={register}
              placeholder=''
              error={errors["nomMaritalEtudiantRetraite"]?.message}
            />
          </div>
          <div className='sm:col-span-2 text-justify'>
            <RadioButtonGroup
              label="certifie sur l'honneur que mon service en qualité d’agent temporaire vacataire pendant l’année universitaire 2023/2024 n’excède pas au total dans un ou plusieurs établissements :"
              name='totalEtudiantRetraiteRadio'
              helperText='J’ai conscience que les heures effectuées au-delà de cette limite ne pourront pas être rémunérées'
              options={[
                {
                  value: "heure96EtudiantRetraiteRadio",
                  label:
                    "96 heures de travaux dirigés ou toute combinaison équivalente Ou pour les doctorants-contractuels",
                },
                {
                  value: "heure64EtudiantRetraiteRadio",
                  label: "64 heures de travaux dirigés",
                },
              ]}
              register={register}
              error={errors.totalEtudiantRetraiteRadio?.message}
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
                      Dernier bulletin de salaire ou avis d’imposition ou taxe
                      professionnelle selon activité antérieure
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>5</td>
                    <td className='border px-4 py-2'>
                      Document attestant de l’admission au bénéfice de la
                      retraite
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

export default RetraiteForm;
