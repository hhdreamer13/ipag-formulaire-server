import { useFormState } from "@/utils/FormContext";
import { pdfHandler } from "@/utils/pdfHandler";
import labels from "@/public/labels";

const Confirmation = () => {
  const { formData, setFormData } = useFormState();

  const handleConfirm = async () => {
    const pdfDoc = await pdfHandler(formData);
    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "formulaire-conferencier-rempli.pdf";
    link.click();
  };

  const getLabel = (fieldName) => {
    const fieldLabel = labels.find((label) => label.name === fieldName);
    return fieldLabel ? fieldLabel.label : fieldName;
  };

  return (
    <div>
      <h2 className='mx-auto mt-16 max-w-xl sm:mt-20 text-left'>
        Veuillez vérifier vos informations:
      </h2>
      <ul className='mx-auto mt-8 max-w-xl text-left prose'>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key} className=''>
            <h4>{getLabel(key)}&nbsp;:</h4>{" "}
            {typeof value === "object"
              ? Object.entries(value).map(
                  ([k, v]) => v !== false && <div key={k}>{getLabel(k)}</div>
                )
              : value}
          </li>
        ))}
      </ul>
      <button
        onClick={handleConfirm}
        className='block w-40 mx-auto mt-14 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Confirmer
      </button>
    </div>
  );
};

export default Confirmation;
