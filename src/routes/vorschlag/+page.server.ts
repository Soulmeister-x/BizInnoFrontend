import type { PageServerLoad } from './$types'

import { BASE_API } from '$lib/config'

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const endpoint = `${BASE_API}/vorschlag`
        const response = await fetch(endpoint)
        if (!response.ok) {
            const errorBody = await response.json()
            console.error(`Backend-Fehler beim Laden von Items: ${response.status} ${response.statusText}`, errorBody);
            throw new Error('Fehler beim Laden der Daten vom Backend');
        }
        const data = await response.json()
        return {
            items: data
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