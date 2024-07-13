<script>
	import '../app.css';
	import { goto, invalidate } from '$app/navigation';
	import { ModeWatcher } from 'mode-watcher';
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import { Button } from '$lib/components/ui/button';
	import Nav from '$lib/components/ui/Nav.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';

	const { data: propsData, children } = $props();
</script>

<ModeWatcher />

<div class="flex min-h-screen flex-col">
	<Nav />
	<main class="mx-auto w-full max-w-5xl flex-grow px-2 py-5">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	html,
	body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
</style>
