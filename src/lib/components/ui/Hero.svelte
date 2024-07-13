<script lang="ts">
	import jitkaImage from '$lib/assets/images/jitka.png';
	import lipInjecttionImage from '$lib/assets/images/lip-injection.png';
	import girl2Image from '$lib/assets/images/girl2.png';
	import bbjLogo from '$lib/assets/images/bbj-logo.png';
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

<div class="my-10 flex w-full flex-col items-center sm:flex-row lg:my-20 lg:p-5">
	<div class="flex w-full flex-col lg:w-2/3">
		<div class="flex flex-1 flex-col gap-2 p-2 lg:p-5">
			<div class="sm:flex-start flex w-full flex-col gap-5 lg:flex-row lg:items-center">
				<img
					src={bbjLogo}
					alt="Jitka"
					class="animate-logo hidden h-16 w-16 rounded-full border shadow-lg"
				/>

				<div class="animate-title w-fit w-full text-5xl font-bold">Beauty by Jitka</div>
			</div>
			<div class="animate-subtitle text-2xl text-foreground/70">
				Seeking perfection in cosmetic dermatology.
			</div>
			<div class="animate-hero-text lg:text-lg">
				Beauty by Jitka offers a comprehensive range of customizable treatments tailored to align
				with your individual objectives, beauty preferences, and personal style.
			</div>

			<div class="animate-buttons mt-5 flex w-full items-center gap-5">
				<Button size="lg" class="flex w-full items-center gap-2 sm:w-fit lg:text-xl">
					<div>Booking</div>
					<Icon icon="teenyicons:appointments-outline" class="h-5 w-5" />
				</Button>
				<Button
					size="lg"
					variant="outline"
					class="flex w-full items-center gap-2 sm:w-fit lg:text-xl"
				>
					<div>About</div>

					<Icon
						icon="bi:arrow-right"
						class="h-5 w-5 transition-transform duration-300 lg:group-hover/sendButton:translate-x-1"
					/>
				</Button>
			</div>
		</div>
	</div>
	<div class="flex h-full w-full justify-end p-2 md:w-full">
		<div class="flex w-full items-stretch">
			<img
				src={lipInjecttionImage}
				alt="Jitka"
				class="animate-photo h-full rounded-lg bg-pink-100 object-cover shadow-lg lg:h-96"
			/>
		</div>
	</div>
</div>
