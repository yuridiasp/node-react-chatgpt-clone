const URL_API = "http://localhost:5000/api/prompt"

export const makeRequest = async (message) => {
    const body = message
    const { data } = await (await fetch(URL_API, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })).json()

    return data
}