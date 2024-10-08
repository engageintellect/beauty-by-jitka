<script lang="ts">
	import Icon from '@iconify/svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import CategoryCard from '$lib/components/ui/CategoryCard.svelte';
	import { services, serviceCategories } from '$lib/data';
	import Input from '$lib/components/ui/input/input.svelte';
	import { companyInfo } from '$lib/data';
	import { goBack } from '$lib/utils';
	import { PUBLIC_BOOKING_LINK } from '$env/static/public';
	import { slugify } from '$lib/utils';
	import { animateMainStagger } from '$lib/animations';
	import Alert from '$lib/components/ui/Alert.svelte';

	let showModal = false;
	let modalImageSrc = '';

	function openModal(src: any) {
		modalImageSrc = src;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	onMount(() => {
		const images = document.querySelectorAll('.animate-results');
		animateMainStagger();
		gsap.from(images, {
			duration: 1,
			opacity: 0,
			y: 20,
			stagger: 0.1,
			ease: 'power2.out'
		});

		gsap.from('.animate-title', {
			duration: 0.5,
			opacity: 0,
			x: 20,
			ease: 'power2.out'
		});
	});

	let searchFiler = '';
</script>

<svelte:head>
	<title>Services : {companyInfo.name}</title>
	<meta name="description" content={`${companyInfo.name} services menu.`} />
</svelte:head>

<div>
	<div class="flex items-center justify-between gap-5">
		<Button on:click={goBack} variant="outline" class="flex items-center gap-2">
			<Icon icon="akar-icons:arrow-left" class="" />
			<div class="uppercase">Back</div>
		</Button>

		<Input bind:value={searchFiler} placeholder="Filter Category" class="w-full max-w-lg" />

		<!-- <a href={'javascript:history.back()'}>
			<Button size="lg" variant="outline" class="flex items-center gap-2">
				<Icon icon="akar-icons:arrow-left" class="" />
				<div class="uppercase">Back</div>
			</Button>
		</a> -->
	</div>

	<div
		class="animate-results my-5 mb-20 grid gap-2 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3"
	>
		{#if searchFiler === ''}
			{#each serviceCategories as category}
				<a
					class="animate-item"
					href={`${category.coming_soon === false ? `/services/${slugify(category.name)}` : '/coming-soon'}`}
				>
					<CategoryCard
						name={category.name}
						description={category.tagline}
						img={category.img}
						comingSoon={category.coming_soon}
					/>
				</a>
			{/each}
		{:else}
			{#each serviceCategories as category}
				{#if category.name.toLowerCase().includes(searchFiler.toLowerCase())}
					<a href={`/services/${slugify(category.name)}`}>
						<CategoryCard
							name={category.name}
							description={category.tagline}
							img={category.img}
							comingSoon={category.coming_soon}
						/>
					</a>
				{/if}
			{/each}
		{/if}
	</div>

	{#if showModal}
		<Modal imageSrc={modalImageSrc} onClose={closeModal} />
	{/if}
</div>
