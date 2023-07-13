import { useState, useEffect, useRef } from "react";
import SignaturePad from "signature_pad";

const Signature = ({ setSignature }) => {
  const signatureRef = useRef(null);
  const signaturePadRef = useRef(null);
  const width = 400;
  const height = 200;

  const [isSigned, setIsSigned] = useState(false);
  const [helperText, setHelperText] = useState(
    "Cliquez sur le button signer quand vous avez terminé votre signature"
  );

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
      if (signaturePadRef.current.isEmpty()) {
        setHelperText("Il est nécessaire de fournir une signature");
      } else {
        const signatureDataUrl = signaturePadRef.current.toDataURL();
        setSignature(signatureDataUrl);
        setIsSigned(true);
        setHelperText("Votre signature a bien été enregistrée");
      }
    }
  };

  const handleClear = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      setIsSigned(false);
      setHelperText(
        "Cliquez sur le button signer quand vous avez terminé votre signature"
      );
    }
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h2 className='font-semibold mb-2'>Signature</h2>
      <div>
        <canvas
          ref={signatureRef}
          className={`border-2 border-dashed ${
            isSigned ? "border-teal-300" : "border-slate-300"
          }`}
        ></canvas>
        <p className='text-xs mt-2 italic text-justify text-slate-500'>
          {helperText}
        </p>
      </div>
      <div className='flex gap-6'>
        <button
          type='button'
          onClick={handleClear}
          className='rounded-lg bg-rose-100 focus:bg-rose-200 text-slate-700 hover:text-slate-500 px-4 py-2 mt-4 text-sm font-semibold'
        >
          Effacer
        </button>
        <button
          type='button'
          onClick={handleSign}
          className='rounded-lg bg-teal-100 focus:bg-teal-200 text-slate-700 hover:text-slate-500 px-4 py-2 mt-4 text-sm font-semibold'
        >
          Signer
        </button>
      </div>
    </div>
  );
};

export default Signature;
