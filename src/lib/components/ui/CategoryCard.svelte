<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import LazyImage from '$lib/components/ui/LazyImage.svelte';

	export let name: string;
	export let description: string;
	export let img: string;
	export let comingSoon: boolean;
</script>

<Card.Root class="group/serviceItem flex h-full w-full flex-col justify-between bg-background">
	<Card.Header>
		<Card.Title>{name}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="relative rounded-b-lg border-t transition-all duration-300">
			<LazyImage
				src={img}
				alt={name}
				imgClass={`h-full max-h-96 w-full shadow brightness-[110%] rounded-b-lg object-cover`}
			/>

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
