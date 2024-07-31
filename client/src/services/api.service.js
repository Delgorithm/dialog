import { baseUrl } from "../utils/urls";

export async function fetchApi(url) {
  try {
    const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3310";
    console.log(`Fetching data from: ${baseUrl}/api${url}`);
    const response = await fetch(`${baseUrl}/api${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    console.log("Data received:", jsonData);
    return jsonData;
  } catch (error) {
    console.error("Error during the fetch of data: ", error);
    return null;
  }
}

export async function sendData(url, data, method = "POST") {
  try {
    const response = await fetch(`${baseUrl}/api${url}`, {
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
    return responseData;
  } catch (err) {
    console.error("Error during the send of data: ", err);
    return null;
  }
}
