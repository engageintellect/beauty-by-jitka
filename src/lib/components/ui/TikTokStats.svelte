<script lang="ts">
	import { onMount } from 'svelte';
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
	<p>followers: {stuff?.counters[0]}</p>
	<p>likes: {stuff?.counters[1]}</p>
{:else}
	<Icon icon="svg-spinners:8-dots-rotate" class="" />
{/if}
