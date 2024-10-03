<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	export let data = [
		{ index: 'q1', q: 'hello', a: 'how' },
		{ index: 'q2', q: 'there', a: 'are' },
		{ index: 'q3', q: 'world', a: 'you' }
	];
</script>

<Accordion.Root class="w-full">
	{#each data as { q, a, index }}
		<Accordion.Item value={index}>
			<Accordion.Trigger>{q}</Accordion.Trigger>
			<Accordion.Content>{a}</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
