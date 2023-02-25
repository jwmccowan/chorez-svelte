import { redirect } from '@sveltejs/kit';
import getLogInUrl from '../../auth/get-log-in-url';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const { session, user } = await event.locals.validateUser();
	if (!session) {
		const { pathname } = new URL(event.request.url);
		throw redirect(301, getLogInUrl(pathname));
	}
	return { user };
};
