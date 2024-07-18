<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';

	export let name: string;
	export let description: string;
	export let img: string;
</script>

<Card.Root class="group/serviceItem flex h-full w-full flex-col justify-between">
	<Card.Header>
		<Card.Title>{name}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<img
			src={img}
			alt={name}
			class="h-48 w-full rounded-lg object-contain transition-all duration-300 md:group-hover/serviceItem:scale-[102%]"
		/>
	</Card.Content>
	<!-- <Card.Footer class="flex justify-between">
		<Button variant="outline">Cancel</Button>
		<Button>Deploy</Button>
	</Card.Footer> -->
</Card.Root>
