import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		workTime: 1500,
		restTime: 300,
		play: false
	};
}) satisfies PageLoad;
