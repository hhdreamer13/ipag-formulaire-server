import { PDFDocument } from "pdf-lib";

export async function pdfHandler(formData) {
  const formUrl = "./formulaire-conferencier.pdf";
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();

  const fields = Object.keys(formData);

  const formatDateForPDF = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  console.log(formData);

  for (const key of fields) {
    if (key === "civilite") continue;
    if (key === "agreed") continue;

    if (key.includes("date")) {
      formData[key] = formatDateForPDF(formData[key]);
    }

    // Check if the form data is an object (for checkbox fields)
    if (typeof formData[key] === "object" && formData[key] !== null) {
      Object.keys(formData[key]).forEach((subKey) => {
        // If the value is true, check the checkbox
        if (formData[key][subKey] !== false) {
          let field = form.getCheckBox(subKey);
          if (field) field.check();
        }
      });
    } else {
      if (key === "dateNaissance") {
        const [day, month, year] = formData[key].split("/");
        form.getTextField("dateNaissanceAnnee").setText(year);
        form.getTextField("dateNaissanceMois").setText(month);
        form.getTextField("dateNaissanceJour").setText(day);
      } else if (key === "tel") {
        const telParts = formData[key].split(" ");
        for (let i = 0; i < telParts.length; i++) {
          let field = form.getTextField(`tel${i + 1}`);
          if (field) field.setText(telParts[i]);
        }
      } else if (key === "securiteSocial") {
        const ssnParts = formData[key].split(" ");
        for (let i = 0; i < ssnParts.length; i++) {
          let field = form.getTextField(`securiteSocial${i + 1}`);
          if (field) field.setText(ssnParts[i]);
        }
      } else if (key === "domicileFiscale") {
        const isFrance = formData[key].toLowerCase() === "france";
        const field = form.getCheckBox(
          isFrance ? "domicileFrance" : "domicileAutre"
        );
        if (field) field.check();
        if (!isFrance) {
          const textField = form.getTextField(key);
          if (textField) textField.setText(formData[key]);
        }
      } else if (key === "signature") {
        const signatureField = form.getButton(key);
        if (signatureField) {
          const signatureData = atob(formData[key].split(",")[1]);
          const signatureBytes = new Uint8Array(signatureData.length);

          for (let i = 0; i < signatureData.length; i++) {
            signatureBytes[i] = signatureData.charCodeAt(i);
          }

          const signatureImage = await pdfDoc.embedPng(signatureBytes.buffer);
          signatureField.setImage(signatureImage);
        }
      } else if (
        typeof formData[key] === "string" &&
        formData[key].includes("Radio")
      ) {
        let group = form.getRadioGroup(key); // Get the radio group by the group name
        if (group) group.select(formData[key]); // Select the radio button
      } else {
        // For text fields
        try {
          if (!key.includes("Radio")) {
            // Exclude radio group fields
            let field = form.getTextField(key);
            if (field) field.setText(formData[key]);
          }
        } catch (error) {
          console.error(
            `Could not set value for field ${key}: ${error.message}`
          );
        }
      }
    }
  }

  return pdfDoc;
}
