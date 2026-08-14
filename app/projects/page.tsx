import Link from "next/link";

const projects = [
  { slug: "copstop", title: "Copstop", description: "Safety-focused tooling built for real NZ use cases.", stack: ["TypeScript", "APIs", "Product"] },
  { slug: "safe-trade-nz", title: "SafeTrade NZ", description: "Industry-aware trading safety focused on trust and clearer risk signals.", stack: ["Web", "Data", "Safety"] },
  { slug: "nzta-traffic", title: "NZTA & traffic utilities", description: "Public traffic data transformed into usable operational views.", stack: ["APIs", "Maps", "GeoJSON"] },
  { slug: "pi-hole", title: "Pi-hole network stack", description: "Local DNS, network hygiene and infrastructure control using Raspberry Pi.", stack: ["Raspberry Pi", "DNS", "Networking"] },
  { slug: "ai-creative", title: "AI creative & story systems", description: "Generative art, branding experiments and AI story pipelines.", stack: ["AI", "Genkit", "Creative"] },
  { slug: "api-dashboards", title: "API dashboards & mobile apps", description: "Backend truth surfaced cleanly for operators and users.", stack: ["APIs", "Mobile", "Dashboards"] },
];

export default function ProjectsPage() {
  return <main className="wrap projects-page"><div className="eyebrow">WORK / ARCHIVE</div><h1>Projects built to be useful.</h1><p className="lead">A closer look at the systems, products and experiments behind the portfolio.</p><div className="project-list">{projects.map((project, i) => <Link className="project-row" href={`/projects/${project.slug}`} key={project.slug}><span className="project-index">0{i + 1}</span><div><h2>{project.title}</h2><p>{project.description}</p><div className="tags">{project.stack.map(t => <span className="tag" key={t}>{t}</span>)}</div></div><span className="arrow">↗</span></Link>)}</div></main>;
}
