import Conferencier from "@/models/ConferencierModel";
import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
  const conferencierData = await req.json();

  try {
    await connectToDB();
    const newConferencier = new Conferencier(conferencierData);
    await newConferencier.save();
    return new Response(JSON.stringify(newConferencier), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(
      `Failed to create a new conferencier. Error: ${error.message}`,
      { status: 500 }
    );
  }
};
