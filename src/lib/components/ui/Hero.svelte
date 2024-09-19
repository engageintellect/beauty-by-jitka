<script lang="ts">
	import heroImage from '$lib/assets/images/hero.png?enhanced';
	import { Button } from './button/index.js';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Icon from '@iconify/svelte';
	import { companyInfo } from '$lib/data';
	import { PUBLIC_BOOKING_LINK } from '$env/static/public';

	function scrollToAnchor() {
		const element = document.getElementById('anchorLink');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	let hidden = true;

	onMount(() => {
		gsap
			.timeline({
				onStart: () => {
					hidden = false;
				}
			})
			.from('.animate-logo', {
				duration: 2,
				scale: 0.5,
				opacity: 0,
				ease: 'power4.out',
				delay: 0
			})
			.from(
				'.animate-title',
				{
					duration: 2,
					opacity: 0,
					ease: 'power4.out',
					delay: 0
				},
				'-=1.75'
			)
			.from(
				'.animate-photo',
				{
					duration: 7,
					opacity: 0,
					ease: 'power4.out',
					delay: 0
				},
				'-=5'
			)
			.from(
				'.animate-hero-text',
				{
					duration: 7,
					opacity: 0,
					ease: 'power4.out',
					delay: 0
				},
				'-=6.5'
			)
			.from(
				'.animate-buttons',
				{
					duration: 0.5,
					y: -10,
					opacity: 0,
					ease: 'power4.out',
					delay: 0
				},
				'-=6'
			)
			.from(
				'.animate-down-button',
				{
					duration: 3,
					opacity: 0,
					y: -10,
					scale: 0.0,
					ease: 'power4.out',
					delay: 0
				},
				'-=5.5'
			);
	});
</script>

<div class="mb-10 md:my-5 md:mb-20">
	<div
		class={`flex w-full flex-col gap-2 rounded-lg transition-all duration-300 md:flex-row md:gap-5 md:border md:shadow-xl ${hidden ? 'opacity-0' : ''}`}
	>
		<div class="flex w-full flex-col rounded-l-lg md:max-w-lg md:p-10">
			<div class="mx-auto flex w-full max-w-sm flex-col items-start gap-5 md:max-w-md">
				<div class="animate-logo h-16 w-16">
					<Icon
						icon="material-symbols-light:syringe-outline"
						class="h-full w-full rotate-45 rounded-full border border-foreground p-2"
					/>
				</div>
				<div class="flex flex-col">
					<div
						class="animate-title text-5xl font-bold uppercase tracking-tight transition-transform lg:text-[3.75rem]"
					>
						{companyInfo.name}
					</div>
					<div class="animate-title mt-2 text-sm text-foreground/50">
						An S.Reynolds Medical Corporation
					</div>
				</div>
			</div>

			<div class="mx-auto flex w-full max-w-sm flex-col items-center justify-center md:max-w-md">
				<div
					class="animate-hero-text mt-5 w-full max-w-sm text-2xl font-thin transition-transform md:max-w-md md:text-3xl lg:max-w-md"
				>
					Offering a comprehensive range of customizable treatments tailored to align with your
					individual objectives, preferences, and personal style.
				</div>
			</div>

			<div
				class="animate-buttons mx-auto mt-10 flex w-full max-w-sm items-center gap-2 md:max-w-lg"
			>
				<a href={PUBLIC_BOOKING_LINK} class="group/bookingsButton w-full">
					<Button size="lg" class="flex w-full items-center gap-2 text-xl">
						<div class="uppercase">Booking</div>
						<Icon
							icon="teenyicons:appointments-outline"
							class="h-7 w-7 transition-transform duration-300 lg:group-hover/bookingsButton:translate-x-1"
						/>
					</Button>
				</a>

				<a href="/services" class="group/bookingsButton w-full">
					<Button size="lg" variant="outline" class="flex w-full items-center gap-2 text-xl">
						<div class="uppercase">services</div>
						<Icon
							icon="akar-icons:arrow-right"
							class="h-7 w-7 transition-transform duration-300 lg:group-hover/bookingsButton:translate-x-1"
						/>
					</Button>
				</a>
			</div>
		</div>

		<div class="animate-photo relative w-full">
			<div
				class="pointer-events-none absolute left-0 h-full w-1/3 opacity-0 md:bg-fade-left md:opacity-100"
			></div>
			<div
				class="pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-fade-down opacity-100 md:opacity-0"
			></div>
			<enhanced:img
				src={heroImage}
				alt="logo"
				class="rounded-lg object-cover md:h-full md:rounded-none md:rounded-r-lg md:border-l"
			></enhanced:img>
		</div>
	</div>
	<div
		id="anchorLink"
		class={`group/scrollDownButton mt-5 ${hidden ? 'hidden' : 'flex'} w-full justify-center md:flex`}
	>
		<button
			on:click={scrollToAnchor}
			class="transition-all duration-300 md:group-hover/scrollDownButton:scale-[102%]"
			aria-label="Scroll Down"
		>
			<Icon
				icon="material-symbols:arrow-drop-down"
				class="animate-down-button h-16 w-16 animate-pulse"
			/>
		</button>
	</div>
</div>
