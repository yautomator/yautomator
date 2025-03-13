import { d as private_env } from "../../../../chunks/shared-server.js";
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const newStartupData = {
      industry: formData.get("industry"),
      teamSize: parseInt(formData.get("teamSize")),
      fundingStage: formData.get("fundingStage"),
      revenue: parseInt(formData.get("revenue")),
      number_of_users: parseInt(formData.get("number_of_users")),
      tagline: formData.get("tagline")
    };
    const startupId = formData.get("id");
    const response = await fetch(`${private_env.BASE_API_URL}/startup/${startupId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStartupData)
    });
    console.log(JSON.stringify(newStartupData));
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
