import mongoose, { Schema, model, models } from "mongoose";

const VacataireSchema = new Schema(
  {
    civilite: {
      type: String,
      enum: ["M.", "Mme."],
      required: true,
    },
    prenom: {
      type: String,
      required: true,
      maxlength: 50,
    },
    nomNaissance: {
      type: String,
      required: true,
      maxlength: 50,
    },
    nomUsage: {
      type: String,
      maxlength: 50,
    },
    situationFamille: {
      type: String,
      required: true,
      maxlength: 50,
    },
    dateNaissance: {
      type: String,
      // required: true,
    },
    lieuNaissance: {
      type: String,
      required: true,
      maxlength: 50,
    },
    securiteSocial: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^[0-9 ]{21}$/.test(v),
        message: "Doit comporter 15 chiffres (avec des espaces)",
      },
    },
    nationalite: {
      type: String,
      required: true,
      maxlength: 50,
    },
    domicileFiscale: {
      type: String,
      required: true,
      maxlength: 50,
    },
    adressePerso: {
      type: String,
      required: true,
      maxlength: 200,
    },
    codePostal: {
      type: String,
      required: true,
      maxlength: 20,
    },
    villePostale: {
      type: String,
      required: true,
      maxlength: 50,
    },
    mail: {
      type: String,
      required: true,
      maxlength: 254,
      validate: {
        validator: (v) =>
          /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
        message: "Veuillez entrer une adresse email valide",
      },
    },
    tel: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^[\d\s-]{10,17}$/.test(v),
        message: "Doit comporter entre 10 et 12 chiffres",
      },
    },
    diplomePlus: {
      type: String,
      required: true,
      maxlength: 50,
    },
    recruteur: {
      type: String,
      required: true,
      maxlength: 50,
    },
    gestionnaire: {
      type: String,
      required: true,
      maxlength: 50,
    },
    diplome: {
      type: String,
      required: true,
      maxlength: 50,
    },
    enseignement: {
      type: String,
      required: true,
      maxlength: 50,
    },
    heuresCours: {
      type: String,
      required: true,
    },
    periodeRadio: {
      type: String,
      required: true,
    },
    disciplinePreferences: {
      type: Map,
      of: String,
    },
    soussigne: {
      type: String,
      required: true,
      maxlength: 50,
    },
    qualiteRadio: {
      type: String,
      required: true,
    },

    fonctionContractuel: {
      type: String,
      maxlength: 50,
    },
    adminContractuel: {
      type: String,
      maxlength: 50,
    },
    domaineEntrepreneur: {
      type: String,
      maxlength: 50,
    },
    domaineDoctorat: {
      type: String,
      maxlength: 50,
    },
    universite: {
      type: String,
      maxlength: 50,
    },
    nomEtudiantRetraite: {
      type: String,
      maxlength: 50,
    },
    prenomEtudiantRetraite: {
      type: String,
      maxlength: 50,
    },
    nomMaritalEtudiantRetraite: {
      type: String,
      maxlength: 50,
    },
    totalEtudiantRetraiteRadio: {
      type: String,
      maxlength: 50,
    },
    corpsFonctionnaire: {
      type: String,
      maxlength: 50,
    },
    adminFonctionnaire: {
      type: String,
      maxlength: 50,
    },

    dirigeantPreferences: {
      type: Map,
      of: String,
    },
    raisonIndependant: {
      type: String,
      maxlength: 50,
    },
    siretIndependant: {
      type: String,
      maxlength: 50,
    },
    adresseIndependant: {
      type: String,
      maxlength: 50,
    },

    lieuSign: {
      type: String,
      required: true,
      maxlength: 50,
    },

    dateSign: {
      type: String,
      // required: true,
    },

    signature: {
      // type: Buffer, // Store signature image as binary data
      type: String,
      // required: true,
    },

    agreed: {
      type: Boolean,
      required: true,
      validate: {
        validator: (v) => v === true,
        message:
          "L'acceptation de la politique de protection des données est nécessaire",
      },
    },
  },
  { timestamps: true }
);

let Vacataire;

Vacataire =
  models && "Vacataire" in models
    ? models.Vacataire
    : model("Vacataire", VacataireSchema);

export default Vacataire;
