const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'CSS Architecture',
  'Design Systems',
  'Accessibility',
  'Node.js',
  'Framer Motion',
  'Figma',
  'WebGL',
]

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-card/40 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-4">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            About
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="font-serif text-2xl leading-snug text-balance text-foreground md:text-3xl">
            I believe the best interfaces feel inevitable — clear, fast, and
            quietly delightful.
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              My work lives where design and engineering overlap. I prototype in
              the browser, sweat the details of motion and type, and ship
              production code that holds up under real-world constraints.
            </p>
            <p>
              Previously I helped build the design system and marketing surfaces
              for a developer-tools company, and I regularly contribute to the
              open-source ecosystem that makes modern web development feel
              effortless.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
