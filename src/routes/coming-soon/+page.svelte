<script lang="ts">
	export let data;
	import { companyInfo } from '$lib/data';
	import { goBack } from '$lib/utils';
	import { Button } from '$lib/components/ui/button/index.js';
	import Icon from '@iconify/svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { animateMainStagger } from '$lib/animations';
	import { onMount } from 'svelte';

	let searchFiler = '';

	onMount(() => {
		animateMainStagger();
	});
</script>

<svelte:head>
	<title>coming soon...</title>
	<meta name="description" content="Terms of Service for our website." />
</svelte:head>

<div class="flex items-center justify-between gap-5">
	<Button on:click={goBack} variant="outline" class="flex items-center gap-2">
		<Icon icon="akar-icons:arrow-left" class="" />
		<div class="uppercase">Back</div>
	</Button>
	<!--
<Input bind:value={searchFiler} placeholder="Filter Category" class="w-full max-w-lg" />
-->

	<!-- <a href={'javascript:history.back()'}>
			<Button size="lg" variant="outline" class="flex items-center gap-2">
				<Icon icon="akar-icons:arrow-left" class="" />
				<div class="uppercase">Back</div>
			</Button>
		</a> -->
</div>
<main class="animate-item mt-10 h-full md:mt-20">
	<h1 class="mb-4 text-center text-5xl font-bold">coming soon...</h1>
</main>
