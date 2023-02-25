import { handleHooks } from '@lucia-auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from './auth/lucia.server';
import prisma from './db/prisma.server';

const customHandle: Handle = async ({ event, resolve }) => {
	event.locals.prisma = prisma;
	return resolve(event);
};

export const handle = sequence(handleHooks(auth), customHandle);
