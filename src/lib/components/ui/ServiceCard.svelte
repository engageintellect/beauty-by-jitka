<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import LazyImage from '$lib/components/ui/LazyImage.svelte';
	import Icon from '@iconify/svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { PUBLIC_BOOKING_LINK } from '$env/static/public';
	import { slugify } from '$lib/utils';

	export let name: string;
	export let description: string;
	export let img: string;
	export let comingSoon: boolean;
	export let isNew: boolean;
</script>

<Card.Root
	class="group/serviceItem relative flex h-full w-full flex-col justify-between bg-background"
>
	{#if isNew}
		<div
			class="absolute -right-1 -top-1 flex items-center gap-2 rounded-lg bg-rose-400 p-2 text-sm text-white"
		>
			<div class="uppercase">new</div>
			<Icon icon="material-symbols:kid-star" class="" />
		</div>
	{/if}

	<Card.Header class="">
		<Card.Title>{name}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="relative">
			{#if !img}
				<div class={`flex h-72 w-full items-center justify-center`}>
					<Icon icon="eos-icons:loading" class="text-5xl text-muted-foreground" />
				</div>
			{:else}
				<LazyImage
					src={img}
					alt={name}
					imgClass={`h-52 w-full rounded-lg object-contain transition-all duration-300 md:group-hover/serviceItem:scale-[102%] p-5`}
				/>
			{/if}

			{#if comingSoon}
				<div
					class="absolute top-0 z-20 flex h-48 w-full items-center justify-center rounded-lg bg-background opacity-70"
				></div>
				<div
					class="absolute top-0 z-40 flex h-48 w-full items-center justify-center text-2xl font-bold uppercase"
				>
					Coming Soon...
				</div>
			{/if}

			<Card.Footer
				class="flex items-center justify-between gap-2 transition-all duration-500 md:gap-5 md:opacity-0 md:group-hover/serviceItem:opacity-100"
			>
				<Button href={PUBLIC_BOOKING_LINK} variant="default" class="w-full uppercase"
					>Book Appointment</Button
				>
				<Button href={`/service/${slugify(name)}`} variant="outline" class="w-full uppercase"
					>Learn More</Button
				>
			</Card.Footer>
		</div>
	</Card.Content>
	<!-- <Card.Footer class="flex justify-between">
		<Button variant="outline">Cancel</Button>
		<Button>Deploy</Button>
	</Card.Footer> -->
</Card.Root>
