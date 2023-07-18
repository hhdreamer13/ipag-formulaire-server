/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/20/solid";

const backdropAnimations = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5, // duration of the transition in seconds
      ease: "easeOut", // easing function to use
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, // duration of the transition in seconds
      ease: "easeIn", // easing function to use
    },
  },
};

const modalAnimations = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      mass: 1,
    },
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 50,
      mass: 1,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode='wait'>
      {showModal && (
        <motion.div
          className='fixed top-0 left-0 z-10 h-full w-full bg-black bg-opacity-60'
          variants={backdropAnimations}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div
            className='relative my-0 mx-auto flex w-fit flex-col rounded-2xl bg-amber-50 py-16 pr-20 pl-10 shadow-2xl'
            variants={modalAnimations}
          >
            <div className='prose text-justify mx-auto'>
              <ul className='list-disc'>
                <li className='mb-4'>
                  <span className='font-bold'>Atteste sur l’honneur :</span>{" "}
                  l’exactitude des renseignements déclarés et m’engage à
                  signaler à la DRH de l’université Panthéon-Assas toute
                  modification concernant ma situation.
                </li>
                <li className='mb-4'>
                  <span className='font-bold'>Je déclare :</span> avoir pris
                  connaissance des conditions de recrutement prévues par le
                  décret n° 87-889 du 29 octobre 1987 et m’engage à ne pas
                  débuter les heures d’enseignement avant acceptation du dossier
                  de recrutement.
                </li>
                <li className='mb-4'>
                  <span className='font-bold'>Je prends note :</span> que
                  l’absence de production des pièces requises rend impossible
                  mon recrutement et la rémunération de mes heures
                  d’enseignement.
                </li>
                <li className='mb-4'>
                  <span className='font-bold'>NB :</span> Conformément au décret
                  du 29 octobre 1987, les enseignants sont soumis aux diverses
                  obligations qu'implique leur activité d'enseignement et
                  participent au contrôle des connaissances et aux examens
                  relevant de leur enseignement. L'exécution de ces tâches ne
                  donne lieu à aucune rémunération supplémentaire.
                </li>
              </ul>
            </div>
            <button
              className='absolute top-0 right-0 m-2 animate-pulse p-0 text-slate-300'
              onClick={() => setShowModal(false)}
            >
              <XCircleIcon className='w-6 h-6 text-slate-950' />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
