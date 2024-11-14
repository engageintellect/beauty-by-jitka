<script lang="ts">
	import { companyInfo } from '$lib/data';
	import { Button } from '$lib/components/ui/button/index.js';
	import { goBack } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { animateMainStagger, animateTitle } from '$lib/animations';
	import { onMount } from 'svelte';

	onMount(() => {
		// Add the Google Fonts stylesheet link to the document head
		const fontLink = document.createElement('link');
		fontLink.href =
			'https://fonts.googleapis.com/css2?family=Playfair+Display&family=Slabo+27px&family=Lato&family=Raleway&family=Montserrat&family=Oswald&family=Poppins&family=Source+Sans+Pro&family=PT+Sans&family=Open+Sans&display=swap';
		fontLink.rel = 'stylesheet';
		document.head.appendChild(fontLink);

		// Cherry widget script function
		(function (w: any, d: Document, s: string, o: string, f: string) {
			w[o] =
				w[o] ||
				function () {
					(w[o].q = w[o].q || []).push(arguments);
				};
			const js = d.createElement(s) as HTMLScriptElement;
			const fjs = d.getElementsByTagName(s)[0];
			js.id = o;
			js.src = f;
			js.async = true;
			fjs.parentNode?.insertBefore(js, fjs);
		})(window, document, 'script', '_hw', 'https://files.withcherry.com/widgets/widget.js');

		// Initialize the Cherry widget
		(window as any)._hw(
			'init',
			{
				debug: false,
				variables: {
					slug: 'beauty-by-jitka-an-sreynolds-medical-corporation', // Replace with your unique Cherry slug
					name: companyInfo.name // Replace with your business name
				},
				styles: {
					primaryColor: '#0a0a0a',
					secondaryColor: '#fff'
				}
			},
			['all', 'hero', 'howitworks', 'testimony', 'faq', 'calculator']
		);

		animateMainStagger();
		animateTitle();
	});
</script>

<svelte:head>
	<title>Checkout : {companyInfo.name}</title>
	<meta name="checkout-cherry" content={`${companyInfo.name} checkout.`} />
</svelte:head>

<div class="flex items-center justify-between gap-5">
	<Button href="/financing" variant="outline" class="flex items-center gap-2">
		<Icon icon="akar-icons:arrow-left" class="" />
		<div class="uppercase">Back</div>
	</Button>
</div>

<div class="animate-item relative z-0 mb-20 mt-10 overflow-hidden">
	<div id="all" class=""></div>
</div>
