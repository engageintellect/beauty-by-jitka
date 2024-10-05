<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	export let data = [
		{ index: '1', heading: 'Hello', context: 'How' },
		{ index: '2', heading: 'There', context: 'Are' },
		{ index: '3', heading: 'World', context: 'You' }
	];
</script>

<div class="my-5 flex flex-col gap-2 rounded-lg border">
	{#each data as { heading, context, index }}
		<div class="flex flex-col gap-1 border-b p-2">
			<div class="text-xl font-semibold">{heading}</div>
			<div class="text-muted-foreground">{context}</div>
		</div>
	{/each}
</div>
