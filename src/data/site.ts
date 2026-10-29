// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Raj Prabhu R',
  role: 'Software Engineer — Java Backend',
  location: 'Bengaluru, India',
  timezone: 'Asia/Kolkata',
  email: 'r.rajprabhu3@gmail.com',
  phone: '+91 904223 2111',
  phoneHref: 'tel:+919042232111',
  available: true,
  intro:
    'Java backend engineer with 3+ years building and supporting enterprise systems for global banking clients in regulated financial environments. I turn ambiguous business requirements into scalable, maintainable services — and stay with them through production.',
  socials: [
    { label: 'Email', href: 'mailto:r.rajprabhu3@gmail.com' },
    { label: 'Call', href: 'tel:+919042232111' },
  ],
  marquee: [
    'Java',
    'Spring Boot',
    'Apache Kafka',
    'Redis',
    'REST APIs',
    'Microservices',
    'SQL',
    'Docker & CI/CD',
  ],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'essence-rcl',
    title: 'Revolving Credit Line',
    client: 'Finastra Essence v5.5X, UB Core Team',
    category: 'Product development',
    year: '2023 – 2026',
    cover: '/images/rcl.svg',
    tint: '#dbe0f5',
    summary:
      'Contributed to the new Revolving Credit Line module in Finastra Essence: account opening, billing and charges, and repayment collection and reversal.',
    role: ['Backend development', 'Domain flows', 'Code review'],
    deliverables: ['Account opening', 'Billing and charges', 'Repayment and reversal'],
    body: [
      'The Revolving Credit Line is a new product line in Finastra Essence v5.5X, the core banking platform behind retail and corporate banks across Europe, the Middle East and Asia.',
      'On the UB Core Team I built the flows that make the product work end to end: account opening, billing and charges, and repayment collection with its reversals. Each one has to hold up as a transaction, not just as a happy path.',
      'Most of the effort goes into the edges — partial repayments, reversals against charges that have already posted, and the state a balance is in halfway through a batch. The code gets audited, so it has to explain itself.',
    ],
    size: 'large',
  },
  {
    slug: 'al-rayan',
    title: 'Al Rayan Bank',
    client: 'Al Rayan Bank, Qatar',
    category: 'Core banking implementation',
    year: '2022 – 2026',
    cover: '/images/alrayan.svg',
    tint: '#efe4d8',
    summary:
      'Implemented Essence onsite, closing the gaps between how the bank works and what the product does, through client-specific customization.',
    role: ['Implementation', 'Customization', 'Testing support'],
    deliverables: ['Gap analysis', 'Client-specific customization', 'Test cycle support'],
    body: [
      'Al Rayan runs on Essence, and no two banks run it the same way. The gap between the product and the bank’s actual processes gets closed with customization — which means someone has to understand both sides before writing anything.',
      'I worked onsite, mapping business processes to product behaviour, building the customizations where they did not meet, and supporting the testing cycles that proved them.',
      'The valuable part was not the code. It was knowing which gaps were worth closing and which ones the bank could close by changing how they worked.',
    ],
    size: 'small',
  },
  {
    slug: 'rothschild',
    title: 'Rothschild',
    client: 'Rothschild, UK',
    category: 'Core banking implementation',
    year: '2022 – 2026',
    cover: '/images/rothschild.svg',
    tint: '#d8d4e4',
    summary:
      'Implemented Essence in the UK, resolving functional gaps through client-specific customization and supporting testing all the way to go-live.',
    role: ['Implementation', 'Customization', 'Go-live support'],
    deliverables: ['Functional gap resolution', 'Customizations', 'Testing through go-live'],
    body: [
      'A UK implementation of Essence with a clear mandate: the functional gaps between product and client expectation get resolved, not documented and deferred.',
      'I scoped the gaps with the business and the delivery teams, built the customizations, and stayed on the testing cycles through go-live — the same defects kept coming back until the root cause did, so that is where the time went.',
      'Going live is where implementation work is proven. Everything before it is a hypothesis.',
    ],
    size: 'small',
  },
  {
    slug: 'banco-do-brasil',
    title: 'Banco do Brasil',
    client: 'Banco do Brasil, Japan',
    category: 'Core banking delivery',
    year: '2022 – 2026',
    cover: '/images/bdbrasil.svg',
    tint: '#d9e6dc',
    summary:
      'Delivered core banking across a wide surface: extracts, incoming payment transformation, schedulers, business rules, user exits and public APIs.',
    role: ['Backend development', 'Integrations', 'Delivery packages'],
    deliverables: [
      'Core and Custom Extracts',
      'Incoming Payment Transformation',
      'Party History Scheduler',
      'Business Rules and Amortization User Exit',
      'FX Update Process',
      'Main Account and List Transaction APIs',
    ],
    body: [
      'The broadest engagement of the four: a core banking implementation where the deliverables ran from batch extracts and schedulers to payment transformation and the APIs the bank’s own systems call.',
      'I built Core and Custom Extracts, the Incoming Payment Transformation, the Party History Scheduler and the FX Update Process, along with business rules, an amortization user exit, and the Main Account and List Transaction by Account APIs.',
      'The through-line was handover quality: every change shipped with a delivery package, deployment instructions and post-deployment support, so the bank’s team could run it without me in the room.',
    ],
    size: 'large',
  },
  {
    slug: 'banco-ctt',
    title: 'Banco CTT',
    client: 'Banco CTT, Portugal',
    category: 'Payments integration',
    year: '2022 – 2026',
    cover: '/images/ctt.svg',
    tint: '#ebe3d6',
    summary:
      'Integrated FPM and Essence with the local SEPA payment system, forward-ported report changes to Jasper and cleared the UAT backlog.',
    role: ['Integration', 'Report changes', 'UAT support'],
    deliverables: ['SEPA payment integration', 'Jasper report change requests', 'UAT issue resolution'],
    body: [
      'Payments are unforgiving: a SEPA message either matches the scheme or the bank does not get paid. This project connected FPM and Essence to Portugal’s local SEPA payment system so money could move between them.',
      'Alongside the integration I forward-ported report change requests to Jasper and worked the UAT issues as they came in — most of them at the boundary where the payment file met the ledger.',
      'Integration work is mostly translation: three systems, three vocabularies, one message that has to survive all of them.',
    ],
    size: 'small',
  },
  {
    slug: 'revolving-credit-platform',
    title: 'Credit Platform',
    client: 'Self-initiated',
    category: 'Java 17 · Spring Boot · Kafka',
    year: 'Ongoing',
    cover: '/images/platform.svg',
    tint: '#e8e2d6',
    summary:
      'A microservices-based lending platform: the full credit-line lifecycle, event-driven, idempotent by design, documented in Swagger.',
    role: ['System design', 'REST APIs', 'Event-driven messaging'],
    deliverables: ['Credit-line lifecycle', 'Kafka event flows', 'Redis caching and idempotency', 'OpenAPI docs'],
    body: [
      'A microservices-based lending platform in Java and Spring Boot, with every REST API documented in Swagger/OpenAPI. It models the credit-line lifecycle end to end: account opening, limit assignment, drawdown, interest and fee calculation, statement generation, and repayment allocation and reversal.',
      'Service communication runs through Kafka — DrawdownPosted, RepaymentReceived, StatementGenerated — with idempotent consumers and a dead-letter topic for the events that fail, so a retry can never double-post a drawdown.',
      'Redis caches credit-limit and product-configuration lookups and enforces idempotency keys on the payment APIs. Built with Java 17, Spring Boot, Spring Batch and PostgreSQL, packaged in Docker and delivered through Jenkins.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Java & Spring Boot',
    body: 'Core Java, OOP and multithreading behind Spring Boot, Spring MVC, Hibernate and JPA. Microservices and batch processing, designed for systems that have to keep running long after the project ends.',
  },
  {
    title: 'Event-driven systems',
    body: 'Apache Kafka for asynchronous, decoupled flow between services, and Redis caching on frequently read data to cut repeated database lookups and improve response times.',
  },
  {
    title: 'APIs & integration',
    body: 'RESTful APIs documented in Swagger and tested in Postman, SOAP with XML and SOAP UI, and system integration work across payments, extracts and third-party platforms.',
  },
  {
    title: 'Data & delivery',
    body: 'SQL and query optimization, ETL and data migration with Apache NiFi, and the full SDLC in Agile teams: design, code review, CI/CD, UAT, root-cause analysis and production support.',
  },
]

export const highlights = [
  {
    quote:
      'Delivered onsite workshops and hands-on training for bank IT teams during Essence rollouts, cutting post-go-live support dependency by 40%.',
    name: '40% less post-go-live dependency',
    role: 'Essence rollouts, bank IT enablement',
  },
  {
    quote:
      'Led UAT using Jira and SFDC across multiple concurrent client implementations, owning incident analysis and defect resolution to drive zero-defect releases.',
    name: 'Zero-defect releases',
    role: 'UAT leadership across concurrent implementations',
  },
  {
    quote:
      'Diagnosed production incidents through root-cause analysis and shipped permanent fixes, re-engineering legacy components for better usability and security.',
    name: 'Permanent fixes, not workarounds',
    role: 'L3 production support and root-cause analysis',
  },
]

export const experience = [
  {
    period: 'Aug 2022 – Present',
    title: 'Software Engineer, Thoughtscrest Software',
    detail:
      'Bengaluru — backend features for core banking systems in Java and Spring Boot, Kafka integrations, Redis caching, technical requirement documentation and production support.',
  },
  {
    period: 'Sep 2023 – Mar 2026',
    title: 'Software Engineer (Contingent Worker), Finastra Software Solutions',
    detail:
      'Client placement via Thoughtscrest — multiple concurrent Essence implementations, solution documentation, coordination of development, business and QA teams, UAT leadership and L3 support.',
  },
]

export const education = [
  {
    period: 'Sep 2019 – May 2023',
    title: 'B.Tech, Information Technology',
    detail: 'Kongu Engineering College, Erode, Tamil Nadu — CGPA 8.5/10, graduated with distinction',
  },
]

export const skillGroups = [
  {
    title: 'Languages & frameworks',
    items: ['Java (Core, OOP, Multithreading)', 'SQL', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JPA', 'Microservices', 'Batch processing', 'System design'],
  },
  {
    title: 'Distributed systems & data',
    items: ['Apache Kafka', 'Redis', 'ETL', 'Data migration', 'Query optimization', 'Triggers', 'Joins', 'DDL'],
  },
  {
    title: 'APIs & integration',
    items: ['RESTful APIs', 'SOAP', 'JSON', 'XML', 'Swagger', 'Postman', 'SOAP UI', 'System integration'],
  },
  {
    title: 'Tools & platforms',
    items: ['Git', 'Maven', 'Gradle', 'Docker', 'Jenkins', 'Jira', 'Apache Tomcat', 'JBoss', 'WebSphere'],
  },
  {
    title: 'Engineering practices',
    items: ['Full SDLC', 'Agile', 'Code reviews', 'Source control', 'CI/CD', 'UAT', 'Root-cause analysis', 'Production support'],
  },
  {
    title: 'Domain',
    items: ['Finastra Essence', 'Core banking', 'CASA', 'Lending', 'Revolving credit line', 'Payments (SEPA)', 'Collateral', 'Fixed deposits'],
  },
]

export const stats = [
  ['3+', 'years in banking tech'],
  ['4', 'countries delivered in'],
  ['40%', 'less post-go-live support'],
]
