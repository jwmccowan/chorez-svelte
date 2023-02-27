import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.validate();
	if (!session) {
		throw redirect(301, '/');
	}

	const chores = await event.locals.prisma.chore.findMany({
		where: {
			userId: session.userId
		}
	});

	return {
		chores
	};
};
