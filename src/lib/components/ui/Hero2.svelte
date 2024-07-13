<script lang="ts">
	import jitkaImage from '$lib/assets/images/jitka.png';
	import lipInjecttionImage from '$lib/assets/images/lip-injection.png';
	import girl2Image from '$lib/assets/images/girl2.png';
	import logoImage from '$lib/assets/images/bbj-logo.png';
	import { Button } from './button/index.js';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Icon from '@iconify/svelte';

	onMount(() => {
		gsap.from('.animate-logo', {
			duration: 5,
			opacity: 0,
			ease: 'power4.out',
			delay: 0
		});

		gsap.from('.animate-title', {
			duration: 1.5,
			opacity: 0,
			ease: 'power4.out',
			delay: 0
		});
		gsap.from('.animate-photo', {
			duration: 5.5,
			opacity: 0,
			ease: 'power4.out',
			delay: 0
		});

		gsap.from('.animate-subtitle', {
			duration: 3.0,
			opacity: 0,
			ease: 'power4.out',
			delay: 0
		});

		gsap.from('.animate-hero-text', {
			duration: 10,
			opacity: 0,
			ease: 'power4.out',
			delay: 0
		});

		gsap.from('.animate-buttons', {
			duration: 1,
			y: 20,
			opacity: 0,
			ease: 'power4.out',
			delay: 0
		});
	});
</script>

<div>
	<!-- <div class="flex w-full justiy-start lg:justify-center">
		<img src={logoImage} alt="" class="h-16 w-16 rounded-full border shadow" />
	</div> -->

	<div
		class="mb-10 flex w-full flex-col gap-2 transition-all duration-300 md:my-20 md:flex-row md:gap-5 lg:my-20"
	>
		<!-- <img src={logoImage} alt="" class="h-16 w-16 rounded-full border shadow-lg" /> -->
		<div class="w-full max-w-lg">
			<!-- <div class="flex flex-col items-start gap-5 lg:flex-row lg:items-center"> -->
			<img src={logoImage} alt="" class="h-16 w-16 rounded-full border shadow-lg" />
			<div class="text-5xl font-bold">Beauty by Jitka</div>
			<!-- </div> -->
			<div class="text-2xl text-foreground/70">Seeking perfection in cosmetic dermatology.</div>
			<div>
				Beauty by Jitka offers a comprehensive range of customizable treatments tailored to align
				with your individual objectives, beauty preferences, and personal style.
			</div>

			<div class="mt-5 flex items-center gap-2">
				<a href="#booking" class="group/bookingsButton w-full md:w-fit">
					<Button size="lg" class="flex w-full items-center gap-2 text-xl">
						<div>Bookings</div>
						<Icon
							icon="ri:calendar-schedule-line"
							class="h-5 w-5 transition-transform duration-300 lg:group-hover/bookingsButton:translate-x-1"
						/>
					</Button>
				</a>

				<a href="/about" class="group/bookingsButton w-full md:w-fit">
					<Button size="lg" class="flex w-full items-center gap-2 text-xl">
						<div>About</div>
						<Icon
							icon="akar-icons:arrow-right"
							class="h-5 w-5 transition-transform duration-300 lg:group-hover/bookingsButton:translate-x-1"
						/>
					</Button>
				</a>
			</div>
		</div>

		<div class="w-full">
			<img src={lipInjecttionImage} alt="" class="rounded-lg object-cover md:h-full" />
		</div>
	</div>
</div>
