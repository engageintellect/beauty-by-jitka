<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import LazyImage from '$lib/components/ui/LazyImage.svelte';
	import Icon from '@iconify/svelte';

	export let name: string;
	export let description: string;
	export let img: string;
	export let comingSoon: boolean;
	export let isNew: boolean;
</script>

<Card.Root class="group/serviceItem flex h-full w-full flex-col justify-between bg-background">
	{#if isNew}
		<div
			class="absolute -right-1 -top-1 flex items-center gap-2 rounded-lg bg-rose-400 p-2 text-sm text-white"
		>
			<div class="uppercase">new</div>
			<Icon icon="material-symbols:kid-star" class="" />
		</div>
	{/if}
	<Card.Header>
		<Card.Title>{name}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<div
			class="relative overflow-hidden rounded-b-lg border-t transition-all duration-300 md:hover:border-t-muted-foreground/50"
		>
			{#if !img}
				<div class={`flex h-72 w-full items-center justify-center`}>
					<Icon icon="eos-icons:loading" class="text-5xl text-muted-foreground" />
				</div>
			{:else}
				<img
					src={img}
					alt={name}
					class={`transition-scale h-72 w-full rounded-b-lg object-cover shadow brightness-[110%] duration-300 md:group-hover/serviceItem:scale-[102%]`}
				/>
			{/if}

			{#if comingSoon}
				<div
					class="absolute top-0 z-20 flex h-full w-full items-center justify-center rounded-lg bg-background opacity-70"
				></div>
				<div
					class="absolute top-0 z-40 flex h-full w-full items-center justify-center text-2xl font-bold uppercase"
				>
					Coming Soon...
				</div>
			{/if}
		</div>
	</Card.Content>
	<!-- <Card.Footer class="flex justify-between">
		<Button variant="outline">Cancel</Button>
		<Button>Deploy</Button>
	</Card.Footer> -->
</Card.Root>
