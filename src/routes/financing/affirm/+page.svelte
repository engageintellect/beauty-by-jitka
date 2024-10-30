<script lang="ts">
	import { companyInfo } from '$lib/data';
	import { Button } from '$lib/components/ui/button/index.js';
	import Icon from '@iconify/svelte';
	import { animateMainStagger } from '$lib/animations';
	import { onMount } from 'svelte';

	onMount(() => {
		animateMainStagger();
	});
</script>

<svelte:head>
	<title>Checkout : {companyInfo.name}</title>
	<meta name="checkout-affirm" content={`${companyInfo.name} checkout.`} />
</svelte:head>
<div class="flex items-center justify-between gap-5">
	<Button href="/financing" variant="outline" class="flex items-center gap-2">
		<Icon icon="akar-icons:arrow-left" class="" />
		<div class="uppercase">Back</div>
	</Button>
</div>
<div class="">
	<div
		class="animate-item relative mb-20 mt-5 overflow-hidden rounded-lg border pt-[231%] shadow will-change-transform md:mt-10 md:pt-[231.6%]"
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
