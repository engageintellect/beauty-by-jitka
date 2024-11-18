<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { services, serviceCategories } from '$lib/data';
	import { animateMainStagger, animateTitle } from '$lib/animations';
	import { gsap } from 'gsap';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { slugify } from '$lib/utils';
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { goBack } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import FAQ from '$lib/components/ui/FAQ.svelte';
	import Instructions from '$lib/components/ui/Instructions.svelte';

	let service: any;
	let category: any;

	// Get the service name from the route parameters
	const params = get(page).params;

	onMount(async () => {
		// Find the service by slugified name
		service = services.filter((s) => slugify(s.category) === params.service_category);
		category = serviceCategories.find(
			(cat) => cat.name.toLowerCase() === params.service_category.replaceAll('-', ' ').toLowerCase()
		);

		console.log('stuff', service);
		console.log('category', category);

		// Wait for the DOM to be updated before running the animation
		await tick();

		// Run animations after DOM updates
		if (category) {
			animateMainStagger();
			animateTitle();
		}

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
		<meta name="description" content={service.description} />
	{/if}
</svelte:head>

<div class="flex items-center justify-between gap-4">
	<Button on:click={goBack} variant="outline" class="flex items-center gap-2">
		<Icon icon="akar-icons:arrow-left" />
		<div class="uppercase">Back</div>
	</Button>
</div>

{#if category}
	<div class="mb-10 flex flex-col gap-10 px-2 md:mb-20 md:gap-20">
		<div>
			<div class="animate-title mt-10 text-5xl font-semibold uppercase">
				{params.service_category.replaceAll('-', ' ')}
			</div>

			<div class="animate-item mt-5 text-base text-muted-foreground md:text-xl">
				{category.description}
			</div>
		</div>

		<div class="animate-item">
			<div class="text-3xl font-bold">Products</div>
			<div class="animate-item mt-5 grid gap-4 md:grid-cols-2">
				{#each service as s}
					<a data-sveltekit-preload-data class="animate-item" href={`/service/${slugify(s.name)}`}>
						<ServiceCard
							isNew={s.isNew}
							name={s.name}
							description={s.description}
							img={s.img}
							comingSoon={s.coming_soon}
						/>
					</a>
				{/each}
			</div>
		</div>

		<div class="animate-item">
			<div class="text-3xl font-bold">About</div>
			<div class="mt-5 flex flex-col gap-10 rounded-lg border bg-background p-5">
				{#each category.aboutSection as about}
					<div class="flex flex-col gap-2">
						<div class="text-2xl">{about.title}</div>
						<div class="text-muted-foreground">{about.content}</div>

						{#if about.list}
							<ul class="mt-2">
								{#each about.list as item}
									<li class="ml-10 list-disc text-muted-foreground">{item}</li>
								{/each}
							</ul>
						{/if}

						{#if about.contentDisclaimer}
							<div class="mt-5 text-sm font-thin text-muted-foreground">
								{about.contentDisclaimer}
							</div>
						{/if}

						{#if about.insuranceDisclaimer}
							<div class="mt-2 text-sm font-thin text-muted-foreground">
								{about.insuranceDisclaimer}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		{#if category.faq}
			<div>
				<div class="text-3xl font-bold">Frequently Asked Questions</div>
				<FAQ data={category.faq} />
			</div>
		{/if}

		{#if category.preTreatmentInstructions}
			<div class="animate-item">
				<div class="text-3xl font-bold">Pre Treatment Instructions</div>
				<Instructions data={category.preTreatmentInstructions} />
			</div>
		{/if}

		{#if category.postTreatmentInstructions}
			<div class="animate-item">
				<div class="text-3xl font-bold">Post Treatment Instructions</div>
				<Instructions data={category.postTreatmentInstructions} />
			</div>
		{/if}

		{#if category.choosingRight}
			<div class="animate-item">
				<div class="text-3xl font-bold">{category.choosingRight.title}</div>
				<div class="text-muted-foreground">{category.choosingRight.content}</div>
			</div>
		{/if}

		{#if category.conclusion}
			<div class="animate-item">
				<div class="text-3xl font-bold">{category.conclusion.title}</div>
				<div class="text-muted-foreground">{category.conclusion.content}</div>
			</div>
		{/if}

		{#if category.disclaimer}
			<div class="animate-item">
				<div class="text-sm font-thin text-muted-foreground">{category.disclaimer.content}</div>
			</div>
		{/if}
	</div>
{:else}
	<p class="text-center">Service not found.</p>
{/if}
