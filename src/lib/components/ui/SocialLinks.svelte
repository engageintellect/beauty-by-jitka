<script lang="ts">
	import Icon from '@iconify/svelte';
	import { companyInfo } from '$lib/data';
</script>

<div
	class="animate-item my-5 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10"
>
	<a href={companyInfo.socials.facebook.url} class="flex items-center justify-center gap-2">
		<Icon icon="logos:facebook" class="h-7 w-7" />
		<div class="text-xl font-thin">{companyInfo.socials.facebook.username}</div>
	</a>

	<a href={companyInfo.socials.instagram.url} class="flex items-center justify-center gap-2">
		<Icon icon="skill-icons:instagram" class="h-7 w-7" />
		<div class="text-xl font-thin">{companyInfo.socials.instagram.username}</div>
	</a>

	<a href={companyInfo.socials.tiktok.url} class="flex items-center justify-center gap-2">
		<Icon icon="logos:tiktok-icon" class="h-7 w-7" />
		<div class="text-xl font-thin">{companyInfo.socials.tiktok.username}</div>
	</a>
</div>
