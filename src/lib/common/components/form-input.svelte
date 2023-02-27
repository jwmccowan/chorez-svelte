<script lang="ts">
	export let label: string;
	export let name: string;
	export let type: 'email' | 'password' | 'text';
</script>

<label>
	<span class="block leading-loose">{label}</span>
	<input class="bg-transparent py-2 px-3 rounded border text-sm w-full" {name} {type} />
</label>
