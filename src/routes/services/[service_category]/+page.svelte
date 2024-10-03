<script lang="ts">
	import { onMount } from 'svelte';
	import { services, serviceCategories } from '$lib/data';
	import { gsap } from 'gsap';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { slugify } from '$lib/utils';
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { goBack } from '$lib/utils';
	import Input from '$lib/components/ui/input/input.svelte';
	import Icon from '@iconify/svelte';
	import FAQ from '$lib/components/ui/FAQ.svelte';
	import Instructions from '$lib/components/ui/Instructions.svelte';

	let searchFiler = '';

	let service: any;

	// Get the service name from the route parameters
	const params = get(page).params;

	onMount(() => {
		// Find the service by slugified name
		service = services.filter((s) => slugify(s.category) === params.service_category);

		// Add animation if needed
		gsap.from('.service-title', {
			duration: 0.5,
			opacity: 0,
			x: 20,
			ease: 'power2.out'
		});
	});
</script>

<svelte:head>
	<title>{service ? service.name : 'Service Not Found'}</title>
	{#if service}
		<meta name="description" content={`${service.description}`} />
	{/if}
</svelte:head>

<div class="flex items-center justify-between gap-4">
	<Button on:click={goBack} variant="outline" class="flex items-center gap-2">
		<Icon icon="akar-icons:arrow-left" />
		<div class="text-base uppercase">Back</div>
	</Button>

	<Input bind:value={searchFiler} placeholder="Filter Services" class="w-full max-w-lg text-base" />
</div>

<div class="px-4 md:px-0">
	<div class="mt-10 text-3xl font-semibold uppercase">
		{params.service_category.replace('-', ' ')}
	</div>

	{#each serviceCategories as category}
		{#if category.name.toLowerCase() === params.service_category.toLowerCase().replace('-', ' ')}
			<div class="mt-5 text-base">{category.description}</div>

			<div class="my-10 flex flex-col gap-4 rounded-lg border p-5">
				<div>
					<div class="text-2xl font-semibold">
						What are {params.service_category.replace('-', ' ')}?
					</div>
					<div class="text-base">{category.whatIsIt}</div>
				</div>

				<div>
					<div class="text-2xl font-semibold">
						How {params.service_category.replace('-', ' ')} work:
					</div>
					<div class="text-base">{category.howItWorks}</div>
				</div>

				<div>
					<div class="text-2xl font-semibold">What to expect?</div>
					<div class="text-base">{category.whatToExpect}</div>
				</div>
			</div>
		{/if}
	{/each}

	<div class="mt-10 text-3xl font-bold">Products</div>
	<div class="animate-results my-5 grid gap-4 md:grid-cols-2">
		{#if service}
			{#each service as s}
				<ServiceCard
					name={s.name}
					description={s.description}
					img={s.img}
					comingSoon={s.coming_soon}
				/>
			{/each}
		{:else}
			<p>Service not found.</p>
		{/if}
	</div>

	<div class="my-10">
		<div class="text-3xl font-bold">Frequently Asked Questions</div>

		{#each serviceCategories as category}
			{#if category.name.toLowerCase() === params.service_category.toLowerCase().replace('-', ' ')}
				<FAQ data={category.faq} />
			{/if}
		{/each}
	</div>

	<div class="my-10">
		<div class="text-3xl font-bold">Pre Treatment Instructions</div>

		{#each serviceCategories as category}
			{#if category.name.toLowerCase() === params.service_category.toLowerCase().replace('-', ' ')}
				<Instructions data={category.preTreatmentInstructions} />
			{/if}
		{/each}
	</div>

	<div class="my-10">
		<div class="text-3xl font-bold">Post Treatment Instructions</div>

		{#each serviceCategories as category}
			{#if category.name.toLowerCase() === params.service_category.toLowerCase().replace('-', ' ')}
				<Instructions data={category.postTreatmentInstructions} />
			{/if}
		{/each}
	</div>

	{#each serviceCategories as category}
		{#if category.name.toLowerCase() === params.service_category.toLowerCase().replace('-', ' ')}
			{#if category.choosingRight}
				<div class="my-10">
					<div class="text-3xl font-bold">
						{category.choosingRight.title}
					</div>
					<div class="text-base font-light">{category.choosingRight.content}</div>
				</div>
			{/if}
		{/if}
	{/each}

	{#each serviceCategories as category}
		{#if category.name.toLowerCase() === params.service_category.toLowerCase().replace('-', ' ')}
			{#if category.conclusion}
				<div class="my-10">
					<div class="text-3xl font-bold">
						{category.conclusion.title}
					</div>
					<div class="text-base font-light">{category.conclusion.content}</div>
				</div>
			{/if}
		{/if}
	{/each}
</div>
