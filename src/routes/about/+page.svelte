<script lang="ts">
	import jitkaImage from '$lib/assets/images/jitka.png';
	import drReynoldsImage from '$lib/assets/images/dr-reynolds.png';
	import Icon from '@iconify/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import Location from '$lib/components/ui/Location.svelte';

	function getDirectionsUrl(address: string) {
		return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
	}
</script>

<a href={'/'}>
	<Button variant="outline" class="flex items-center gap-2">
		<Icon icon="akar-icons:arrow-left" class="text-xl" />
		<div class="text-xl">Back</div>
	</Button>
</a>
<div class="mt-5 w-full">
	<!-- JITKA -->
	<div class="mb-5 text-5xl font-bold md:text-7xl">About</div>
	<div class="h-full w-full rounded-lg bg-pink-100 p-2 shadow-lg dark:bg-pink-500 md:p-5">
		<div class="w-full text-5xl font-bold md:text-7xl">JITKA ZAVADILOVA, RN</div>
		<div class="mt-2 w-full text-3xl font-thin md:mt-5 md:text-5xl">Founder</div>
		<div class="mt-2 text-3xl text-foreground/70 md:mt-5">
			Serving patients in Corona Del Mar and Long Beach, California.
		</div>

		<img
			src={jitkaImage}
			alt="Jitka Zavadilova"
			class="mt-5 w-full rounded-lg bg-pink-300 object-cover shadow-xl md:float-right md:mt-5 md:w-1/3"
		/>
		<div class="mt-5 flex flex-col md:flex-row md:items-start">
			<div class="mr-5 flex-1 text-2xl font-thin">
				<p>
					Jitka Zavadilova is a certified nurse injector and registered nurse with extensive
					credentials and experience both in the United States and Europe. Her practice brings a
					unique blend of expertise and artistry to the field of aesthetics.
				</p>

				<p class="mt-5">
					Originally from the Czech Republic, Jitka began her nursing career at the age of 18,
					gaining valuable experience on the med-surg floor for six years. Her journey has since
					brought her to the United States, where she continues to pursue her passion for enhancing
					beauty with a meticulous touch. Discover the seamless integration of European finesse and
					American precision at Beauty by Jitka.
				</p>
			</div>
		</div>

		<div class="my-5">
			<div class="flex flex-col items-center gap-2 md:flex-row">
				<a href="/results" class="w-full md:w-fit">
					<Button size="lg" variant="default" class="w-full text-xl md:w-fit"
						>Patient Gallery</Button
					>
				</a>
				<a href="/contact" class="w-full md:w-fit">
					<Button size="lg" variant="outline" class="w-full text-xl md:w-fit"
						>Schedule Appointment</Button
					>
				</a>
			</div>
		</div>
	</div>

	<!-- DOCTOR -->
	<div class="mt-20 h-full rounded-lg bg-teal-100 p-2 shadow-lg dark:bg-teal-500 md:mt-36 md:p-5">
		<div class="w-full text-5xl font-bold md:text-7xl">STEVEN REYNOLDS, MD</div>
		<div class="mt-2 w-full text-3xl font-thin md:mt-5 md:text-5xl">Medical Director</div>
		<div class="mt-2 text-3xl text-foreground/70 md:mt-5">
			Serving patients in Corona Del Mar and Long Beach, California.
		</div>

		<img
			src={drReynoldsImage}
			alt="Dr. Steven Reynolds"
			class="mt-5 w-full rounded-lg bg-teal-300 object-cover shadow-xl md:float-left md:mt-5 md:w-1/3"
		/>
		<div class="mt-5 flex flex-col md:flex-row md:items-start">
			<div class="ml-5 flex-1 text-2xl font-thin">
				<p>
					Discover unparalleled healthcare with Dr. Reynolds, a seasoned Board Certified Family
					Medicine Specialist based in vibrant Long Beach, California. With over 29 years of
					dedicated practice, Dr. Reynolds brings a wealth of experience and expertise to his
					patients.
				</p>

				<p class="mt-5">
					As the principal investigator at CNS (Collaborative Neuroscience Research) since 2010, Dr.
					Reynolds leads pioneering trials in Long Beach. He also serves as an Associate Professor
					at the esteemed University of Irvine College of Medicine, shaping future medical
					professionals.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- LOCATIONS -->
<div class="mt-20 w-full rounded-lg p-2 shadow-lg md:p-5 lg:mt-48">
	<div class="mb-5 text-5xl font-bold md:text-7xl">Locations</div>
	<div class="flex flex-col items-center gap-5 md:flex-row">
		<div class="w-full">
			<div class="w-full text-xl font-thin">Corona Del Mar</div>
			<div class="w-full text-lg">2711 East Coast Highway, Suite #1 Corona Del Mar, CA 92625</div>
			<a
				href={getDirectionsUrl('2711 East Coast Highway, Suite #1 Corona Del Mar, CA 92625')}
				target="_blank"
			>
				<Button variant="outline" class="flex items-center gap-2">
					<div>Directions</div>
					<Icon icon="material-symbols:location-on" class="h-5 w-5" />
				</Button>
			</a>
			<div class="mt-2">
				<Location
					center={[-117.8725, 33.6007]}
					name="2711 East Coast Highway, Suite #1 Corona Del Mar, CA 92625"
				/>
			</div>
		</div>
		<div class="w-full">
			<div class="w-full text-xl font-thin">Long Beach</div>
			<div class="w-full text-lg">5865 E. Naples Plaza Long Beach, CA 90803</div>
			<a href={getDirectionsUrl('5865 E. Naples Plaza Long Beach, CA 90803')} target="_blank">
				<Button variant="outline" class="flex items-center gap-2">
					<div>Directions</div>
					<Icon icon="material-symbols:location-on" class="h-5 w-5" />
				</Button>
			</a>
			<div class="mt-2">
				<Location center={[-118.1229, 33.7562]} name="5865 E. Naples Plaza Long Beach, CA 90803" />
			</div>
		</div>
	</div>
</div>

<!-- LOCATIONS -->
<div class="mb-20 mt-20 w-full p-2 md:p-5">
	<div class="mb-5 text-5xl font-bold md:text-7xl">Booking</div>
	<a href="/contact">
		<Button size="lg" variant="default" class="flex w-full items-center gap-2 text-xl md:w-fit">
			<div>Schedule a Consultation</div>
			<Icon icon="akar-icons:arrow-right" class="h-5 w-5" />
		</Button>
	</a>
</div>
