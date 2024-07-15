<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	let stuff: any;

	const getLikes = async () => {
		const res = await fetch('/api/scrape');
		stuff = await res.json();
		return stuff;
	};

	onMount(async () => {
		getLikes();
	});
</script>

{#if stuff?.counters}
	<div in:fade={{ duration: 500 }} class="flex w-full items-center justify-center gap-5">
		<div>
			<span class="font-bold">{stuff?.counters[0]}</span> followers, and
			<span class="font-bold"
				>{stuff?.counters[1]} likes on
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
