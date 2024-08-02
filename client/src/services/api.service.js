import { baseUrl } from "../utils/urls";

export async function fetchApi(url) {
  try {
    const response = await fetch(baseUrl + url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error during the fetch of data: ", error);
    return null;
  }
}

export async function sendData(url, data, method = "POST") {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
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
    return { status: response.status, data: responseData };
  } catch (err) {
    console.error("Error during the send of data: ", err);
    return { status: 500, error: err };
  }
}
