import { useFormState } from "@/utils/FormContext";

const StepsIndicatorVacataire = ({ currentStep }) => {
  const { setStep } = useFormState();
  const stepsName = ["", "", "", "", "", ""];

  const handleStepClick = (step) => {
    setStep(step);
  };

  return (
    <div className='flex justify-center space-x-8 mt-10'>
      {stepsName.map((stepName, index) => (
        <div
          key={index}
          className='flex flex-col items-center'
          onClick={() => handleStepClick(index + 1)}
        >
          <div
            className={`w-8 h-8 rounded-full border border-slate-950 flex items-center justify-center ${
              currentStep === index + 1
                ? "bg-indigo-600 text-slate-50"
                : "bg-gray-200 text-slate-900"
            }`}
          >
            <span className='text-sm font-semibold'>{index + 1}</span>
          </div>

          <span className='mt-2 text-xs'>{stepName}</span>
        </div>
      ))}
    </div>
  );
};

export default StepsIndicatorVacataire;
