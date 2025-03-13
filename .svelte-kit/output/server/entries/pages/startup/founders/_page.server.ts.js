import { d as private_env } from "../../../../chunks/shared-server.js";
import { s as s3 } from "../../../../chunks/s3.js";
const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const cvFile = formData.get("cv");
    let cvUrl = null;
    let cvName = null;
    if (cvFile instanceof File && cvFile.size) {
      cvUrl = await s3.uploadFile(cvFile, private_env.AWS_CV_BUCKET_NAME);
      cvName = cvFile.name;
    }
    const newFounderData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      role: formData.get("role"),
      country: formData.get("country"),
      linkedin: formData.get("linkedin"),
      email: formData.get("email"),
      summary: formData.get("summary"),
      cvUrl,
      cvName
    };
    const startupId = formData.get("startupId");
    const response = await fetch(`${private_env.BASE_API_URL}/startup/${startupId}/founders/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFounderData)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error("Failed to create new founder", { cause: error });
    }
    return { success: true };
  },
  update: async ({ request }) => {
    const formData = await request.formData();
    const cvFile = formData.get("cv");
    let cvUrl = null;
    let cvName = null;
    if (cvFile instanceof File && cvFile.size) {
      cvUrl = await s3.uploadFile(cvFile, private_env.AWS_CV_BUCKET_NAME);
      cvName = cvFile.name;
    }
    const newFounderData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      role: formData.get("role"),
      country: formData.get("country"),
      linkedin: formData.get("linkedin"),
      email: formData.get("email"),
      summary: formData.get("summary"),
      cvUrl,
      cvName
    };
    const founderId = formData.get("id");
    const startupId = formData.get("startupId");
    const response = await fetch(`${private_env.BASE_API_URL}/startup/${startupId}/founders/${founderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFounderData)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error("Failed to edit founder", { cause: error });
    }
    return { success: true };
  },
  delete: async ({ request }) => {
    const formData = await request.formData();
    const founderId = formData.get("id");
    const startupId = formData.get("startupId");
    const response = await fetch(`${private_env.BASE_API_URL}/startup/${startupId}/founders/${founderId}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error("Failed to delete founder", { cause: error });
    }
    return { success: true };
  }
};
export {
  actions
};
