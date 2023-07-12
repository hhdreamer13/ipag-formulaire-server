const InputField = ({
  label,
  type,
  register,
  name,
  error,
  defaultValue,
  placeholder,
  helperText,
}) => {
  return (
    <>
      <label className='block text-sm font-semibold leading-6 text-slate-900'>
        {label}
      </label>
      <input
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        {...register(name)}
        className='block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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

export default InputField;
