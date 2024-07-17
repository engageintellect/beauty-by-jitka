<script lang="ts">
	import Icon from '@iconify/svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import { services } from '$lib/data';

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

		gsap.from('.animate-title', {
			duration: 0.5,
			opacity: 0,
			x: 50,
			ease: 'power2.out'
		});
	});
</script>

<div>
	<a href={'javascript:history.back()'}>
		<Button size="lg" variant="outline" class="flex items-center gap-2">
			<Icon icon="akar-icons:arrow-left" class="" />
			<div class="uppercase">Back</div>
		</Button>
	</a>

	<div class="animate-results my-5 grid gap-2 md:grid-cols-2 md:gap-5">
		{#each services as service}
			<a href="/contact">
				<ServiceCard name={service.name} description={service.description} img={service.img} />
			</a>
		{/each}
	</div>

	{#if showModal}
		<Modal imageSrc={modalImageSrc} onClose={closeModal} />
	{/if}
</div>
