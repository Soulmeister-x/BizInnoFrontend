import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { BASE_API } from '$lib/config';

export const load: PageLoad = async ({ params }) => {
    if (params.slug) {
        const endpoint = BASE_API + '/ausschreibung/' + params.slug;
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            const selectedTender = data;
            return { selectedTender };
        } catch (error) {
            console.log('Fehler beim Laden des Benutzerprofils:', error);
        }

    }

    error(404, 'Not found');
};