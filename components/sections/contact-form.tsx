"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { InputField, TextareaField } from "@/components/ui/form-field";
import { createContactDraft, validateContact, type ContactErrors, type ContactValues } from "@/lib/contact";

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});

  function clearError(field: keyof ContactValues) {
    setErrors(previous => ({ ...previous, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values: ContactValues = { name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""), message: String(data.get("message") ?? "") };
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    const firstError = (Object.keys(nextErrors) as (keyof ContactValues)[])[0];
    if (firstError) {
      const field = form.elements.namedItem(firstError);
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    window.location.assign(createContactDraft(values));
  }

  return <form aria-labelledby="contact-form-title" method="post" onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-6 rounded-card border border-line bg-background-white px-5 py-6 shadow-contact lg:p-10">
    <div>
      <h3 id="contact-form-title" className="type-h5 leading-8">Contact us</h3>
      <p className="mt-2 text-text-secondary">Fill out the fields and we will get in touch.</p>
    </div>
    <div className="flex flex-col gap-5">
      <InputField id="contact-name" name="name" label="Full name" placeholder="Your name" autoComplete="name" required minLength={2} maxLength={120} error={errors.name} onChange={() => clearError("name")} />
      <InputField id="contact-email" name="email" label="Email" type="email" placeholder="youremail@example.com" autoComplete="email" required maxLength={254} error={errors.email} onChange={() => clearError("email")} />
      <TextareaField id="contact-message" name="message" label="Your question" placeholder="Tell us how we can help..." rows={3} className="h-25 lg:h-30" required minLength={10} maxLength={2000} error={errors.message} onChange={() => clearError("message")} />
    </div>
    <Button type="submit" fullWidth>Send message</Button>
  </form>;
}
