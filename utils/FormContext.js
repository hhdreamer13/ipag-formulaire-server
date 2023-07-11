"use client";

const { createContext, useState, useContext } = require("react");

const FormContext = createContext({});

export function FormProvider({ children }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onHandleNext = () => {
    setStep((prevValue) => prevValue + 1);
  };
  const onHandleBack = () => {
    setStep((prevValue) => prevValue - 1);
  };

  console.log({ formData });
  return (
    <FormContext.Provider
      value={{ onHandleBack, onHandleNext, step, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
