<script lang="ts">
	import type { PageData } from './$types.js';
	export let data: PageData;
	import { onMount } from 'svelte';
	import AboutCard from '$lib/components/ui/AboutCard.svelte';
	import Form from '$lib/components/ui/Form.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import SkillsCard from '$lib/components/ui/SkillsCard.svelte';
	import Difference from '$lib/components/ui/Difference.svelte';
	import SocialLinks from '$lib/components/ui/SocialLinks.svelte';
	import Quote from '$lib/components/ui/Quote.svelte';
	import Locations from '$lib/components/ui/Locations.svelte';
	import { companyInfo } from '$lib/data.js';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Medical Spa & Aesthetic Treatments in Orange County & Los Angeles"
	description="Beauty by Jitka offers expert Botox, dermal fillers, semaglutide weight loss, and aesthetic treatments in Irvine and Long Beach, California. Book your consultation today."
	canonicalPath="/"
	keywords="Beauty by Jitka, Botox, Dysport, dermal fillers, Juvederm, Restylane, semaglutide weight loss, medical spa Irvine, medspa Long Beach, aesthetic treatments Orange County, cosmetic injections Los Angeles"
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Beauty by Jitka',
		url: 'https://www.beautybyjitka.com',
		telephone: '+1-949-418-4911',
		email: 'info@beautybyjitka.com',
		description:
			'Expert Botox, dermal fillers, semaglutide weight loss, and aesthetic treatments in Orange County and Los Angeles, California.',
		image: 'https://www.beautybyjitka.com/android-chrome-512x512.png',
		priceRange: '$$',
		address: [
			{
				'@type': 'PostalAddress',
				streetAddress: '4980 Barranca Pkwy, #201',
				addressLocality: 'Irvine',
				addressRegion: 'CA',
				postalCode: '92604',
				addressCountry: 'US'
			},
			{
				'@type': 'PostalAddress',
				streetAddress: '5865 E. Naples Plaza',
				addressLocality: 'Long Beach',
				addressRegion: 'CA',
				postalCode: '90803',
				addressCountry: 'US'
			}
		],
		sameAs: [
			'https://www.facebook.com/beautybyjitka',
			'https://instagram.com/beautybyjitka',
			'https://www.tiktok.com/@beautybyjitka'
		],
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '17:00'
		}
	})}</script>`}
</svelte:head>

<div class="flex flex-col gap-10 md:gap-20">
	<Hero />
	<AboutCard />
	<SkillsCard />
	<Quote />
	<Difference />
	<Locations />
	<SocialLinks />
	<div
		class="mb-5 flex h-full w-full flex-col justify-center gap-5 rounded-lg bg-background p-5 transition-all duration-500 sm:min-h-full md:mb-20 md:flex-row md:justify-center md:border md:shadow-lg"
	>
		<Form data={data.form} />
	</div>
</div>
