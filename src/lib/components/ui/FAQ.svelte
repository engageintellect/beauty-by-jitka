<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	export let data: any;
</script>

<Accordion.Root class="w-full">
	{#each data as { q, a, index }}
		<Accordion.Item value={index}>
			<Accordion.Trigger>{q}</Accordion.Trigger>

			{#if a.answerHeading}
				<Accordion.Content class="text-muted-foreground">
					<div>{a.answerHeading}</div>
					{#if a.answerList}
						<ul class="ml-10 mt-2 list-disc">
							{#each a.answerList as item}
								<li class="">{item}</li>
							{/each}
						</ul>
					{/if}
				</Accordion.Content>
			{:else}
				<Accordion.Content class="text-muted-foreground">{a}</Accordion.Content>
			{/if}
		</Accordion.Item>
	{/each}
</Accordion.Root>
