export async function fetchApi(date) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + date);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreurs lors de la récupération des données: ", error);
    return null;
  }
}

export async function sendDataGlucose(glucose, http) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: http,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(glucose),
    });
    return response;
  } catch (err) {
    console.error("Erreur lors de l'envoi des données: ", err);
    return null;
  }
}
