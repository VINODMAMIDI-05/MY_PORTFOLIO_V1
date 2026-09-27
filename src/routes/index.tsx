import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AtSign, Github, Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mamidi Vinod — Developer" },
      {
        name: "description",
        content:
          "The portfolio of Mamidi Vinod, a developer building technology-driven solutions for real-world problems.",
      },
      { property: "og:title", content: "Mamidi Vinod — Developer" },
      {
        property: "og:description",
        content:
          "Developer and problem solver building software, AI, and product ideas with purpose.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Technology", "skills"],
  ["Journey", "journey"],
  ["Contact", "contact"],
] as const;

const projects = [
  {
    number: "01",
    name: "VILOOP",
    title: "Digital Village Operating System",
    description:
      "A connected digital layer for village communities across governance, agriculture, healthcare, education, commerce, and more.",
    tags: ["FLAGSHIP", "COMMUNITY TECH"],
    featured: true,
    logo: "https://res.cloudinary.com/di0o174ky/image/upload/v1790491595/viloop_weuevy.jpg",
  },
  {
    number: "02",
    name: "RaituSevak360",
    title: "Digital Agriculture & Farmer Support",
    description:
      "An ecosystem bringing farmer support, crop intelligence, services, learning, and agricultural resources together.",
    tags: ["AGRI-TECH", "AI / ML"],
    featured: false,
    logo: "https://res.cloudinary.com/di0o174ky/image/upload/v1790491983/raitu_entbrw.jpg",
  },
  {
    number: "03",
    name: "MemShield",
    title: "UPI & Banking Security Platform",
    description:
      "An AI-powered security concept for detecting suspicious payment activity and protecting digital banking interactions.",
    tags: ["SECURITY", "PRODUCT CONCEPT"],
    featured: false,
    logo: "https://res.cloudinary.com/di0o174ky/image/upload/v1790492342/mem_upi_bcgxik.jpg",
  },
];

const skills = [
  ["Programming", "C++ · Java · JavaScript · TypeScript · Python"],
  ["Frontend", "HTML · CSS · Tailwind CSS · Bootstrap"],
  ["Database", "SQLite"],
  ["AI / ML", "Machine Learning"],
  ["Mobile", "React Native · Expo"],
  ["Tools & Deployment", "Git · GitHub · VS Code · Cursor · Postman · Figma · Vercel · Netlify"],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="container-wide nav-wrap">
          <a className="wordmark" href="#home" onClick={closeMenu}>
            <span>VINOD</span>
            <span className="wordmark-mark">/</span>
          </a>
          <button
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
          </button>
          <nav className={`main-navigation${menuOpen ? " is-open" : ""}`} id="main-navigation">
            {navItems.map(([label, href], index) => (
              <a
                className={index === 0 ? "nav-link is-active" : "nav-link"}
                href={`#${href}`}
                key={href}
                onClick={closeMenu}
              >
                <span className="nav-index">0{index + 1}</span>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="container-wide hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal-up">
              Developer <span>•</span> Problem Solver
            </p>
            <h1 className="hero-title reveal-up reveal-delay-1">
              <span>Mamidi</span>
              <em>Vinod</em>
            </h1>
            <div className="gold-rule reveal-up reveal-delay-2" />
            <div className="hero-meta reveal-up reveal-delay-2">
              <p>
                B.Tech CSE Student
                <br />
                Developer
              </p>
              <p>
                Vardhaman College of Engineering
                <br />
                Telangana, India
              </p>
            </div>
            <p className="hero-intro reveal-up reveal-delay-3">
              Building technology-driven solutions for real-world problems through software, AI, and
              product development.
            </p>
            <div className="hero-actions reveal-up reveal-delay-3">
              <a className="button button-primary" href="#projects">
                View projects <span>↗</span>
              </a>
              <a
                className="button button-primary"
                href="/resume.pdf"
                rel="noreferrer"
                target="_blank"
              >
                View resume <span>↗</span>
              </a>
            </div>
          </div>
          <div className="hero-portrait reveal-up reveal-delay-2" aria-label="Profile image">
            <div className="portrait-frame">
              <span className="portrait-corner portrait-corner-tl" />
              <span className="portrait-corner portrait-corner-tr" />
              <span className="portrait-corner portrait-corner-bl" />
              <span className="portrait-corner portrait-corner-br" />
              <img
                alt="Mamidi Vinod"
                className="portrait-image"
                src="https://res.cloudinary.com/di0o174ky/image/upload/f_auto/q_auto/WhatsApp_Image_2026-09-27_at_11.39.22_jwietj.jpg"
              />
            </div>
            <p className="portrait-caption">
              Turning practical ideas into technology-driven solutions.
            </p>
          </div>
        </div>
        <div className="container-wide hero-footer">
          <span>01 / 06</span>
          <span className="scroll-hint">
            <i /> Scroll to explore
          </span>
          <span>© 2026</span>
        </div>
      </section>

      <section className="section-band about-section" id="about">
        <div className="container-wide section-grid">
          <div className="section-kicker">
            <span>02</span>
            <span>About</span>
          </div>
          <div className="about-content">
            <p className="section-lead">
              I identify real-world problems, build technology-driven solutions, and lead projects
              from idea to implementation.
            </p>
            <div className="about-columns">
              <p>
                As a B.Tech CSE student and product builder, I work at the intersection of software
                development, AI/ML exploration, and meaningful community outcomes.
              </p>
              <p>
                From early sketches to working systems, I enjoy turning complex ideas into clear,
                useful products — while coordinating teams and learning in public.
              </p>
            </div>
            <div className="about-stamp">
              <span>MV</span>
              <span>
                Developer / Problem Solver
                <br />
                Telangana, India
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="container-wide">
          <div className="section-heading-row">
            <div className="section-kicker">
              <span>03</span>
              <span>Selected projects</span>
            </div>
            <p className="section-note">
              Three directions.
              <br />
              One purpose.
            </p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article
                className={`project-row${project.featured ? " project-featured" : ""}`}
                key={project.name}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-visual" aria-hidden="true">
                  <img alt={`${project.name} logo`} className="project-logo" src={project.logo} />
                  <span className="visual-coordinates">{project.number} / FIELD NOTE</span>
                </div>
                <div className="project-copy">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h2>{project.name}</h2>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="text-link" aria-label={`${project.name} case study coming soon`}>
                    Case study coming soon <span>↗</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band skills-section" id="skills">
        <div className="container-wide section-grid">
          <div className="section-kicker">
            <span>04</span>
            <span>Technology</span>
          </div>
          <div className="skills-content">
            <div className="skills-intro">
              <p className="section-lead">
                A toolkit for taking an idea from a quiet question to a working product.
              </p>
            </div>
            <div className="skills-list">
              {skills.map(([category, list]) => (
                <div className="skill-row" key={category}>
                  <span>{category}</span>
                  <p>{list}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="container-wide section-grid">
          <div className="section-kicker">
            <span>05</span>
            <span>Journey</span>
          </div>
          <div className="journey-content">
            <p className="section-lead">Still becoming. Already building.</p>
            <div className="journey-list">
              {[
                [
                  "01",
                  "Started",
                  "Started my journey in Computer Science Engineering, learning programming and web development.",
                ],
                [
                  "02",
                  "Learned",
                  "Built my skills in C++, Java, Web Development, Backend, Databases, and AI/ML.",
                ],
                [
                  "03",
                  "Built",
                  "Started building real-world projects to solve practical problems.",
                ],
                [
                  "04",
                  "RaituSevak360",
                  "Built RaituSevak360, a platform focused on providing digital services and support for farmers.",
                ],
                [
                  "05",
                  "VILOOP",
                  "Created VILOOP, a digital platform connecting different village services in one place.",
                ],
                [
                  "06",
                  "Team",
                  "Started working with teams and developed skills in team coordination, project management, and leadership.",
                ],
                [
                  "07",
                  "Hackathons",
                  "Participated in hackathons and innovation activities, turning ideas into practical solutions.",
                ],
                [
                  "08",
                  "MemShield",
                  "Explored AI and security through MemShield, focused on UPI and digital banking security.",
                ],
              ].map(([number, title, description]) => (
                <div className="journey-row" key={number}>
                  <span className="journey-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band contact-section" id="contact">
        <div className="container-wide">
          <div className="contact-inner">
            <div className="contact-intro">
              <div className="section-kicker">
                <span>06</span>
                <span>Contact</span>
              </div>
              <h2 className="contact-title">
                Get in
                <br />
                <em>Touch</em>
              </h2>
              <p className="contact-affiliation">
                B.Tech CSE Student
                <br />
                Vardhaman College of Engineering
              </p>
            </div>
            <div className="contact-details">
              <a className="contact-item" href="mailto:mrmamidivinod2006@gmail.com">
                <span className="contact-icon">
                  <Mail aria-hidden="true" size={20} strokeWidth={1.8} />
                </span>
                <span className="contact-item-copy">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">mrmamidivinod2006@gmail.com</span>
                </span>
              </a>
              <a
                className="contact-item"
                href="https://github.com/VINODMAMIDI-05"
                rel="noreferrer"
                target="_blank"
              >
                <span className="contact-icon">
                  <Github aria-hidden="true" size={20} strokeWidth={1.8} />
                </span>
                <span className="contact-item-copy">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">VINODMAMIDI-05</span>
                </span>
              </a>
              <a
                className="contact-item"
                href="https://www.linkedin.com/in/vinod-mamidi-03a297375/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="contact-icon">
                  <Linkedin aria-hidden="true" size={20} strokeWidth={1.8} />
                </span>
                <span className="contact-item-copy">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Vinod Mamidi</span>
                </span>
              </a>
              <a
                className="contact-item"
                href="https://x.com/MamidiMr50372"
                rel="noreferrer"
                target="_blank"
              >
                <span className="contact-icon">
                  <AtSign aria-hidden="true" size={20} strokeWidth={1.8} />
                </span>
                <span className="contact-item-copy">
                  <span className="contact-label">X</span>
                  <span className="contact-value">@MamidiMr50372</span>
                </span>
              </a>
            </div>
          </div>
          <footer className="contact-footer">
            <span>© 2026 Mamidi Vinod</span>
            <span>All rights reserved</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
