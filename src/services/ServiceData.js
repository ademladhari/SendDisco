import { getApi } from "../utils/api/api";

export const data = async () => {
  try {
    const response = await getApi.get("/commandes");
    return response.data; // Assuming you want to return the data from the response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};
export const confirmCommande = async (commande_id) => {
  try {
    const response = await getApi.post("/commandes/setLivreur", {
      commande_id: `${commande_id}`,
      statut_id: "6",
      livreur_id: "1",
    });

    return response.data; // Assuming you want to return the data from the response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};
