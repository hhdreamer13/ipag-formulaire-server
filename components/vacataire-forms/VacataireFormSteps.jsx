"use client";

import { useEffect } from "react";
import { useFormState } from "@/utils/FormContext";
import PersonalVacataireForm from "./PersonalVacataireForm";
import TeachingVacataireForm from "./TeachingVacataireForm";
import EmploymentVacataireForm from "./EmploymentVacataireForm";
import SignVacataireForm from "./SignVacataireForm";
import SummaryVacataireForm from "./SummaryVacataireForm";
import StepsIndicatorVacataire from "./StepsIndicatorVacataire";
import FonctionnaireForm from "./vacataire-employment/FonctionnaireForm";
import ContractuelForm from "./vacataire-employment/ContractuelForm";
import EtudiantForm from "./vacataire-employment/EtudiantForm";
import RetraiteForm from "./vacataire-employment/RetraiteForm";
import IndependantForm from "./vacataire-employment/IndependantForm";
import EntrepreneurForm from "./vacataire-employment/EntrepreneurForm";
import SalarieForm from "./vacataire-employment/SalarieForm";

const VacataireFormSteps = ({ setShowModal }) => {
  const { step, formData } = useFormState();

  const renderEmploymentForm = () => {
    switch (formData.employmentType) {
      case "fonctionnaireRadio":
        return <FonctionnaireForm />;
      case "contractuelRadio":
        return <ContractuelForm />;
      case "etudiantRadio":
        return <EtudiantForm />;
      case "retraiteRadio":
        return <RetraiteForm />;
      case "independantRadio":
        return <IndependantForm />;
      case "entrepreneurRadio":
        return <EntrepreneurForm />;
      case "salarieRadio":
        return <SalarieForm />;

      default:
        return null;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <div>
      <StepsIndicatorVacataire currentStep={step} />
      {step === 1 && <PersonalVacataireForm />}
      {step === 2 && <TeachingVacataireForm />}
      {step === 3 && <EmploymentVacataireForm />}
      {step === 4 && renderEmploymentForm()}
      {step === 5 && <SignVacataireForm setShowModal={setShowModal} />}
      {step === 6 && <SummaryVacataireForm />}
    </div>
  );
};

export default VacataireFormSteps;
