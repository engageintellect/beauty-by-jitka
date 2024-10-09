<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	import { onDestroy, onMount, tick } from 'svelte';
	import Carousel from './Carousel.svelte';

	let gsapInstance: any;
	let ScrollTriggerInstance: any;

	const initializeAnimations = () => {
		tick();

		gsapInstance.from('.text-section', {
			duration: 1,
			opacity: 0,
			// y: 20,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.text-section',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
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

<div class="bg-background md:rounded-lg md:border md:p-5 md:shadow-lg">
	<div class="text-section flex flex-col gap-5 p-2 md:p-0">
		<div class="text-5xl font-bold uppercase">See the difference</div>
		<div class="text-2xl font-thin">
			See the stunning results of our treatments with real before and after photos from our clients.
		</div>

		<a href="/results">
			<Button variant="default" size="lg" class="w-fit uppercase">View All Before & Afters</Button>
		</a>
	</div>

	<Carousel />
</div>
