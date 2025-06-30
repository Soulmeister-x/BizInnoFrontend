import type { Actions, PageServerLoad } from "./$types";
import { BASE_API } from '$lib/config';

const endpoint = BASE_API + '/unternehmen';

export const actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData();

        const payload: { [key: string]: any } = {};
        for (const [key, value] of formData.entries()) {
            payload[key] = value;
        }

        let apiResponseData;
        let success = false;
        let message = 'Ein unbekannter Fehler ist aufgetreten,';
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                apiResponseData = await response.json();
                success = true;
                message = 'Profil erfolgreich gespeichert!';
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
        return {
            success,
            message,
            data: apiResponseData
        }
    }
} satisfies Actions;


export const load: PageServerLoad = async ({ fetch, params, cookies }) => {
    const userId = 0  //cookies.get('userId')

    let userProfile = null;

    try {
        const endpoint = `${BASE_API}/unternehmen/${userId}`
        const response = await fetch(endpoint)
        if (!response.ok) {
            const errorBody = await response.json()
            throw new Error('Fehler beim Laden der Daten vom Backend');
        }
        userProfile = await response.json()

        return {
            userProfile
        }
    } catch (error) {
        console.error("Fehler beim Abrufen:", error);
        return {
            items: [{}],
            error: true,
            message: 'Daten konnten nicht geladen werden.'
        };
    }
}