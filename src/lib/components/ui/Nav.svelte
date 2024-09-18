<script lang="ts">
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import bbjLogo from '$lib/assets/images/bbj-logo.png';
	import { Button } from '$lib/components/ui/button/index.js';
	import { PUBLIC_BOOKING_LINK } from '$env/static/public';
	import Icon from '@iconify/svelte';
	import { companyInfo } from '$lib/data';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let navHidden = true;

	onMount(() => {
		gsap
			.timeline({
				onStart: () => {
					navHidden = false;
				}
			})
			.from('.nav', { opacity: 0, duration: 0.75 })
			.from('.nav-logo', { opacity: 0, duration: 1 }, '-=0.5')
			.from('.buttons', { opacity: 0, duration: 2 }, '-=1');
	});
</script>

<nav class="nav sticky top-0 -z-[-1] border-b bg-background p-2 {navHidden ? 'invisible' : ''}">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between">
		<div class="flex gap-5">
			<a href="/" class="nav-logo rotate-90 text-2xl font-bold" aria-label="Home">
				<Icon
					icon="pepicons-pencil:syringe"
					class="h-10 w-10 rotate-45 rounded-full border border-foreground p-2"
				/>
				<!-- <img
					src={bbjLogo}
					alt="Jitka"
					class="h-10 w-10 rounded-full border transition-all duration-300 hover:shadow md:h-12 md:w-12"
			/> -->
			</a>

			<div class="hidden items-center gap-5 text-lg md:flex">
				<a href="/about">about</a>
				<a href="/services">services</a>
				<a href="/results">gallery</a>
			</div>
		</div>

		<div class="buttons flex items-center gap-2">
			<a href={PUBLIC_BOOKING_LINK} class="">
				<Button class="uppercase" variant="default">book appointment</Button>
			</a>
			<!-- <a href={`tel:${companyInfo.phone}`} class="hidden md:flex">
				<Button class="uppercase" variant="outline">call</Button>
			</a> -->
			<a href={`sms:${companyInfo.phone}`} class="">
				<Button class="uppercase" variant="outline">text</Button>
			</a>
			<ThemeToggle />
		</div>
	</div>
</nav>
