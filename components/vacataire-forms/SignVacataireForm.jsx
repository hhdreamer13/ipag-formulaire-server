/* eslint-disable react/no-unescaped-entities */
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormState } from "@/utils/FormContext";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import formatDatesInData from "@/utils/formatDatesInData";

import Signature from "../common/Signature";
import InputField from "../common/InputField";
import SwitchToggle from "../common/SwitchToggle";

const SignVacataireForm = ({ setShowModal }) => {
  const { handleNext, handleBack, setFormData, formData } = useFormState();

  const [signature, setSignature] = useState(null);
  const [signatureError, setSignatureError] = useState(false);

  const schema = yup.object({
    soussigne: yup.string().required("Ce champ est obligatoire"),
    lieuSign: yup.string().required("Ce champ est obligatoire"),
    dateSign: yup
      .date()
      .required("Ce champ est obligatoire")
      .typeError("Veuillez entrer une date valide"),
    agreed: yup
      .bool()
      .oneOf(
        [true],
        "L'acceptation de la politique de protection des données est nécessaire"
      )
      .required("Required"),
  });

  const {
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  const handleFormSubmit = (data) => {
    if (!signature) {
      setSignatureError(true);
      return;
    }

    data = formatDatesInData(data);

    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
      signature,
    }));

    setSignatureError(false);
    handleNext();
  };

  const onHandleBack = () => {
    handleSubmit((data) => {
      data = formatDatesInData(data);
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...data,
        signature,
      }));
      handleBack();
    })();
  };

  const civilite = watch("civilite");
  const prenom = watch("prenom");
  const nom = watch("nomNaissance");

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='mx-auto mt-10 max-w-xl sm:mt-12 text-left'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-8'>
          <div className='sm:col-span-2'>
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
              helperText='atteste sur l’honneur l’exactitude des renseignements déclarés et m’engage
              à signaler à la DRH de l’université Panthéon-Assas toute modification concernant ma situation.'
              error={errors["soussigne"]?.message}
            />
            <div className='flex items-center justify-end space-x-1'>
              <p
                className='text-sm cursor-pointer hover:text-blue-500'
                onClick={() => setShowModal(true)}
              >
                Voir plus
                <InformationCircleIcon className='w-5 h-5 mx-1 animate-pulse inline-block' />
              </p>
            </div>
          </div>
          <div className=''>
            <InputField
              type='text'
              label='Faite à'
              name='lieuSign'
              register={register}
              placeholder='Paris'
              error={errors["lieuSign"]?.message}
            />
          </div>
          <div className=''>
            <InputField
              type='date'
              label='Le'
              name='dateSign'
              register={register}
              placeholder=''
              error={errors["dateSign"]?.message}
            />
          </div>
        </div>

        <div className='mt-10 flex flex-col justify-center items-center'>
          <Signature setSignature={setSignature} />
          {signatureError && (
            <p className='text-rose-600 text-xs mt-4'>
              Veuillez fournir votre signature.{" "}
            </p>
          )}
        </div>
        <div className='mt-10'>
          <SwitchToggle
            control={control}
            name='agreed'
            label='Accepter la politique de protection des données'
            error={errors.agreed?.message}
            required={true}
            helperText="En acceptant, vous consentez à ce que vos données personnelles soient recueillies et utilisées par l'IPAG de Paris, conformément au Règlement Général sur la Protection des Données (RGPD). Ces informations sont transmises de manière sécurisée et sont exclusivement destinées à l'IPAG."
          />
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

export default SignVacataireForm;
