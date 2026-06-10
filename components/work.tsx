import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  year: string
  tags: string[]
  image: string
  className: string
}

const projects: Project[] = [
  {
    title: 'Helios Analytics',
    description:
      'A real-time analytics platform with a composable dashboard builder and sub-100ms query rendering.',
    year: '2025',
    tags: ['Product', 'Next.js', 'Charts'],
    image: '/projects/project-analytics.png',
    className: 'lg:col-span-7 lg:row-span-2',
  },
  {
    title: 'Marigold Commerce',
    description: 'Headless storefront with a focus on conversion and motion.',
    year: '2024',
    tags: ['E-commerce', 'Mobile'],
    image: '/projects/project-commerce.png',
    className: 'lg:col-span-5',
  },
  {
    title: 'Cmd Palette',
    description: 'An open-source command menu used by 30k+ developers.',
    year: '2024',
    tags: ['Open Source', 'DX'],
    image: '/projects/project-devtool.png',
    className: 'lg:col-span-5',
  },
  {
    title: 'Atlas Design System',
    description:
      'A typography-driven design system and documentation site, fully themeable in light and dark.',
    year: '2023',
    tags: ['Design System', 'Docs'],
    image: '/projects/project-designsystem.png',
    className: 'lg:col-span-12',
  },
]

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Selected work
          </h2>
          <p className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Things I&apos;ve designed &amp; built
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Start a project
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-10 grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-4 lg:grid-cols-12">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/60 ${project.className}`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${project.title} interface preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-xl text-foreground md:text-2xl">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
