/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='bg-gray-50 w-screen py-8'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <div className='flex justify-center mb-4 sm:mb-0'>
            <Image
              src='/ipag-logo.png'
              width={200}
              height={200}
              alt='IPAG logo'
              className='w-auto h-auto'
            />
          </div>
          <div className='text-center text-sm text-slate-500 sm:text-right'>
            <p className='mb-1'>IPAG de Paris</p>
            <p className='mb-1'>
              Institut de préparation à l'administration générale
            </p>
            <p className='mb-1'>122 rue de Vaugirard 75006 PARIS</p>
            <p className='mb-1'>
              <a
                href='mailto:ipag@u-paris2.fr'
                className='text-blue-500 hover:underline'
              >
                ipag@u-paris2.fr
              </a>
            </p>
          </div>
        </div>
        <p className='mt-1 text-sm text-slate-400 text-center'>
          Copyright &copy; 2023. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
