<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import { results } from '$lib/carousel-images';
</script>

<div class="mx-16 flex justify-center">
	<Carousel.Root
		opts={{
			align: 'start'
		}}
		class="w-full max-w-xs sm:max-w-full"
		plugins={[
			Autoplay({
				delay: 3000
			})
		]}
	>
		<Carousel.Content>
			{#each results as result}
				<Carousel.Item class=" sm:basis-1/2 md:basis-1/3">
					<a href="/results">
						<div class="p-1">
							<Card.Root>
								<Card.Content class="flex aspect-square h-full items-center justify-center p-2">
									<img
										src={result.image}
										alt={result.title}
										class="h-full w-full rounded-lg object-cover"
									/>
								</Card.Content>
							</Card.Root>
						</div>
					</a>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>
