import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { BASE_API } from '$lib/config';

export const load: PageLoad = async ({ params }) => {
    if (params.slug) {
        const endpoint = BASE_API + '/vorschlag/' + params.slug;
        try {
            const response = await fetch(endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                }
            });
            const data = await response.json();
            const vorschlag = data;
            return { vorschlag };
        } catch (error) {
            console.log('Fehler beim Laden des Vorschlags:', error);
        }

    }

    error(404, 'Not found');
};