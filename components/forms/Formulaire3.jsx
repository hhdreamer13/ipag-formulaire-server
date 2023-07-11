/* eslint-disable react/no-unescaped-entities */
"use client";

import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import { useCallback } from "react";

const Formulaire3 = () => {
  const schema = yup.object({
    soussigne: yup
      .string()
      .required("Ce champ est obligatoire")
      .matches(
        /^[\p{L} '-]+$/u,
        "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
      )
      .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    profession: yup
      .string()
      .required("Ce champ est obligatoire")
      .matches(
        /^[\p{L} '-]+$/u,
        "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
      )
      .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    autre: yup
      .string()
      .matches(
        /^[\p{L} '-]+$/u,
        "Uniquement des lettres alphabétiques, des tirets, des apostrophes et des espaces sont autorisés"
      )
      .max(50, "Le texte ne peut pas dépasser 50 caractères"),
    preferences: yup
      .object()
      .test(
        "au moins une case à cocher",
        "Veuillez choisir au moins une option",
        (value) => value && Object.values(value).some((v) => v)
      )
      .required(),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <form
        action='#'
        method='POST'
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto mt-16 max-w-xl sm:mt-20 text-left'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section className='px-6 py-4 m-2 rounded-md border-dashed border-2 bg-slate-50'>
                  <div {...getRootProps()} className='w-full h-full'>
                    <input {...getInputProps()} />
                    <div className='text-center flex flex-col justify-center items-center w-full h-full'>
                      <h4>
                        Déposer un fichier
                        <br />
                        ou
                      </h4>
                      <p>Sélectionner un fichier</p>
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        </div>
        <div className='mt-10'>
          <Link href='/etape-3'>
            <button
              type='submit'
              className='block w-40 mx-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Soumettre
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Formulaire3;
