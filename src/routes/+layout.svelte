<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/ui/Nav.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';

	const { data: propsData, children } = $props();

	// START VIEW TRANSITIONS API
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// @ts-ignore <-- This is a private API so we need to ignore the TS error
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore <-- This is a private API so we need to ignore the TS error
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	// END VIEW TRANSITIONS API
</script>

<ModeWatcher />
<Toaster position="top-right" richColors={true} />

<div class="flex min-h-screen flex-col">
	<Nav />
	<main class="overflowx-x-clip mx-auto w-full max-w-5xl flex-grow px-2 py-5">
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
