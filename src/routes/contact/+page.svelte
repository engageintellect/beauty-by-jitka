<script lang="ts">
	import type { PageData } from './$types.js';
	import Form from '$lib/components/ui/Form.svelte';
	import { companyInfo } from '$lib/data.js';
	import Seo from '$lib/components/Seo.svelte';
	export let data: PageData;
</script>

<Seo
	title="Contact Us"
	description="Get in touch with Beauty by Jitka. Schedule a consultation, ask about treatments, or contact our Irvine and Long Beach locations. Call (949) 418-4911 or fill out our form."
	canonicalPath="/contact"
	keywords="contact Beauty by Jitka, medspa consultation, book appointment, Irvine medspa, Long Beach medspa"
/>
<div
	class="flex h-full w-full flex-col justify-center gap-5 rounded-lg bg-background p-5 sm:min-h-full md:flex-row md:justify-center md:border md:shadow-lg"
>
	<Form data={data.form} />
</div>
