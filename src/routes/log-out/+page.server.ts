import { error, redirect } from '@sveltejs/kit';
import { auth } from '../../auth/lucia.server';
import type { Actions } from './$types';

export const actions = {
	async default(event) {
		const session = await event.locals.validate();
		if (!session) {
			throw error(401);
		}
		await auth.invalidateSession(session.sessionId);
		event.locals.setSession(null);

		throw redirect(301, '/');
	}
} satisfies Actions;
