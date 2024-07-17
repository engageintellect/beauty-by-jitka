<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import { results } from '$lib/carousel-images';
	import { Button } from '$lib/components/ui/button/index.js';
	import CarouselNext from './carousel/carousel-next.svelte';
	import CarouselPrevious from './carousel/carousel-previous.svelte';

	let autoplay = Autoplay({ delay: 2000, stopOnInteraction: false });

	function handleMouseEnter() {
		autoplay.stop();
	}

	function handleMouseLeave() {
		autoplay.play();
	}
</script>

<div>
	<div class="flex justify-center">
		<Carousel.Root
			opts={{
				active: true,
				align: 'center',
				loop: true
			}}
			class="w-full"
			plugins={[autoplay]}
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
		>
			<Carousel.Content class="flex items-center p-5 md:p-0">
				{#each results as result}
					<Carousel.Item class="sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
						<a href="/results">
							<Card.Root class="transition-all duration-200 md:hover:scale-[98%]">
								<Card.Content class="flex h-full w-full items-center justify-center rounded-lg p-0">
									<img
										src={result.image}
										alt={result.title}
										class="rounded-lg shadow-lg brightness-110"
									/>
								</Card.Content>
							</Card.Root>
						</a>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</div>
