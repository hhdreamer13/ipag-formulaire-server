import Vacataire from "@/models/VacataireModel";
import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
  const vacataireData = await req.json();

  try {
    await connectToDB();
    const newVacataire = new Vacataire(vacataireData);
    await newVacataire.save();
    return new Response(JSON.stringify(newVacataire), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(
      `Failed to create a new Vacataire. Error: ${error.message}`,
      { status: 500 }
    );
  }
};
