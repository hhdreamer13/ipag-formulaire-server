const CheckboxGroup = ({
  label,
  register,
  name,
  options,
  error,
  helperText,
}) => {
  return (
    <>
      <label className='block text-sm font-semibold leading-6 text-slate-900'>
        {label}
      </label>
      {options.map((option, index) => (
        <div key={index} className='mt-2'>
          <label className='inline-flex items-center'>
            <input
              type='checkbox'
              value={option.value}
              {...register(`${name}.${option.value}`)}
              className='rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
            <span className='ml-2 text-sm text-gray-600'>{option.label}</span>
          </label>
        </div>
      ))}
      {error && <p className='text-rose-600 text-xs mt-1'>{error}</p>}

      {helperText && (
        <p className='text-xs mt-2 italic text-justify text-slate-500'>
          {helperText}
        </p>
      )}
    </>
  );
};

export default CheckboxGroup;
