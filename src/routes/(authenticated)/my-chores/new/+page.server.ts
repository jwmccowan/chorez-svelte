import { error, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import getLogInUrl from '../../../../lib/auth/get-log-in-url';
import type { Actions } from '../$types';

const NewChoreFormInput = z.object({
	title: z.string(),
	description: z.string(),
	due: z.string().datetime()
});

export const actions: Actions = {
	async default(event) {
		const parseResult = NewChoreFormInput.safeParse(event.locals.formData);
		if (!parseResult.success) {
			console.error(parseResult.error);
			throw error(400, 'Invalid chore');
		}
		const session = await event.locals.validate();
		if (!session) {
			throw redirect(301, getLogInUrl(event.url.pathname));
		}
		await event.locals.prisma.chore.create({
			data: {
				description: parseResult.data.description,
				due: parseResult.data.due,
				title: parseResult.data.title,
				userId: session.userId
			}
		});

		throw redirect(301, '/my-chores');
	}
};
