<script lang="ts">
	import type { PageData } from './$types.js';
	export let data: PageData;
	import Form from '$lib/components/ui/Form.svelte';
</script>

<div
	class="flex h-full w-full flex-col justify-center gap-5 rounded-lg p-5 sm:min-h-full md:flex-row md:justify-center md:border md:shadow-lg"
>
	<Form data={data.form} />
</div>
