<script lang="ts">
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import bbjLogo from '$lib/assets/images/bbj-logo.png';
	import { Button } from '$lib/components/ui/button/index.js';
	import Icon from '@iconify/svelte';
	import { companyInfo } from '$lib/data';
</script>

<nav class="sticky top-0 -z-[-1] border-b bg-background p-2">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between">
		<a href="/" class="rotate-90 text-2xl font-bold">
			<Icon
				icon="pepicons-pencil:syringe"
				class="h-10 w-10 rotate-45 rounded-full border border-foreground p-2 md:h-12 md:w-12"
			/>
			<!-- <img
				src={bbjLogo}
				alt="Jitka"
				class="h-10 w-10 rounded-full border transition-all duration-300 hover:shadow md:h-12 md:w-12"
			/> -->
		</a>

		<div class="flex items-center gap-2">
			<a href="/contact" class="hidden md:flex">
				<Button class="uppercase" variant="default">free consultation</Button>
			</a>
			<a href={`tel:${companyInfo.phone}`} class="">
				<Button class="uppercase" variant="outline">call</Button>
			</a>
			<a href={`sms:${companyInfo.phone}`} class="">
				<Button class="uppercase" variant="outline">text</Button>
			</a>
			<ThemeToggle />
		</div>
	</div>
</nav>
