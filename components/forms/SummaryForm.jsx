import { useFormState } from "@/utils/FormContext";
import { pdfHandler } from "@/utils/pdfHandler";
import labels from "@/public/labels";
import Image from "next/image";

const SummaryForm = () => {
  const { formData, handleBack } = useFormState();

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

  const onHandleBack = () => {
    handleBack();
  };

  return (
    <div>
      <h2 className='mx-auto mt-16 max-w-xl sm:mt-20 text-left'>
        Veuillez vérifier vos informations:
      </h2>
      <div className='mx-auto mt-8 max-w-xl text-left prose'>
        <table className='table-auto w-full'>
          <tbody>
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key} className='border-b border-gray-200'>
                <td className='py-2 font-semibold text-gray-700'>
                  {getLabel(key)}&nbsp;:
                </td>
                <td className='py-2 text-gray-600 items-center flex'>
                  {key === "signature" ? (
                    value ? (
                      <Image
                        src={value}
                        alt='Signature'
                        width={100}
                        height={50}
                      />
                    ) : (
                      <p>Pas de signature</p>
                    )
                  ) : value && typeof value === "object" ? (
                    Object.entries(value).map(
                      ([k, v]) =>
                        v !== false && <div key={k}>{getLabel(k)}</div>
                    )
                  ) : (
                    value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-14 flex'>
        <button
          type='button'
          onClick={onHandleBack}
          className='block w-40 mx-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Précédent
        </button>
        <button
          onClick={handleConfirm}
          className='block w-40 mx-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default SummaryForm;
