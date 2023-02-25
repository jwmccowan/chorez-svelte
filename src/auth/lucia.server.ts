import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import prisma from '../db/prisma.server';
import { dev } from '$app/environment';

export const auth = lucia({
	adapter: prismaAdapter(prisma),
	env: dev ? 'DEV' : 'PROD'
});

export type Auth = typeof auth;
