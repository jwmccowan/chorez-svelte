import { handleServerSession } from '@lucia-auth/sveltekit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = handleServerSession();

// If we want our own load function
// export const load: LayoutServerLoad = handleServerSession((event: LayoutServerLoadEvent) => {
// 	..
// });
