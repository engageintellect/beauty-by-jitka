<script lang="ts">
	import type { PageData } from './$types.js';
	export let data: PageData;
	import AboutCard from '$lib/components/ui/AboutCard.svelte';
	import Form from '$lib/components/ui/Form.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import SkillsCard from '$lib/components/ui/SkillsCard.svelte';
	import Difference from '$lib/components/ui/Difference.svelte';
	import SocialLinks from '$lib/components/ui/SocialLinks.svelte';
	import Quote from '$lib/components/ui/Quote.svelte';
</script>

<div class="flex flex-col gap-10 md:gap-20">
	<Hero />
	<AboutCard />
	<SkillsCard />
	<Quote />
	<Difference />
	<SocialLinks />
	<div
		class="mb-5 flex h-full w-full flex-col justify-center gap-5 rounded-lg p-5 transition-all duration-500 sm:min-h-full md:mb-20 md:flex-row md:justify-center md:border md:shadow-lg"
	>
		<Form data={data.form} />
	</div>
</div>
