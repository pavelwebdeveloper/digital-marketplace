const API_URL = "http://localhost:3000/api";

export async function getHealth() {
    const response = await fetch(`${API_URL}/health`);

    if (!response.ok) {
        throw new Error("Failed to connect to the API");
    }

    return response.json();
}