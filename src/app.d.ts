// See https://kit.svelte.dev/docs/types#app

import type { SetSession, Validate, ValidateUser } from '@lucia-auth/sveltekit';
import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			validate: Validate;
			validateUser: ValidateUser;
			setSession: SetSession;

			prisma: PrismaClient;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
