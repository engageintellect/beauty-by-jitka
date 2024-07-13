<script lang="ts">
	import type { PageData } from './$types.js';
	export let data: PageData;
	import AboutCard from '$lib/components/ui/AboutCard.svelte';
	import AboutCard2 from '$lib/components/ui/AboutCard2.svelte';
	import Form from '$lib/components/ui/Form.svelte';
	import Hero2 from '$lib/components/ui/Hero2.svelte';
	import SkillsCard from '$lib/components/ui/SkillsCard.svelte';
	import SocialLinks from '$lib/components/ui/SocialLinks.svelte';
	import Carousel from '$lib/components/ui/Carousel.svelte';
	import logoImage from '$lib/assets/images/bbj-logo.png';
</script>

<div class="flex flex-col gap-10 lg:gap-20">
	<Hero2 />
	<!-- <AboutCard /> -->
	<AboutCard2 />
	<SocialLinks />
	<SkillsCard />
	<Carousel />
	<Form data={data.form} />
</div>
