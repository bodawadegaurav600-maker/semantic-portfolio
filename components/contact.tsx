import { AtSign, Globe, Mail, Send } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: Globe },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: AtSign },
  { label: 'Twitter', href: 'https://twitter.com', icon: Send },
]

export function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:px-10">
      <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 md:p-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Contact
          </h2>
          <p className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Have something in mind? Let&apos;s build it together.
          </p>
          <a
            href="mailto:hello@gaurav.dev"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            hello@gaurav.dev
          </a>
        </div>

        <div className="flex flex-col justify-between gap-8 lg:col-span-5 lg:items-end">
          <ul className="flex flex-wrap gap-3 lg:justify-end">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground lg:text-right">
            © {new Date().getFullYear()} Gaurav.
            <br className="hidden lg:block" /> Designed &amp; built with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
