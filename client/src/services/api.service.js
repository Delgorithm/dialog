export async function fetchApi(url) {
  console.log(url);
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreur lors de la récupération des données: ", error);
    return null;
  }
}

export async function sendData(url, data, method = "POST") {
  console.log("Sending data to:", url, "with data:", data);
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Response data:", responseData);
    return responseData;
  } catch (err) {
    console.error("Erreur lors de l'envoi des données: ", err);
    return null;
  }
}
