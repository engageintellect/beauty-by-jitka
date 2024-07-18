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
	import Logo from '$lib/assets/images/bbj-logo.png';
	import { onDestroy, onMount, tick } from 'svelte';

	export let data: SuperValidated<Infer<FormSchema>>;
	let formAction = '';
	let isSubmitting = false;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData } = form;

	onMount(() => {
		formAction = window.location.pathname; // Ensure form action is set to the current path
	});

	let gsapInstance: any;
	let ScrollTriggerInstance: any;

	const initializeAnimations = async () => {
		await tick(); // Wait for the DOM to update

		gsapInstance.from('.contact-header', {
			duration: 1,
			opacity: 0,
			y: -10,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.contact-header',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsapInstance.from('.contact-form', {
			duration: 1,
			opacity: 0,
			y: 10,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.contact-form',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsapInstance.from('.contact-title-icon', {
			duration: 1,
			opacity: 0,
			y: -10,
			scale: 0.8,
			ease: 'power2.out'
		});
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			import('gsap').then(({ gsap }) => {
				import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
					gsap.registerPlugin(ScrollTrigger);
					gsapInstance = gsap;
					ScrollTriggerInstance = ScrollTrigger;
					initializeAnimations();
					ScrollTriggerInstance.refresh();
				});
			});
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined' && ScrollTriggerInstance) {
			ScrollTriggerInstance.getAll().forEach((trigger: any) => trigger.kill());
		}
	});
</script>

<div class="flex w-full items-center justify-center">
	<div class="w-full max-w-md">
		<div class="contact-header flex flex-col items-start gap-2">
			<!-- <img
				src={Logo}
				alt="Jitka"
				class="mb-5 hidden h-16 w-16 rounded-full border shadow-lg md:mx-auto md:flex"
			/> -->
			<div class="flex items-center gap-5">
				<div class="text-5xl font-bold uppercase md:text-7xl">Contact</div>
				<Icon
					icon="material-symbols:android-chat"
					class="contact-title-icon text-5xl md:text-7xl"
				/>
			</div>
			<div class="text-2xl font-thin">
				Have a question, or would like to schedule a consultation or appointment? Fill out the form,
				we'll get back to you soon.
			</div>
			<div class="text-xl font-thin">
				Or, give us a call at <span class="text-2xl font-bold"
					><a href="tel:9499935222" class="ml-2">949.993.5222</a></span
				>.
			</div>
		</div>
	</div>
</div>

<div class="mx-auto w-full max-w-md">
	<form
		method="POST"
		action={formAction}
		class="contact-form"
		use:enhance={({ cancel }) => {
			if (isSubmitting) return cancel(); // Prevent multiple submissions
			isSubmitting = true;

			return async ({ result, update }) => {
				if (result.type === 'success') {
					toast.success('Form Submitted Successfully!', {
						description: "We'll get back to you as soon as possible."
					});
				} else {
					toast.error('Failed to Submit Form', {
						description: 'Please check your input and try again.',
						action: {
							label: 'Undo',
							onClick: () => invalidateAll()
						}
					});
				}

				await update();
				isSubmitting = false;
			};
		}}
	>
		<div class="mb-2 flex items-center gap-5">
			<Form.Field {form} name="firstName" class="w-full">
				<Form.Control let:attrs>
					<Form.Label>First Name</Form.Label>
					<Input {...attrs} bind:value={$formData.firstName} />
				</Form.Control>
			</Form.Field>

			<Form.Field {form} name="lastName" class="w-full">
				<Form.Control let:attrs>
					<Form.Label>Last Name</Form.Label>
					<Input {...attrs} bind:value={$formData.lastName} />
				</Form.Control>
			</Form.Field>
		</div>

		<div class="flex items-center gap-5">
			<Form.Field {form} name="firstName" class="w-full">
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="lastName" class="w-full">
				<Form.FieldErrors />
			</Form.Field>
		</div>

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
				<div class="uppercase">Send</div>
				<Icon
					icon="bi:arrow-right"
					class="h-5 w-5 transition-transform duration-300 lg:group-hover/sendButton:translate-x-1"
				/>
			</div>
		</Form.Button>

		<p class="mt-2 text-center text-sm text-muted-foreground">
			By clicking continue, you agree to our
			<a href="/terms" class="underline underline-offset-4 hover:text-primary">
				Terms of Service
			</a>
			and
			<a href="/privacy" class="underline underline-offset-4 hover:text-primary">
				Privacy Policy
			</a>
			.
		</p>
	</form>
</div>
