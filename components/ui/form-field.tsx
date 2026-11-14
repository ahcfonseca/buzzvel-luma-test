import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type FieldDetails = { id: string; label: string; hint?: string; error?: string };
const control = "w-full rounded-control border border-line bg-background-light-yellow px-4 py-3 text-text-primary placeholder:text-text-tertiary aria-invalid:border-primary-orange";
function description(id: string, hint?: string, error?: string) {
  return [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
}
function FieldMessages({ id, hint, error }: Omit<FieldDetails, "label">) {
  return <>{hint && <p id={`${id}-hint`} className="text-text-secondary">{hint}</p>}{error && <p id={`${id}-error`} className="font-semibold text-text-primary">{error}</p>}</>;
}
export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & FieldDetails;
export function InputField({ id, label, hint, error, className, ...props }: InputFieldProps) {
  return <div className="flex flex-col gap-2"><label htmlFor={id} className="font-bold">{label}</label><input {...props} id={id} aria-invalid={error ? true : props["aria-invalid"]} aria-describedby={cn(props["aria-describedby"], description(id, hint, error)) || undefined} className={cn(control, className)} /><FieldMessages id={id} hint={hint} error={error} /></div>;
}
export type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & FieldDetails;
export function TextareaField({ id, label, hint, error, className, ...props }: TextareaFieldProps) {
  return <div className="flex flex-col gap-2"><label htmlFor={id} className="font-bold">{label}</label><textarea rows={4} {...props} id={id} aria-invalid={error ? true : props["aria-invalid"]} aria-describedby={cn(props["aria-describedby"], description(id, hint, error)) || undefined} className={cn(control, "min-h-25 resize-y", className)} /><FieldMessages id={id} hint={hint} error={error} /></div>;
}
