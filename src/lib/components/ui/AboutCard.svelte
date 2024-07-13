<script lang="ts">
	import jitkaImage from '$lib/assets/images/jitka.png';
	import bbjLogo from '$lib/assets/images/bbj-logo.png';
	import { Button } from './button/index.js';
	import Icon from '@iconify/svelte';
</script>

<div class="flex w-full flex-col rounded-lg sm:flex-row lg:p-5">
	<div class="flex w-full items-center justify-center">
		<div class="flex w-full max-w-md flex-col gap-5 text-center lg:p-5">
			<div class="w-full text-4xl font-bold">JITKA ZAVADILOVA, RN</div>
			<div class="text-lg font-thin">
				Elevating beauty standards on social media, she stands as one of the most coveted facial
				injectors, proudly amassing millions of views.
			</div>

			<div class="flex items-center justify-center gap-5">
				<a href="/about">
					<Button
						size="lg"
						class="group/readMoreButton flex w-full items-center gap-2 text-lg md:w-fit"
						variant="outline"
					>
						<div>Read More</div>
						<Icon
							icon="akar-icons:arrow-right"
							class="h-5 w-5 transition-transform duration-300 lg:group-hover/readMoreButton:translate-x-1"
						/>
					</Button>
				</a>
			</div>
		</div>
	</div>
	<div class="flex w-full justify-end md:w-2/3">
		<img src={jitkaImage} alt="Jitka" class="w-full rounded-lg bg-pink-100" />
	</div>
</div>
