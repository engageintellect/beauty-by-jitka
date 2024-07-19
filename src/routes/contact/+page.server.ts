import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "$lib/schema";
import type { Action } from '@sveltejs/kit';
import { GOOGLE_FORM_URL } from "$env/static/private";

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
      // DEV
      // 'entry.452429752': form.data.firstName,
      // 'entry.1233853460': form.data.lastName,
      // 'entry.479393351': form.data.phone,
      // 'entry.2067168320': form.data.type,
      // 'entry.766034406': form.data.location,
      // 'entry.352214429': form.data.message,
      // 'emailAddress': form.data.email,

      // PROD
      'entry.338449011': form.data.firstName,
      'entry.1660020640': form.data.lastName,
      'entry.884000418': form.data.phone,
      'entry.1985756330': form.data.type,
      'entry.470355550': form.data.location,
      'entry.2106913208': form.data.message,
      'emailAddress': form.data.email,
    });

    // Submit the form data to the Google Form
    const response = await fetch(`${GOOGLE_FORM_URL}`, {
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


    return {
      form,
      success: 'Form submitted successfully!',
    };
  }) as Action,
};
