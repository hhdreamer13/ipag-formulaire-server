"use client";

import { useEffect } from "react";
import { useFormState } from "@/utils/FormContext";
import PersonalConferencierForm from "./PersonalConferencierForm";
import TeachingConferencierForm from "./TeachingConferencierForm";
import EmploymentConferencierForm from "./EmploymentConferencierForm";
import StepsIndicatorConferencier from "./StepsIndicatorConferencier";
import SummaryConferencierForm from "./SummaryConferencierForm";
import SignConferencierForm from "./SignConferencierForm";

const ConferencierFormSteps = () => {
  const { step } = useFormState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <div>
      <StepsIndicatorConferencier currentStep={step} />
      {step === 1 && <PersonalConferencierForm />}
      {step === 2 && <TeachingConferencierForm />}
      {step === 3 && <EmploymentConferencierForm />}
      {step === 4 && <SignConferencierForm />}
      {step === 5 && <SummaryConferencierForm />}
    </div>
  );
};

export default ConferencierFormSteps;
