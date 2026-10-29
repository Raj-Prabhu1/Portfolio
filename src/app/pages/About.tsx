import { ArrowUpRight } from 'lucide-react'

import { education, experience, site, skillGroups, stats } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines
        as="h1"
        className="font-display text-balance text-[clamp(44px,7.5vw,112px)]"
        lines={['Java backend engineer,', 'banking systems builder']}
      />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src="/images/portrait.svg" alt={site.name} className="aspect-[3/4] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 text-[14px]">
            <div>
              <dt className="text-muted">Based in</dt>
              <dd className="mt-1">{site.location}</dd>
            </div>
            <div>
              <dt className="text-muted">Experience</dt>
              <dd className="mt-1">3+ years</dd>
            </div>
            <div>
              <dt className="text-muted">Phone</dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="link-draw hover:text-fg">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="mt-1 break-all">
                <a href={`mailto:${site.email}`} className="link-draw hover:text-fg">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              I write backend systems for banks: core banking features, event-driven integrations between services, and the data migrations that move a client from one platform to another without losing a row.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              Since August 2022 I have worked at Thoughtscrest Software, placed with Finastra on client implementations for banks in Qatar, the UK, Japan and Portugal. The work runs the whole SDLC in Agile teams — requirements, design, code review, testing, deployment, and the production support that comes after.
            </p>
            <p>
              Alongside that I have been on the UB Core Team building the Revolving Credit Line module in Finastra Essence v5.5X, and I lead UAT on concurrent implementations, owning incident analysis until the defect is closed. I care most about domains where the stakes are real: payments, lending, and the ledgers behind them.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Experience</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Education</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {education.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2} className="mt-16">
            <h2 className="text-[14px] text-muted">Skills</h2>
            <div className="mt-4 flex flex-col gap-6 border-y border-line py-6">
              {skillGroups.map((g) => (
                <div key={g.title} className="grid gap-3 sm:grid-cols-[190px_1fr] sm:gap-6">
                  <span className="text-[14px] text-faint">{g.title}</span>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item} className="rounded-full border border-line px-3 py-1.5 text-[13.5px] text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 grid grid-cols-3 gap-6">
            {stats.map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{value}</p>
                <p className="mt-2 text-[14px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}
