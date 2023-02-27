<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex flex-row items-center">
	<h1 class="text-3xl font-bold py-6 mr-auto">My Chores</h1>
	<a
		class="bg-green-100 rounded border border-green-800 text-green-800 text-sm font-medium inline-flex items-center justify-center px-3 py-2"
		href="/my-chores/new">Make a new chore</a
	>
</div>

<ul>
	{#each data.chores as chore}
		<li>{chore.title}</li>
	{/each}
</ul>
