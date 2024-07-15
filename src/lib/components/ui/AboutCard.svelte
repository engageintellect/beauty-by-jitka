<script lang="ts">
	import jitkaImage from '$lib/assets/images/jitka.png';
	import bbjLogo from '$lib/assets/images/bbj-logo.png';
	import { Button } from './button/index.js';
	import Icon from '@iconify/svelte';
	import TikTokStats from './TikTokStats.svelte';
</script>

<div
	class="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 rounded-lg transition-all duration-300 md:flex-row md:gap-0"
>
	<div class="flex w-full justify-center">
		<div class="flex w-full max-w-md flex-col gap-5 text-center lg:p-5">
			<div class="w-full text-4xl font-bold">JITKA ZAVADILOVA, RN</div>
			<div class="text-xl font-thin md:text-2xl">
				Renowned on social media for her exceptional skills, she has become one of the most
				sought-after facial injectors, attracting millions of views.
			</div>
			<div class="flex items-center justify-center gap-5">
				<a href="/about">
					<Button
						size="lg"
						class="group/readMoreButton flex w-full items-center gap-2 text-xl md:w-fit"
						variant="ghost"
					>
						<div>Read More</div>
						<Icon
							icon="akar-icons:arrow-right"
							class="h-5 w-5 transition-transform duration-300 lg:group-hover/readMoreButton:translate-x-1"
						/>
					</Button>
				</a>
			</div>
			<TikTokStats />
		</div>
	</div>

	<div class="relative flex w-full justify-end">
		<div class="relative mx-auto h-80 w-64 md:h-[450px] md:w-2/3">
			<img
				src={jitkaImage}
				alt="Jitka"
				class="h-full w-full rounded-full bg-pink-200 object-cover object-top transition-all duration-300 md:rounded-lg md:bg-pink-100"
			/>
			<div class="md:bg-fade-down pointer-events-none absolute bottom-0 left-0 h-1/3 w-full"></div>
		</div>
	</div>
</div>
