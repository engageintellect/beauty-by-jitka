<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from '$lib/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Icon from '@iconify/svelte';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<div id="booking" class="flex w-full flex-col gap-5 rounded-lg border p-5 md:flex-row">
	<div class="flex w-full items-center justify-center">
		<div class="w-full max-w-sm">
			<div class="text-7xl font-bold">Contact</div>
			<div class="text-lg font-thin">
				We are here to help you with any questions you may have. Please fill out the form below and
				we will get back to you as soon as possible.
			</div>
		</div>
	</div>

	<div class="mx-auto w-full max-w-sm">
		<form method="POST" use:enhance>
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

			<Form.Button class="group/sendButton w-full">
				<div class="flex items-center gap-2">
					<div>Send</div>
					<Icon
						icon="bi:arrow-right"
						class="h-5 w-5 transition-transform duration-300 lg:group-hover/sendButton:translate-x-1"
					/>
				</div>
			</Form.Button>
		</form>
	</div>
</div>
