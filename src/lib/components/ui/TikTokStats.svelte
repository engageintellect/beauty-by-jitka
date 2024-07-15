<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	let stuff: any;

	const getLikes = async () => {
		const res = await fetch('/api/scrape-tiktok');
		stuff = await res.json();
		return stuff;
	};

	onMount(async () => {
		getLikes();
	});
</script>

{#if stuff}
	<div in:fade={{ duration: 500 }} class="flex w-full items-center justify-center gap-5">
		<div>
			<span class="font-bold">{stuff.followers}</span> followers, and
			<span class="font-bold"
				>{stuff.likes} likes on
				<a href="https://www.tiktok.com/@beautybyjitka?lang=en">tiktok</a></span
			>
		</div>
	</div>
{:else}
	<div class="flex w-full items-center justify-center gap-2">
		<Icon icon="svg-spinners:8-dots-rotate" class="" />
		<div class="animate-pulse">Calculating current social stats...</div>
	</div>
{/if}
