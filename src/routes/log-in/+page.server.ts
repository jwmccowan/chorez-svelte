import { error, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { auth } from '../../auth/lucia.server';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (event) => {
	const session = await event.locals.validate();
	if (session) {
		throw redirect(301, '/');
	}
}) satisfies PageServerLoad;

const LogInFormSchema = z.object({ username: z.string(), password: z.string().min(8) });

export const actions = {
	async default(event) {
		// Parse and validate form data
		const parseResult = LogInFormSchema.safeParse(event.locals.formData);
		if (!parseResult.success) {
			throw error(400, 'Invalid credentials');
		}

		// Validate user and set session
		try {
			const key = await auth.validateKeyPassword(
				'username',
				parseResult.data.username,
				parseResult.data.password
			);
			const session = await auth.createSession(key.userId);
			event.locals.setSession(session);
		} catch (e) {
			throw error(400, 'Invalid credentials');
		}

		// Redirect to either the referring path or to '/'
		const url = new URL(event.request.url);
		const referrer = url.searchParams.get('referrer') ?? '/';
		throw redirect(302, referrer);
	}
} satisfies Actions;
