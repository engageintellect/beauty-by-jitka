import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "$lib/schema";
import type { Action } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  default: (async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    // Prepare the payload for the Google Form

    const payload = new URLSearchParams({
      'entry.452429752': form.data.firstName,
      'entry.1233853460': form.data.lastName,
      'emailAddress': form.data.email,
      'entry.479393351': form.data.phone,
      'entry.352214429': form.data.message,
    });

    // Submit the form data to the Google Form
    const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeXEPyQ13TyKZ1eMjHA_aZotlNUUKBgHnH3cd1pZBEox1qXoA/formResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload.toString(),
    });

    // Check if the form submission was successful
    if (!response.ok) {
      return fail(500, {
        form,
        error: 'Failed to submit the form. Please try again later.',
      });
    }


      console.log('RESPONSE FROM /CONTACT');
    return {
      form,
      success: 'Form submitted successfully!',
    };
  }) as Action,
};
