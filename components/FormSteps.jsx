"use client";

import { useEffect } from "react";
import { useFormState } from "@/utils/FormContext";
import PersonalDetailsForm from "./forms/PersonalDetailsForm";
import TeachingDetailsForm from "./forms/TeachingDetailsForm";
import EmploymentDetailsForm from "./forms/EmploymentDetailsForm";
import SignForm from "./forms/SignForm";
import SummaryForm from "./forms/SummaryForm";

const FormSteps = () => {
  const { step } = useFormState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  switch (step) {
    case 1:
      return <PersonalDetailsForm />;
    case 2:
      return <TeachingDetailsForm />;
    case 3:
      return <EmploymentDetailsForm />;
    case 4:
      return <SignForm />;
    case 5:
      return <SummaryForm />;

    default:
      return null;
  }
};

export default FormSteps;
