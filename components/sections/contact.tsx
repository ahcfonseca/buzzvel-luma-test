import { ContactCard } from "@/components/ui/contact-card";
import { Container } from "@/components/ui/layout";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return <section id="contact" aria-labelledby="contact-title" className="section bg-background-white">
    <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,480px)_minmax(0,540px)] lg:justify-between lg:gap-15">
      <div className="flex min-w-0 flex-col gap-8 lg:gap-10">
        <div>
          <p className="type-overline text-primary-blue">Contact</p>
          <h2 id="contact-title" className="type-h3 mt-4">Get in touch</h2>
          <p className="type-body mt-4 text-text-secondary lg:text-lg lg:leading-7">Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.</p>
        </div>
        <div className="flex flex-col gap-4">
          <ContactCard title="Email" value="contact@luma.com" href="mailto:contact@luma.com" icon={{ src: "/images/contact-email.svg", width: 24, height: 24 }} />
          <ContactCard title="Response Time" value="Up to 24 hours on business days" icon={{ src: "/images/contact-clock.svg", width: 20, height: 20 }} />
        </div>
      </div>
      <ContactForm />
    </Container>
  </section>;
}
