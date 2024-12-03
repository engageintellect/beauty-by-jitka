<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import CategoryCard from '$lib/components/ui/CategoryCard.svelte';
	import { serviceCategories } from '$lib/data';
	import Input from '$lib/components/ui/input/input.svelte';
	import { companyInfo } from '$lib/data';
	import { goBack } from '$lib/utils';
	import { slugify } from '$lib/utils';
	import { animateMainStagger, animateTitle } from '$lib/animations';

	onMount(() => {
		animateMainStagger();
		animateTitle();
	});

	let searchFiler = '';
</script>

<svelte:head>
	<title>Services : {companyInfo.name}</title>
	<meta name="description" content={`${companyInfo.name} services menu.`} />
</svelte:head>

<div>
	<div class="flex items-center justify-between gap-5">
		<Button on:click={goBack} variant="outline" class="flex items-center gap-2">
			<Icon icon="akar-icons:arrow-left" class="" />
			<div class="uppercase">Back</div>
		</Button>

		<Input bind:value={searchFiler} placeholder="Filter Category" class="w-full max-w-lg" />
	</div>
	<div class="animate-title mt-5 flex items-center gap-5 md:mt-10">
		<div class="text-5xl font-bold uppercase">services</div>
		<!-- <Icon icon="ri:gallery-view-2" class="text-3xl md:text-5xl" /> -->
	</div>

	<div class="animate-item mt-5 text-xl text-muted-foreground">
		<span class="font-semibold text-foreground">Results, fast.</span>
		We specialize in provising a variety of safe, proven, and effective services to help you look and
		feel your best.
	</div>

	<div
		class="animate-results my-5 mb-20 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-2"
	>
		{#if searchFiler === ''}
			{#each serviceCategories as category}
				{#if category.img}
					<a
						data-sveltekit-preload-data
						class="animate-item"
						href={`${category.coming_soon === false ? `/services/${slugify(category.name)}` : '/coming-soon'}`}
					>
						<CategoryCard
							isNew={category.isNew}
							name={category.name}
							description={category.tagline}
							img={category.img}
							comingSoon={category.coming_soon}
						/>
					</a>
				{:else}
					<div>hi</div>
				{/if}
			{/each}
		{:else}
			{#each serviceCategories as category}
				{#if category.name.toLowerCase().includes(searchFiler.toLowerCase())}
					<a data-sveltekit-preload-data href={`/services/${slugify(category.name)}`}>
						<CategoryCard
							isNew={category.isNew}
							name={category.name}
							description={category.tagline}
							img={category.img}
							comingSoon={category.coming_soon}
						/>
					</a>
				{/if}
			{/each}
		{/if}
	</div>
</div>
