import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { BASE_API } from '$lib/config';

export const load: PageLoad = async ({ params }) => {
    if (params.slug) {
        const endpoint = BASE_API + '/anfrage/' + params.slug;
        try {
            const response = await fetch(endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                }
            });
            const data = await response.json();
            const selectedAnfrage = data;
            return { selectedAnfrage };
        } catch (error) {
            console.log('Fehler beim Laden der Anfrage:', error);
        }

    }

    error(404, 'Not found');
};