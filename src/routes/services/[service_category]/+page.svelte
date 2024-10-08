<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { services, serviceCategories } from '$lib/data';
	import { animateMainStagger } from '$lib/animations';
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
			(cat) => cat.name.toLowerCase() === params.service_category.replace('-', ' ').toLowerCase()
		);

		// Wait for the DOM to be updated before running the animation
		await tick();

		// Run animations after DOM updates
		if (category) {
			animateMainStagger();
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
			<div class="animate-item mt-10 text-5xl font-semibold uppercase">
				{params.service_category.replace('-', ' ')}
			</div>

			<div class="animate-item mt-5 text-base text-muted-foreground">
				{category.description}
			</div>
		</div>

		<div class="animate-item">
			<div class="text-3xl font-bold">Products</div>
			<div class="animate-item mt-5 grid gap-4 md:grid-cols-2">
				{#each service as s}
					<a class="animate-item" href={`/service/${slugify(s.name)}`}>
						<ServiceCard
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
			<div class="mt-5 flex flex-col gap-5 rounded-lg border bg-background p-5">
				<div>
					<div class="text-2xl font-semibold">
						What are <span class="capitalize">{params.service_category.replace('-', ' ')}</span>?
					</div>
					<div class="text-base text-muted-foreground">{category.whatIsIt}</div>
				</div>

				<div>
					<div class="text-2xl font-semibold">
						How <span class="capitalize">{params.service_category.replace('-', ' ')}</span> work:
					</div>
					<div class="text-base text-muted-foreground">{category.howItWorks}</div>
				</div>

				<div>
					<div class="text-2xl font-semibold">What to expect?</div>
					<div class="text-base text-muted-foreground">{category.whatToExpect}</div>
				</div>
			</div>
		</div>

		<div>
			<div class="text-3xl font-bold">Frequently Asked Questions</div>
			<FAQ data={category.faq} />
		</div>

		<div class="animate-item">
			<div class="text-3xl font-bold">Pre Treatment Instructions</div>
			<Instructions data={category.preTreatmentInstructions} />
		</div>

		<div class="animate-item">
			<div class="text-3xl font-bold">Post Treatment Instructions</div>
			<Instructions data={category.postTreatmentInstructions} />
		</div>

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
	</div>
{:else}
	<p class="text-center">Service not found.</p>
{/if}
