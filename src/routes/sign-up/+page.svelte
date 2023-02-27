<script>
	import FormInput from '$lib/common/components/form-input.svelte';
</script>

<main>
	<div class="container mx-auto px-4 flex flex-col items-center mt-[20vh]">
		<form class="bg-slate-700 p-8 rounded flex flex-col gap-4 w-full sm:max-w-md" method="post">
			<h1 class="text-3xl font-bold">Who are you?</h1>
			<FormInput label="Username:" name="username" type="text" />
			<FormInput label="Password:" name="password" type="password" />
			<button
				class="bg-indigo-100 rounded border border-indigo-800 text-indigo-800 text-sm font-medium inline-flex items-center justify-center px-3 py-2"
				type="submit">Sign up</button
			>
		</form>
	</div>
</main>
