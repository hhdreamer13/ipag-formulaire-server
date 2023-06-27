import { ChevronDownIcon } from "@heroicons/react/20/solid";

const InputSelect = ({ label, register, options }) => (
  <>
    <label className='sr-only'>{label}</label>
    <select
      {...register(label)}
      className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
    >
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
    <ChevronDownIcon
      className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
      aria-hidden='true'
    />
  </>
);

export default InputSelect;
