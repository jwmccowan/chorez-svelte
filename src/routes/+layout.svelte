<script lang="ts">
	import './tailwind.css';
	import './globals.css';
	import { page } from '$app/stores';
	import { handleSession } from '@lucia-auth/sveltekit/client';

	handleSession(page);
</script>

<slot />
