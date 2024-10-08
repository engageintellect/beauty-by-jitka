<script lang="ts">
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import logo from '$lib/assets/images/logos/new-logo.png';
	import { Button } from '$lib/components/ui/button/index.js';
	import { PUBLIC_BOOKING_LINK } from '$env/static/public';
	import Icon from '@iconify/svelte';
	import { companyInfo } from '$lib/data';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	let navHidden = true;

	const currentRoute = derived(page, ($page) => $page.url.pathname);

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
			<a href="/" class="nav-logo text-2xl font-bold" aria-label="Home">
				<img src={logo} alt="Jitka" class="h-10 w-10 transition-all duration-300" />
			</a>

			<div class="hidden items-center gap-5 text-lg md:flex">
				<a
					href="/about"
					class={$currentRoute.startsWith('/about')
						? 'underline decoration-1 underline-offset-8'
						: ''}>about</a
				>
				<a
					href="/services"
					class={$currentRoute.startsWith('/service')
						? 'underline decoration-1 underline-offset-8'
						: ''}>services</a
				>
				<a
					href="/results"
					class={$currentRoute.startsWith('/results')
						? 'underline decoration-1 underline-offset-8'
						: ''}>gallery</a
				>
				<a
					href="/contact"
					class={$currentRoute.startsWith('/contact')
						? 'underline decoration-1 underline-offset-8'
						: ''}>contact</a
				>
			</div>
		</div>

		<div class="buttons flex items-center gap-2">
			<a href={PUBLIC_BOOKING_LINK} class="">
				<Button class="uppercase" variant="default">book appointment</Button>
			</a>

			<!--
			<a href={`sms:${companyInfo.phone}`} class="">
				<Button class="uppercase" variant="outline">text</Button>
      </a>
-->
			<ThemeToggle />
		</div>
	</div>
</nav>
