<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getDirectionsUrl } from '$lib/utils';

	const currentYear = new Date().getFullYear();
	import { companyInfo } from '$lib/data';

	let showFooter = false;

	onMount(() => {
		setTimeout(() => {
			showFooter = true;
		}, 500);
	});
</script>

{#if showFooter}
	<footer class="mx-auto w-full border-t bg-background py-5" in:fade={{ duration: 1000 }}>
		<!-- Mobile responsive layout -->
		<div
			class="mx-auto flex max-w-5xl flex-col justify-between space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0"
		>
			<div class="text-center lg:text-left">
				<div
					class="mx-auto flex w-full max-w-5xl items-center justify-center lg:mx-0 lg:justify-start"
				>
					<a href="#" class="text-sm">
						&copy; {currentYear}
						{companyInfo.name}. All rights reserved.
					</a>
				</div>

				<div
					class="mx-auto flex w-full items-center justify-center text-xs lg:mx-0 lg:justify-start"
				>
					An S.Reynolds Medical Corporation
				</div>
			</div>

			<div class="text-center lg:text-left">
				<h3 class="text-xl font-semibold">Locations:</h3>
				<div class="mt-2">
					<h4 class="font-semibold">Long Beach</h4>
					<a
						href={getDirectionsUrl(companyInfo.locations.losAngeles.address)}
						class="text-muted-foreground"
					>
						{companyInfo.locations.losAngeles.address}
					</a>
				</div>
				<div class="mt-2">
					<h4 class="font-semibold">Orange County</h4>

					<a
						href={getDirectionsUrl(companyInfo.locations.orangeCounty.address)}
						class="text-muted-foreground"
					>
						{companyInfo.locations.orangeCounty.address}
					</a>
				</div>
			</div>

			<!-- Business Hours -->
			<div class="text-center lg:text-left">
				<h3 class="text-xl font-semibold">Hours :</h3>
				<div class="mt-2">
					<h4 class="font-semibold">Long Beach</h4>
					<p class="text-muted-foreground">Thursday: 12:00 PM - 7:00 PM</p>
					<p class="text-muted-foreground">Saturday: 10:00 AM - 5:00 PM</p>
				</div>
				<div class="mt-2">
					<h4 class="font-semibold">Orange County</h4>
					<p class="text-muted-foreground">Monday: 9:00 AM - 5:00 PM</p>
					<p class="text-muted-foreground">Wednesday: 12:00 PM - 7:00 PM</p>
					<p class="text-muted-foreground">Friday: 9:00 AM - 2:00 PM</p>
				</div>
			</div>
		</div>
	</footer>
{/if}
