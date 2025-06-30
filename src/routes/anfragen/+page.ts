import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { BASE_API } from '$lib/config';

export const load: PageLoad = async () => {
    const endpoint = BASE_API + '/anfrage';
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const anfragen = data;
        return { anfragen };
    } catch (error) {
        console.log('Fehler beim Laden des Benutzerprofils:', error);
    }

    error(404, 'Not found');
};