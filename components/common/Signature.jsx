import { useEffect, useRef } from "react";
import SignaturePad from "signature_pad";
import { useFormState } from "@/utils/FormContext";

const Signature = () => {
  const signatureRef = useRef(null);
  const signaturePadRef = useRef(null);
  const width = 400;
  const height = 200;

  const { formData, setFormData } = useFormState();

  useEffect(() => {
    const canvas = signatureRef.current;
    const ratio = window.devicePixelRatio || 1;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.getContext("2d").scale(ratio, ratio);

    signaturePadRef.current = new SignaturePad(canvas);
  }, []);

  const handleSign = () => {
    if (signaturePadRef.current) {
      const signatureDataUrl = signaturePadRef.current.toDataURL();
      setFormData((prevFormData) => ({
        ...prevFormData,
        signature: signatureDataUrl,
      }));
    }
  };

  const handleClear = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h2 className='font-semibold mb-2'>Signature</h2>
      <div>
        <canvas ref={signatureRef} className='border-2 border-dashed'></canvas>
        <p className='text-xs mt-2 italic text-justify text-slate-500'>
          Cliquez sur le button signer quand vous avez terminé votre signature
        </p>
      </div>

      <div className='flex gap-6'>
        <button
          type='button'
          onClick={handleClear}
          className='rounded-lg bg-rose-100 px-4 py-2 mt-4 text-sm font-semibold'
        >
          Effacer
        </button>
        <button
          type='button'
          onClick={handleSign}
          className='rounded-lg bg-teal-100 px-4 py-2 mt-4 text-sm font-semibold'
        >
          Signer
        </button>
      </div>
    </div>
  );
};

export default Signature;
