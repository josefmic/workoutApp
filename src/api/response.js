export async function handleResponse(response) {
    try {
        return await response.json();
    } catch (error) {
        throw error;
    }
}