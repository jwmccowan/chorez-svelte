import { handleHooks } from '@lucia-auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from './auth/lucia.server';
import prisma from './db/prisma.server';

const attachPrisma: Handle = async ({ event, resolve }) => {
	event.locals.prisma = prisma;
	return resolve(event);
};

const attachFormData: Handle = async ({ event, resolve }) => {
	if (event.request.method === 'POST') {
		const formData = await event.request.formData();
		const parsedData = Object.fromEntries(formData);
		event.locals.formData = parsedData;
	}
	return resolve(event);
};

export const handle = sequence(handleHooks(auth), attachPrisma, attachFormData);
