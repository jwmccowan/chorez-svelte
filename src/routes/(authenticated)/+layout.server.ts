import { redirect } from '@sveltejs/kit';
import getLogInUrl from '$lib/auth/get-log-in-url';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const { session, user } = await event.locals.validateUser();
	if (!session) {
		throw redirect(301, getLogInUrl(event.url.pathname));
	}
	return { user };
};
