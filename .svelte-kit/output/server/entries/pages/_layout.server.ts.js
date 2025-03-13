import { d as private_env } from "../../chunks/shared-server.js";
const load = async () => {
  const startupsResponse = await fetch(`${private_env.BASE_API_URL}/startup/`);
  const organizationsResponse = await fetch(`${private_env.BASE_API_URL}/organizations/`);
  const startups = await startupsResponse.json();
  const organizations = await organizationsResponse.json();
  if (!startupsResponse.ok) {
    throw new Error("Failed to load startups", { cause: startups });
  }
  if (!organizationsResponse.ok) {
    throw new Error("Failed to load organizations", { cause: organizations });
  }
  return { startups, organizations };
};
export {
  load
};
