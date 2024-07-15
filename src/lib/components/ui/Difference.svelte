<script lang="ts">
	import Image from '$lib/assets/images/results/result-29.png';
</script>

<a href="/results">
	<div class="pb-5 text-5xl">See the difference</div>
	<div class="rounded-lg bg-pink-100 p-2 shadow-lg dark:bg-pink-500 md:p-5">
		<div class="relative">
			<img src={Image} alt="Difference" class="rounded-lg shadow-lg" />
			<div class="absolute left-5 top-5 text-lg text-white drop-shadow">before</div>
			<div class="absolute right-5 top-5 text-lg text-white drop-shadow">after</div>
		</div>
	</div>
</a>
