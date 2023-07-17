"use client";

import { createContext, useState, useContext } from "react";

const FormContext = createContext({});

export function FormProvider({ children }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep((prevValue) => prevValue + 1);
  };
  const handleBack = () => {
    setStep((prevValue) => prevValue - 1);
  };

  return (
    <FormContext.Provider
      value={{ handleBack, handleNext, step, setStep, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
