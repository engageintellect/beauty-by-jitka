<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from '$lib/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Icon from '@iconify/svelte';
	import { enhance, applyAction } from '$app/forms';
	import { toast } from 'svelte-sonner';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData } = form;

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const formElement = event.currentTarget as HTMLFormElement;
		const data = new FormData(formElement);

		const response = await fetch(formElement.action, {
			method: 'POST',
			body: data
		});

		const result = await response.json();

		if (result.type === 'success') {
			toast.success('Form Submitted Successfully!', {
				description: "We'll get back to you as soon as possible."
			});

			await invalidateAll();
		} else {
			toast.error('Failed to Submit Form', {
				description: 'Please check your input and try again.',
				action: {
					label: 'Undo',
					onClick: () => invalidateAll()
				}
			});
		}

		applyAction(result);
	}
</script>

<div class="flex w-full items-center justify-center">
	<div class="w-full max-w-sm">
		<div class="flex flex-col items-start gap-2">
			<div class="flex items-center gap-5">
				<div class="text-7xl font-bold">Let's Chat</div>
				<Icon icon="material-symbols:android-chat" class="text-7xl" />
			</div>
			<div class="text-lg font-thin">
				If you have a question, or would like to schedule an appointment, please fill out the form,
				we'll get back to you soon. Or, give us a call at <span class="text-2xl font-bold"
					><a href="tel:9499935222" class="ml-2">949.993.5222</a></span
				>.
			</div>
		</div>
	</div>
</div>

<div class="mx-auto w-full max-w-sm">
	<form method="POST" use:enhance on:submit|preventDefault={handleSubmit}>
		<Form.Field {form} name="name">
			<Form.Control let:attrs>
				<Form.Label>Name</Form.Label>
				<Input {...attrs} bind:value={$formData.name} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="phone">
			<Form.Control let:attrs>
				<Form.Label>Phone</Form.Label>
				<Input {...attrs} bind:value={$formData.phone} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="message">
			<Form.Control let:attrs>
				<Form.Label>Message</Form.Label>
				<Textarea {...attrs} bind:value={$formData.message} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button size="lg" class="group/sendButton w-full">
			<div class="flex items-center gap-2 text-xl">
				<div>Send</div>
				<Icon
					icon="bi:arrow-right"
					class="h-5 w-5 transition-transform duration-300 lg:group-hover/sendButton:translate-x-1"
				/>
			</div>
		</Form.Button>
	</form>
</div>
