<script lang="ts">
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import bbjLogo from '$lib/assets/images/bbj-logo.png';
</script>

<nav class="border-b p-2">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between">
		<a href="/" class="text-2xl font-bold">
			<img src={bbjLogo} alt="Jitka" class="h-10 w-10 rounded-full border shadow-lg" />
		</a>

		<div class="flex items-center gap-2">
			<div class="text-xl font-bold">
				<a href="tel:9499935222" class="">949.993.5222</a>
			</div>

			<ThemeToggle />
		</div>
	</div>
</nav>
