import type { Actions } from "./$types";
import { BASE_API } from '$lib/config';

const endpoint = BASE_API + '/unternehmen';

export const actions = {
    default: async ({ request, fetch }) => {
        // TODO: implement form actions https://svelte.dev/docs/kit/form-actions
        const formData = await request.formData();

        const payload: { [key: string]: any } = {};
        for (const [key, value] of formData.entries()) {
            payload[key] = value;
        }

        console.log("Sende Daten an API:", payload);

        let apiResponseData;
        let success = false;
        let message = 'Ein unbekannter Fehler ist aufgetreten,';

        try {
            console.log("inside try block")
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            console.log("message was fetched")

            if (response.ok) {
                apiResponseData = await response.json();
                success = true;
                message = 'Profil erfolgreich gespeichert!';
                console.log("API-Response (success):", apiResponseData)
            } else {
                const errorData = await response.json()
                success = false
                message = errorData.message || `Fehler (${response.status}): ${response.statusText}`
                console.error(message)
            }
        } catch (error) {
            console.error("Fehler beim Senden der Anfrage an die API:", error);
            success = false;
            message = `Netzwerkfehler: ${error instanceof Error ? error.message : String(error)}`;
        }
        // const data = await response.json();
        // return data;
        return {
            success,
            message,
            data: apiResponseData
        }
    }
} satisfies Actions;
