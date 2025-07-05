import { Client } from "@gradio/client";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    const client = await Client.connect("emaaaa543/fingerprint_detection_models");

    const result = await client.predict("/predict", {
      image: file,
    });

    return Response.json({ result });
  } catch (error) {
    console.error("Gradio API Error:", error); // This will print full error to terminal
    return new Response("Gradio call failed", { status: 500 });
  }
}
