import { d as private_env } from "../../../../chunks/shared-server.js";
const load = async () => {
  const response = await fetch(`${private_env.BASE_API_URL}/startup/`);
  const startups = await response.json();
  if (!response.ok) {
    throw new Error("Failed to load startups", { cause: startups });
  }
  return { startups };
};
export {
  load
};
