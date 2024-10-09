<script lang="ts">
	import { companyInfo } from '$lib/data';
	import { Button } from '$lib/components/ui/button/index.js';
	import { goBack } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { animateMainStagger, animateTitle } from '$lib/animations';
	import { onMount } from 'svelte';

	onMount(() => {
		animateMainStagger();
		animateTitle();
	});
</script>

<svelte:head>
	<title>Checkout : {companyInfo.name}</title>
	<meta name="chckout" content={`${companyInfo.name} checkout.`} />
</svelte:head>
<div class="flex items-center justify-between gap-5">
	<Button on:click={goBack} variant="outline" class="flex items-center gap-2">
		<Icon icon="akar-icons:arrow-left" class="" />
		<div class="uppercase">Back</div>
	</Button>
</div>
<div class="animate-title mt-5 flex items-center gap-5 md:mt-10">
	<div class="text-5xl font-bold uppercase">financing</div>
	<!-- <Icon icon="ri:gallery-view-2" class="text-3xl md:text-5xl" /> -->
</div>
<div class="animate-item">
	<div
		class="relative mb-20 mt-5 overflow-hidden rounded-lg border pt-[231%] shadow will-change-transform md:mt-10 md:pt-[231.6%]"
	>
		<iframe
			title="affirm checkout"
			loading="lazy"
			style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
			src="https://www.canva.com/design/DAGScpEIrmE/00F5WxizeiOOc68PH995Nw/view?embed"
		>
		</iframe>
	</div>

	<a
		href="https://www.canva.com/design/DAGScpEIrmE/00F5WxizeiOOc68PH995Nw/view?utm_content=DAGScpEIrmE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
		target="_blank"
		rel="noopener"
	>
		View on Canva
	</a>
</div>
