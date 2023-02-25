<script lang="ts">
	import './tailwind.css';
	import './globals.css';
	import { page } from '$app/stores';
	import { getUser, handleSession } from '@lucia-auth/sveltekit/client';

	handleSession(page);

	const user = getUser();
</script>

<div class="container mx-auto px-4">
	<nav class="border-b">
		<ul class="flex flex-row items-center gap-4 py-4">
			<li><a href="/">Home</a></li>
			{#if $user?.id}
				<form class="ml-auto" method="post" action="/log-out">
					<button type="submit">Sign out</button>
				</form>
			{:else}
				<li class="ml-auto"><a href="/log-in">Log in</a></li>
				<li><a href="/sign-up">Sign up</a></li>
			{/if}
		</ul>
	</nav>
</div>
<div class="container mx-auto px-4">
	<slot />
</div>
