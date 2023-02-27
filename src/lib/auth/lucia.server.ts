import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import prisma from '$lib/db/prisma.server';

export const auth = lucia({
	adapter: prismaAdapter(prisma),
	env: dev ? 'DEV' : 'PROD',
	transformUserData: (data) => ({
		id: data.id,
		name: data.name
	}),
	generateCustomUserId: () => crypto.randomUUID()
});

export type Auth = typeof auth;
