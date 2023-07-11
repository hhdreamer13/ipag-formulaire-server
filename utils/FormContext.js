"use client";

const { createContext, useState, useContext } = require("react");

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

  //   console.log({ formData });
  return (
    <FormContext.Provider
      value={{ handleBack, handleNext, step, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
