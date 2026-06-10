import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20 lg:px-10"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Available for select projects
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-balance text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Design engineer crafting{' '}
            <span className="italic text-accent">interfaces</span> with intent.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m Gaurav — I build accessible, pixel-precise products
            that live at the intersection of thoughtful design and resilient
            engineering.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View selected work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Get in touch
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-4">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-1">
            {[
              { value: '8+', label: 'Years building for the web' },
              { value: '40+', label: 'Products shipped to production' },
              { value: '12', label: 'Open-source projects maintained' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-6">
                <dt className="font-serif text-4xl text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
