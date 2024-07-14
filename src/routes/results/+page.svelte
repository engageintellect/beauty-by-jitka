<script lang="ts">
	import Icon from '@iconify/svelte';
	import { results } from '$lib/carousel-images';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { Button } from '$lib/components/ui/button/index.js';

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
		gsap.from(images, {
			duration: 1,
			opacity: 0,
			y: 50,
			stagger: 0.1,
			ease: 'power2.out'
		});
	});
</script>

<div>
	<a href={'/'}>
		<Button variant="outline" class="flex items-center gap-2">
			<Icon icon="akar-icons:arrow-left" class="text-xl" />
			<div class="text-xl">Back</div>
		</Button>
	</a>
	<div class="mt-5 flex items-center gap-5">
		<div class="text-5xl font-bold md:text-7xl">Gallery</div>
		<Icon icon="material-symbols:gallery-thumbnail-outline" class="text-5xl md:text-7xl" />
	</div>

	<div class="animate-results my-5 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
		{#each results as result}
			<div class="animate-results group">
				<button
					class="h-full w-full cursor-pointer rounded-lg object-cover shadow-lg transition-all duration-300 md:group-hover:-translate-y-[1px] md:group-hover:saturate-[110%]"
					on:click={() => openModal(result.image)}
					on:keydown={(e) => e.key === 'Enter' && openModal(result.image)}
				>
					<img src={result.image} alt="" class="h-full w-full rounded-lg object-cover" />
				</button>
			</div>
		{/each}
	</div>

	{#if showModal}
		<Modal imageSrc={modalImageSrc} onClose={closeModal} />
	{/if}
</div>
