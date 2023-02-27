<script>
	import FormInput from '$lib/common/components/form-input.svelte';
</script>

<h1 class="text-3xl font-bold py-4">My chores</h1>

<section>
	<form class="bg-slate-700 rounded px-8 py-8 flex flex-col gap-4" method="post">
		<h2 class="text-2xl font-semibold">New Chore</h2>
		<FormInput label="Title:" name="title" type="text" />
		<FormInput label="Description:" name="description" type="text" />
		<input hidden name="due" value={new Date().toISOString()} />
		<button
			class="bg-green-100 rounded border border-green-800 text-green-800 text-sm font-medium inline-flex items-center justify-center px-3 py-2"
			type="submit">Add chore</button
		>
	</form>
</section>
