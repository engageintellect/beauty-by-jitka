<script lang="ts">
	const currentYear = new Date().getFullYear();
	import { companyInfo } from '$lib/data';
</script>

<footer class="w-full border-t py-5">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-center">
		<a href="https://github.com/engageintellect" class="text-sm">
			&copy; {currentYear}
			{companyInfo.name}. All rights reserved.
		</a>
	</div>
</footer>
