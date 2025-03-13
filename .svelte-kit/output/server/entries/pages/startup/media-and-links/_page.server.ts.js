import { d as private_env } from "../../../../chunks/shared-server.js";
import { s as s3 } from "../../../../chunks/s3.js";
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const pitchDeckFile = formData.get("pitchDeck");
    let pitchDeckUrl = null;
    let pitchDeckName = null;
    if (pitchDeckFile instanceof File && pitchDeckFile.size) {
      pitchDeckUrl = await s3.uploadFile(pitchDeckFile, private_env.AWS_CV_BUCKET_NAME);
      pitchDeckName = pitchDeckFile.name;
    }
    const newStartupData = {
      websiteUrl: formData.get("websiteUrl"),
      pitchDeckUrl,
      pitchDeckName
    };
    const startupId = formData.get("id");
    console.log(newStartupData);
    const response = await fetch(`${private_env.BASE_API_URL}/startup/${startupId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStartupData)
    });
    const startup = await response.json();
    if (!response.ok) {
      throw new Error("Failed to update startup information", { cause: startup });
    }
    return { startup };
  }
};
export {
  actions
};
