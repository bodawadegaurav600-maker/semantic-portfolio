import { ArrowUpRight } from 'lucide-react'

const roles = [
  {
    period: '2023 — Now',
    title: 'Senior Design Engineer',
    company: 'Northbeam',
    description:
      'Lead the design systems guild, building the component library and marketing site that power the entire product surface.',
    tags: ['React', 'TypeScript', 'Design Systems'],
  },
  {
    period: '2021 — 2023',
    title: 'Product Engineer',
    company: 'Lumen Labs',
    description:
      'Shipped the onboarding and billing experiences end to end, improving activation by 34% through iterative prototyping.',
    tags: ['Next.js', 'Stripe', 'Motion'],
  },
  {
    period: '2019 — 2021',
    title: 'Frontend Developer',
    company: 'Studio Kестроль',
    description:
      'Built award-winning marketing sites for clients across fashion and culture, focused on performance and accessibility.',
    tags: ['WebGL', 'Accessibility', 'CSS'],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-card/40 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-4">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Experience
          </h2>
          <p className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Where I&apos;ve worked
          </p>
        </div>

        <ol className="lg:col-span-8">
          {roles.map((role) => (
            <li
              key={role.title}
              className="group grid gap-4 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[8rem_1fr]"
            >
              <span className="font-mono text-sm text-muted-foreground">
                {role.period}
              </span>
              <div>
                <h3 className="flex flex-wrap items-center gap-x-2 text-lg font-medium text-foreground">
                  {role.title}
                  <span className="text-muted-foreground">·</span>
                  <span className="inline-flex items-center gap-1 text-accent">
                    {role.company}
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
