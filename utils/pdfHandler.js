import { PDFDocument } from "pdf-lib";

export async function pdfHandler(formData) {
  const formUrl = "./formulaire-conferencier-edit.pdf";
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();

  Object.keys(formData).forEach((key) => {
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
        const [year, month, day] = formData[key].split("-");
        form.getTextField("dateNaissanceAnnee").setText(year);
        form.getTextField("dateNaissanceMois").setText(month);
        form.getTextField("dateNaissanceJour").setText(day);
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
      } else {
        // For text fields
        let field = form.getTextField(key);
        if (field) field.setText(formData[key]);
      }
    }
  });

  return pdfDoc;
}
