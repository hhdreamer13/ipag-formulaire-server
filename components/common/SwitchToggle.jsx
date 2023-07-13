/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SwitchToggle = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
      <div className='flex h-6 items-center'>
        <Switch
          checked={agreed}
          onChange={setAgreed}
          className={classNames(
            agreed ? "bg-indigo-600" : "bg-gray-200",
            "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          )}
        >
          <span className='sr-only'>Accepter la réglementation</span>
          <span
            aria-hidden='true'
            className={classNames(
              agreed ? "translate-x-3.5" : "translate-x-0",
              "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
            )}
          />
        </Switch>
      </div>
      <Switch.Label className='text-sm leading-6 text-gray-600 text-justify'>
        J'accepte que l'IPAG de Paris recueille et utilise mes données
        personnelles conformément au Règlement Général sur la Protection des
        Données (RGPD). Ces données seront utilisées uniquement dans le cadre de
        cette participation et ne seront pas partagées avec des tiers sans mon
        consentement explicite.
        {/* <a href='#' className='font-semibold text-indigo-600'>
          politique de confidentialité
        </a>
        . */}
      </Switch.Label>
    </Switch.Group>
  );
};

export default SwitchToggle;
