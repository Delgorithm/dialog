export async function fetchApi(url) {
  try {
    const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3310";
    const response = await fetch(`${baseUrl}${url}`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error during the fetch of data: ", error);
    return null;
  }
}

export async function sendData(url, data, method = "POST") {
  try {
    const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3310";
    const response = await fetch(`${baseUrl}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return { status: response.status, data: responseData };
  } catch (err) {
    console.error("Error during the send of data: ", err);
    return null;
  }
}
