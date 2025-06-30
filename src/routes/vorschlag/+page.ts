import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { BASE_API } from '$lib/config';

export const load: PageLoad = async () => {
    const endpoint = BASE_API + '/vorschlag';
    console.log(`Trying to fetch ${endpoint}`)
    try {
        const response = await fetch(endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            }
        });
        const data = await response.json();
        const vorschlaege = data;
        return { vorschlaege };
    } catch (error) {
        console.log('Fehler beim Laden der Vorschläge:', error);
    }

    error(404, 'Not found');
};