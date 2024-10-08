<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 md:hover:border-muted-foreground/50',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
