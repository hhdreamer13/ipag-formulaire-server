import { Controller } from "react-hook-form";

const SocialSecurityField = ({
  control,
  name,
  placeholder,
  error,
  helperText,
}) => {
  const formatValue = (value) => {
    const pattern = [1, 2, 2, 2, 3, 3, 2];
    let formattedValue = "";
    let i = 0;
    for (const n of pattern) {
      if (value.length > i) {
        formattedValue += value.substr(i, n) + " ";
        i += n;
      } else {
        break;
      }
    }
    return formattedValue.trim();
  };

  const handleChange = (event) => {
    return formatValue(event.target.value.replace(/\D/g, ""));
  };

  return (
    <>
      <label className='block text-sm font-semibold leading-6 text-slate-900'>
        Sécurité Sociale
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type='tel'
            {...field}
            onChange={(e) => field.onChange(handleChange(e))}
            placeholder={placeholder}
            className='block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        )}
      />
      {error && <p className='text-rose-600 text-xs mt-1'>{error}</p>}
      {helperText && (
        <p className='text-xs mt-2 italic text-justify text-slate-500'>
          {helperText}
        </p>
      )}
    </>
  );
};

export default SocialSecurityField;
