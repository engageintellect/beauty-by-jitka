<script lang="ts">
	import { onMount } from 'svelte';
	import { services } from '$lib/data';
	import { gsap } from 'gsap';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { animateMainStagger } from '$lib/animations';
	import { slugify } from '$lib/utils';
	import { PUBLIC_BOOKING_LINK } from '$env/static/public';
	import { Button } from '$lib/components/ui/button/index.js';
	import { goBack } from '$lib/utils';
	import Icon from '@iconify/svelte';

	let service: any;

	// Get the service name from the route parameters
	const params = get(page).params;

	onMount(() => {
		// Find the service by slugified name
		service = services.find((s) => slugify(s.name) === params.service_name);
		animateMainStagger();
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

{#if service}
	<div
		in:fade
		class="animate-item mx-auto mt-5 max-w-3xl rounded-lg px-4 md:mt-10 md:border md:p-10 md:shadow"
	>
		<div class="flex flex-col items-start justify-between gap-10 md:flex-row">
			<div class="animate-item w-full">
				<div class="text-3xl font-semibold uppercase">
					{service.name}
				</div>
				<div class="my-5 text-base text-muted-foreground">{service.description}</div>

				<div class="flex items-center gap-2">
					<Button class="w-full uppercase" href={PUBLIC_BOOKING_LINK}>book appointment</Button>
				</div>
			</div>

			<div class="animate-item flex h-full w-full justify-center">
				<img src={service.img} alt={service.name} class="object-cover" />
			</div>
		</div>
	</div>
{:else}
	<p class="text-center">Service not found.</p>
{/if}
