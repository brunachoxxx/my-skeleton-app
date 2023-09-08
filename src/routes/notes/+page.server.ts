import type { PageServerLoad } from './$types';

export const load = (async () => {

    interface Note  {
        title: string;
        body: string;
        author: string;
    }
    
    const notesDb: Note[] = []

    return {
         notesDb
    };
}) satisfies PageServerLoad;