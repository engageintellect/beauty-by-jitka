<script lang="ts">
	import LocationCard from '$lib/components/ui/LocationCard.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import Icon from '@iconify/svelte';
	import { companyInfo } from '$lib/data';
	import { getDirectionsUrl } from '$lib/utils';

	import { onDestroy, onMount, tick } from 'svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';

	let gsapInstance: any;
	let ScrollTriggerInstance: any;

	const initializeAnimations = () => {
		tick();

		const isLargeScreen = window.matchMedia('(min-width: 768px)').matches;

		if (isLargeScreen) {
			gsapInstance.from('.animate-locations', {
				duration: 1,
				opacity: 0,
				y: 20,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.animate-locations',
					start: 'top 90%',
					toggleActions: 'play none none none'
				}
			});
		} else {
			gsapInstance.from('.animate-locations', {
				duration: 1,
				opacity: 0,
				y: 20,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.animate-locations',
					start: 'top 90%',
					toggleActions: 'play none none none'
				}
			});
		}
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			import('gsap').then(({ gsap }) => {
				import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
					gsap.registerPlugin(ScrollTrigger);
					gsapInstance = gsap;
					ScrollTriggerInstance = ScrollTrigger;
					initializeAnimations();
					ScrollTriggerInstance.refresh();
				});
			});
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined' && ScrollTriggerInstance) {
			ScrollTriggerInstance.getAll().forEach((trigger: any) => trigger.kill());
		}
	});
</script>

<!-- LOCATIONS SECTION -->
<div class="animate-locations z-0 w-full rounded-lg bg-background p-2 p-5 shadow-lg md:border">
	<div class="mb-5 text-5xl font-bold uppercase">Locations</div>
	<div class="flex flex-col items-center gap-5 sm:flex-row">
		<div class="w-full">
			<div class="w-full text-xl font-thin">Orange County</div>
			<div class="w-full text-lg">{companyInfo.locations.orangeCounty.address}</div>
			<a href={getDirectionsUrl(companyInfo.locations.orangeCounty.address)} target="_blank">
				<Button variant="outline" class="flex items-center gap-2">
					<div class="uppercase">Directions</div>
					<Icon icon="material-symbols:location-on" class="h-5 w-5" />
				</Button>
			</a>
			<div class="mt-2">
				<a href={getDirectionsUrl(companyInfo.locations.orangeCounty.address)} target="_blank">
					<LocationCard
						center={[-117.8265, 33.6846]}
						name={companyInfo.locations.orangeCounty.address}
					/>
				</a>
			</div>
		</div>
		<div class="w-full">
			<div class="w-full text-xl font-thin">Long Beach</div>
			<div class="w-full text-lg">{companyInfo.locations.losAngeles.address}</div>
			<a href={getDirectionsUrl(companyInfo.locations.losAngeles.address)} target="_blank">
				<Button variant="outline" class="flex items-center gap-2">
					<div class="uppercase">Directions</div>
					<Icon icon="material-symbols:location-on" class="h-5 w-5" />
				</Button>
			</a>
			<div class="mt-2">
				<a href={getDirectionsUrl(companyInfo.locations.losAngeles.address)} target="_blank">
					<LocationCard
						center={[-118.1229, 33.7562]}
						name={companyInfo.locations.losAngeles.address}
					/>
				</a>
			</div>
		</div>
	</div>
</div>
