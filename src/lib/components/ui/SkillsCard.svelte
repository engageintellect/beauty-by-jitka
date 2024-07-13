<script lang="ts">
	import jitkaImage from '$lib/assets/images/jitka.png';
	import girlImage from '$lib/assets/images/girl1.png';
	import lipInjecttionImage from '$lib/assets/images/lip-injection.png';
	import bbjLogo from '$lib/assets/images/bbj-logo.png';
	import { Button } from './button/index.js';
	import Icon from '@iconify/svelte';
</script>

<div class="flex w-full flex-col md:flex-row">
	<div class="flex w-full rounded-lg bg-pink-100 dark:bg-pink-500">
		<div class="z-20 flex w-1/2 flex-col gap-5 p-5">
			<div class="w-full text-5xl font-bold">AESTEHTICS AND BEAUTY COMBINED</div>
			<div class="text-lg font-thin">
				We execute each treatment meticulously to deliver your desired outcomes. Attain stunning
				results with tailored treatments that complement your unique beauty.
			</div>

			<div>
				<Button
					size="lg"
					class="group/resultsButton flex w-full items-center gap-2 text-lg md:w-fit"
				>
					<div>Results</div>
					<Icon
						icon="akar-icons:arrow-right"
						class="h-5 w-5 transition-transform duration-300 lg:group-hover/resultsButton:translate-x-1"
					/>
				</Button>
			</div>
		</div>

		<img src={girlImage} alt="Jitka" class="w-1/2 object-cover" />
	</div>

	<div class="w-full lg:mt-20">
		<div class="flex h-full flex-col gap-5 bg-neutral-100 p-5 dark:bg-neutral-700">
			<div class="flex flex-col gap-2">
				<div class="text-2xl font-bold">A-List Medical Professional</div>
				<div>
					Safety is the cornerstone of Beauty By Jitka. As a fully-trained professional operating in
					a state-of-the-art facility, I provide a safe, comfortable, and exceptional experience.
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<div class="text-2xl font-bold">Tailored Treatments</div>
				<div>
					I believe in dedicating myself to every treatment, customizing it in unique ways to align
					with your individual goals and beauty. With a thorough consultation process, I can design
					your treatment from scratch for a bespoke approach.
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<div class="text-2xl font-bold">Sneak a Peak</div>
				<div>
					Images often convey more than words, and results speak for themselves. Explore our full
					gallery of before-and-after photos to witness the transformations possible through our
					comprehensive suite of treatments.
				</div>
			</div>
		</div>
	</div>
</div>
