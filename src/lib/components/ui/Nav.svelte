<script lang="ts">
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import logo from '$lib/assets/images/logos/new-logo.png';
	import { Button } from '$lib/components/ui/button/index.js';
	import { PUBLIC_BOOKING_LINK } from '$env/static/public';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	let navHidden = true;
	let menuOpen = false;

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

	function toggleMenu() {
		if (!menuOpen) {
			menuOpen = true;
			gsap.fromTo(
				'.mobile-menu',
				{ opacity: 0, y: 0 },
				{ opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
			);
			gsap.fromTo(
				'.mobile-menu-content',
				{ opacity: 0, y: 125 },
				{ opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
			);
		} else {
			gsap.to('.mobile-menu', {
				opacity: 0,
				y: 0,
				duration: 0.25,
				ease: 'power2.in',
				onComplete: () => {
					menuOpen = false;
				}
			});
		}
	}

	function navigateAndCloseMenu() {
		gsap.to('.mobile-menu', {
			opacity: 0,
			y: 0,
			duration: 0.25,
			ease: 'power2.in',
			onComplete: () => {
				menuOpen = false;
			},

			stagger: 0.1
		});
	}
</script>

<nav class="nav sticky top-0 -z-[-1] border-b bg-background p-2 {navHidden ? 'invisible' : ''}">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between">
		<div class="flex gap-5">
			<a href="/" class="nav-logo text-2xl font-bold" aria-label="Home">
				<img src={logo} alt="Jitka" class="h-10 w-10 transition-all duration-300" />
			</a>

			<div class="hidden items-center gap-5 text-lg md:flex">
				<a
					data-sveltekit-preload-data
					href="/about"
					class={$currentRoute.startsWith('/about')
						? 'underline decoration-1 underline-offset-8'
						: ''}>about</a
				>
				<a
					data-sveltekit-preload-data
					href="/services"
					class={$currentRoute.startsWith('/service')
						? 'underline decoration-1 underline-offset-8'
						: ''}>services</a
				>
				<a
					data-sveltekit-preload-data
					href="/results"
					class={$currentRoute.startsWith('/results')
						? 'underline decoration-1 underline-offset-8'
						: ''}>gallery</a
				>

				<a
					data-sveltekit-preload-data
					href="/financing"
					class={$currentRoute.startsWith('/financing')
						? 'underline decoration-1 underline-offset-8'
						: ''}>financing</a
				>

				<a
					data-sveltekit-preload-data
					href="/contact"
					class={$currentRoute.startsWith('/contact')
						? 'underline decoration-1 underline-offset-8'
						: ''}>contact</a
				>
			</div>
		</div>

		<div class="buttons flex items-center gap-2">
			<a href={PUBLIC_BOOKING_LINK}>
				<Button class="uppercase" variant="default">book appointment</Button>
			</a>

			<ThemeToggle />

			<!-- Mobile Menu Toggle Button -->
			<div class="md:hidden">
				<Button variant="ghost" size="icon" on:click={toggleMenu} aria-label="Toggle Menu">
					<Icon icon="material-symbols:menu-rounded" class="h-7 w-7" />
				</Button>
			</div>
		</div>
	</div>

	<!-- Mobile Fullscreen Dropdown Menu -->
	<div
		class="mobile-menu fixed inset-0 z-50 flex -translate-y-full transform flex-col items-start bg-background px-4 pt-10 text-2xl opacity-0"
		style="display: {menuOpen ? 'flex' : 'none'};"
	>
		<!-- Home link only visible on mobile -->

		<div class="mobile-menu-content my-10 flex w-full flex-col items-center gap-5">
			<a
				data-sveltekit-preload-data
				href="/"
				class="nav-logo text-2xl font-bold md:hidden"
				aria-label="Home"
			>
				<img src={logo} alt="Jitka" class="h-16 w-16 transition-all duration-300" />
			</a>

			<a href="/" class="md:hidden" on:click={navigateAndCloseMenu}>home</a>

			<a data-sveltekit-preload-data href="/about" class="" on:click={navigateAndCloseMenu}>about</a
			>
			<a data-sveltekit-preload-data href="/services" class="" on:click={navigateAndCloseMenu}
				>services</a
			>
			<a data-sveltekit-preload-data href="/results" class="" on:click={navigateAndCloseMenu}
				>gallery</a
			>
			<a data-sveltekit-preload-data href="/financing" class="" on:click={navigateAndCloseMenu}
				>financing</a
			>
			<a data-sveltekit-preload-data href="/contact" class="" on:click={navigateAndCloseMenu}
				>contact</a
			>
		</div>

		<Button
			class="absolute right-2 top-2"
			variant="ghost"
			size="icon"
			on:click={toggleMenu}
			aria-label="Toggle Menu"
		>
			<Icon icon="material-symbols:close-rounded" class="h-7 w-7" />
		</Button>
	</div>
</nav>
