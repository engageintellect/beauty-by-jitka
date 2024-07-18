<script lang="ts">
	import LocationCard from '$lib/components/ui/LocationCard.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import Icon from '@iconify/svelte';

	// Function to generate Google Maps directions URL
	function getDirectionsUrl(address: string) {
		return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
	}
</script>

<!-- LOCATIONS SECTION -->
<div class="locations-section z-0 w-full rounded-lg border p-2 shadow-lg md:p-5">
	<div class="mb-5 text-5xl font-bold uppercase">Locations</div>
	<div class="flex flex-col items-center gap-5 sm:flex-row">
		<div class="w-full">
			<div class="w-full text-xl font-thin">Corona Del Mar</div>
			<div class="w-full text-lg">2711 East Coast Highway, Suite #1 Corona Del Mar, CA 92625</div>
			<a
				href={getDirectionsUrl('2711 East Coast Highway, Suite #1 Corona Del Mar, CA 92625')}
				target="_blank"
			>
				<Button variant="outline" class="flex items-center gap-2">
					<div class="uppercase">Directions</div>
					<Icon icon="material-symbols:location-on" class="h-5 w-5" />
				</Button>
			</a>
			<div class="mt-2">
				<a
					href={getDirectionsUrl('2711 East Coast Highway, Suite #1 Corona Del Mar, CA 92625')}
					target="_blank"
				>
					<LocationCard
						center={[-117.8725, 33.6007]}
						name="2711 East Coast Highway, Suite #1 Corona Del Mar, CA 92625"
					/>
				</a>
			</div>
		</div>
		<div class="w-full">
			<div class="w-full text-xl font-thin">Long Beach</div>
			<div class="w-full text-lg">5865 E. Naples Plaza Long Beach, CA 90803</div>
			<a href={getDirectionsUrl('5865 E. Naples Plaza Long Beach, CA 90803')} target="_blank">
				<Button variant="outline" class="flex items-center gap-2">
					<div class="uppercase">Directions</div>
					<Icon icon="material-symbols:location-on" class="h-5 w-5" />
				</Button>
			</a>
			<div class="mt-2">
				<a href={getDirectionsUrl('5865 E. Naples Plaza Long Beach, CA 90803')} target="_blank">
					<LocationCard
						center={[-118.1229, 33.7562]}
						name="5865 E. Naples Plaza Long Beach, CA 90803"
					/>
				</a>
			</div>
		</div>
	</div>
</div>
