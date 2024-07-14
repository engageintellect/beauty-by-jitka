<script lang="ts">
	import { MapLibre, DefaultMarker, Popup } from 'svelte-maplibre';

	export let center: [number, number];
	export let name: string;

	// Define the MarkerProps type
	type MarkerProps = {
		lngLat: [number, number];
		name: string;
	};

	const mapClasses = 'map';
	const markers: MarkerProps[] = [{ lngLat: center, name: name }];

	function openInGoogleMaps(address: string) {
		const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
		window.open(url, '_blank');
	}
</script>

<MapLibre
	style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
	class={mapClasses}
	standardControls
	zoom={10}
	{center}
>
	{#each markers as { lngLat, name }}
		<DefaultMarker {lngLat} class="shadow-lg">
			<Popup offset={[0, -10]}>
				<div class="cursor-pointer text-lg font-bold" on:click={() => openInGoogleMaps(name)}>
					{name}
				</div>
			</Popup>
		</DefaultMarker>
	{/each}
</MapLibre>

<style>
	:global(.map) {
		height: 300px;
		border-radius: 0.5rem;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
	}
	:global(.cursor-pointer) {
		cursor: pointer;
	}
</style>
