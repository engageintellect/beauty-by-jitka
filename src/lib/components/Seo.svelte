<script lang="ts">
	export let title: string;
	export let description: string;
	export let canonicalPath: string = '/';
	export let keywords: string = '';
	export let ogImage: string = '/android-chrome-512x512.png';
	export let ogType: string = 'website';

	const baseUrl = 'https://www.beautybyjitka.com';
	$: canonicalUrl = `${baseUrl}${canonicalPath}`;
	$: ogImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
	$: fullTitle =
		canonicalPath === '/' ? `${title} | Beauty by Jitka` : `${title} | Beauty by Jitka`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content={ogType} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:site_name" content="Beauty by Jitka" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />
</svelte:head>
