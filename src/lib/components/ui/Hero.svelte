<script lang="ts">
	import lipInjecttionImage from '$lib/assets/images/lip-injection.png';
	import logoImage from '$lib/assets/images/bbj-logo.png';
	import { Button } from './button/index.js';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Icon from '@iconify/svelte';

	onMount(() => {
		gsap.from('.animate-logo', {
			duration: 2,
			x: '100%',
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
			duration: 7,
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
			duration: 7,
			opacity: 0,
			ease: 'power4.out',
			delay: 0
		});

		gsap.from('.animate-buttons', {
			duration: 1,
			y: -100,
			opacity: 0,
			ease: 'power4.out',
			delay: 0
		});
	});
</script>

<div>
	<!-- <div class="flex w-full justiy-start lg:justify-center">
		<img src={logoImage} alt="logo" class="h-16 w-16 rounded-full border shadow" />
	</div> -->

	<div
		class="mb-10 flex w-full flex-col gap-2 rounded-lg transition-all duration-300 md:my-20 md:flex-row md:gap-5 md:border md:shadow-lg lg:my-20"
	>
		<!-- <img src={logoImage} alt="" class="h-16 w-16 rounded-full border shadow-lg" /> -->
		<div class="flex w-full max-w-lg flex-col gap-2 md:gap-5 md:p-5">
			<!-- <div class="flex flex-col items-start gap-5 lg:flex-row lg:items-center"> -->
			<img
				src={logoImage}
				alt="logo"
				class="animate-logo h-16 w-16 rounded-full border shadow-lg"
			/>
			<div class="animate-title text-5xl font-bold lg:text-7xl">Beauty by Jitka</div>
			<!-- </div> -->

			<div class="animate-subtitle text-2xl text-foreground/70 md:text-3xl">
				Transform Your Look with Confidence and Precision.
			</div>

			<div class="animate-hero-text text-xl font-thin text-foreground/70 md:text-2xl">
				Offering a comprehensive range of customizable treatments tailored to align with your
				individual objectives, beauty preferences, and personal style.
			</div>

			<div class="animate-buttons mt-5 flex items-center gap-2">
				<a href="/contact" class="group/bookingsButton w-full">
					<Button size="lg" class="flex w-full items-center gap-2 text-2xl">
						<div>Booking</div>
						<Icon
							icon="ri:calendar-schedule-line"
							class="h-5 w-5 transition-transform duration-300 lg:group-hover/bookingsButton:translate-x-1"
						/>
					</Button>
				</a>

				<a href="/about" class="group/bookingsButton w-full">
					<Button size="lg" variant="outline" class="flex w-full items-center gap-2 text-2xl">
						<div>About</div>
						<Icon
							icon="akar-icons:arrow-right"
							class="h-5 w-5 transition-transform duration-300 lg:group-hover/bookingsButton:translate-x-1"
						/>
					</Button>
				</a>
			</div>
		</div>

		<div class="animate-photo relative w-full">
			<div
				class="md:bg-fade-left pointer-events-none absolute left-0 h-full w-1/3 opacity-0 md:opacity-100"
			></div>
			<div
				class="bg-fade-down pointer-events-none absolute bottom-0 left-0 h-1/3 w-full opacity-100 md:opacity-0"
			></div>
			<img
				src={lipInjecttionImage}
				alt="logo"
				class="rounded-lg object-cover md:h-full md:rounded-none md:rounded-r-lg md:border-l"
			/>
		</div>
	</div>
</div>
