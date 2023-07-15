import { Controller } from "react-hook-form";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SwitchToggle = ({
  control,
  name,
  label,
  error,
  required,
  helperText,
}) => {
  return (
    <>
      <div className='flex'>
        <Controller
          control={control}
          name={name}
          rules={{ required }}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <Switch.Group as='div' className='flex items-center gap-x-4'>
              <Switch
                checked={value}
                onChange={onChange}
                className={classNames(
                  value ? "bg-indigo-600" : "bg-gray-200",
                  "relative inline-flex items-center h-6 rounded-full w-11"
                )}
              >
                <span className='sr-only'>{label}</span>
                <span
                  className={classNames(
                    value ? "translate-x-6" : "translate-x-1",
                    "inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </Switch.Group>
          )}
        />
        <label className='block ml-4 text-sm font-semibold leading-6 text-slate-900'>
          {label}
        </label>
      </div>

      {helperText && (
        <p className='text-xs mt-2 italic text-justify text-slate-500'>
          {helperText}
        </p>
      )}
      {error && <p className='text-rose-600 text-xs mt-1'>{error}</p>}
    </>
  );
};

export default SwitchToggle;
