import { d as private_env } from "../../../../chunks/shared-server.js";
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const incorporation = formData.get("incorporation");
    const newStartupData = {
      name: formData.get("name"),
      description: formData.get("description"),
      foundedDate: formData.get("foundedDate"),
      location: formData.get("location"),
      incorporation: incorporation === "on"
    };
    const startupId = formData.get("id");
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
