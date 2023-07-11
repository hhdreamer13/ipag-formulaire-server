"use client";

import { useFormState } from "@/utils/FormContext";
import PersonalDetailsForm from "./forms/PersonalDetailsForm";
import TeachingDetailsForm from "./forms/TeachingDetailsForm";
import EmploymentDetailsForm from "./forms/EmploymentDetailsForm";

const FormSteps = () => {
  const { step } = useFormState();

  switch (step) {
    case 1:
      return <PersonalDetailsForm />;
    case 2:
      return <TeachingDetailsForm />;
    case 3:
      return <EmploymentDetailsForm />;

    default:
      return null;
  }
};

export default FormSteps;
