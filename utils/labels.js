const labels = [
  { name: "nomNaissance", label: "Nom de naissance" },
  { name: "prenom", label: "Prénom" },
  { name: "nomUsage", label: "Nom d’usage / d’époux(se)" },
  { name: "situationFamille", label: "Situation de famille" },
  { name: "dateNaissance", label: "Date de naissance" },
  { name: "lieuNaissance", label: "Lieu de naissance" },
  { name: "securiteSocial", label: "Numéro de sécurité sociale" },
  { name: "nationalite", label: "Nationalité" },
  { name: "domicileFiscale", label: "Pays de résidence fiscale" },
  { name: "adressePerso", label: "Adresse personnelle" },
  { name: "codePostal", label: "Code Postal" },
  { name: "villePostale", label: "Ville" },
  { name: "mail", label: "E-mail" },
  { name: "tel", label: "Téléphone" },
  { name: "recruteur", label: "Service recruteur" },
  { name: "gestionnaire", label: "Gestionnaire" },
  { name: "conference", label: "Intitulé de la conférence" },
  { name: "diplome", label: "Diplôme" },
  { name: "responsable", label: "Sous la responsabilité de" },
  { name: "dateConference", label: "Date de la conférence" },
  {
    name: "heuresCours",
    label:
      "Nombre d’heures prévisionnel pour lequel le recrutement est effectué (heures cours)",
  },
  {
    name: "heuresTd",
    label:
      "Nombre d’heures prévisionnel pour lequel le recrutement est effectué (heures TD)",
  },
  {
    name: "disciplinePreferences",
    label: "Discipline",
    options: [
      { value: "droitPrive", label: "droit privé" },
      { value: "droitPublic", label: "droit public" },
      {
        value: "histoireDroit",
        label: "histoire du droit et des institutions",
      },
      { value: "scienceEconomique", label: "sciences économiques" },
      { value: "scienceGestion", label: "sciences de gestion" },
      {
        value: "mathematiqueInformatique",
        label: "mathématique et informatique",
      },
      { value: "scienceInformation", label: "sciences de l’information" },
      { value: "langues", label: "langues" },
      { value: "sports", label: "sports" },
    ],
  },
  { name: "soussigne", label: "Je soussigné(e) M. / Mme" },
  { name: "profession", label: "Déclare exercer la profession suivante" },
  {
    name: "preferences",
    label: "En qualité de",
    options: [
      { value: "fonctionnaire", label: "Fonctionnaire" },
      { value: "contractuel", label: "Contractuel de la Fonction Publique" },
      { value: "salarie", label: "Salarié du secteur privé" },
      { value: "retraite", label: "Retraité" },
      {
        value: "independant",
        label: "Travailleurs indépendant, profession libérale",
      },
      { value: "entrepreneur", label: "Auto-entrepreneur" },
      { value: "etudiant", label: "Étudiant" },
      { value: "autreProfCheck", label: "Autre" },
    ],
  },
  { name: "autreProfTitle", label: "Si autre, veuillez préciser" },
  {
    name: "fonction",
    label:
      "Si vous êtes « Contractuel de la Fonction Publique » ou « Salarié du secteur privé » Ma rémunération brute mensuelle dépasse le plafond des cotisations de la sécurité sociale (plafond au 1er janvier 2023 : 3.666€)",
    options: [
      { value: "remunerationOui", label: "Oui" },
      { value: "remunerationNon", label: "Non" },
    ],
  },
  { name: "lieuSign", label: "Faite à" },
  { name: "dateSign", label: "Le" },
];
