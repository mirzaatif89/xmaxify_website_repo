import { ArrowRight, BarChart3, CheckCircle2, Sparkles } from 'lucide-react';

const services = [
  'Conversion-focused websites',
  'SEO-ready content structure',
  'Fast React user experience',
  'Node.js backend foundations',
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="/">
          Xmaxify
        </a>
        <div className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">React + Node.js Website</p>
          <h1>Build a sharper digital presence for Xmaxify.</h1>
          <p className="intro">
            A modern website foundation with a React frontend, Node.js API, and
            a structure that can grow into a full business platform.
          </p>
          <div className="actions">
            <a className="button primary" href="#contact">
              Start Project <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#services">
              View Services
            </a>
          </div>
        </div>

        <div className="metrics" aria-label="Website highlights">
          <div>
            <Sparkles size={24} />
            <strong>Brand-ready</strong>
            <span>Clean landing page structure</span>
          </div>
          <div>
            <BarChart3 size={24} />
            <strong>Growth-focused</strong>
            <span>Built for leads and analytics</span>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <p className="eyebrow">Services</p>
        <h2>Everything needed for a professional launch.</h2>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service" key={service}>
              <CheckCircle2 size={22} />
              <h3>{service}</h3>
              <p>
                Designed as a practical foundation that can be expanded with
                real pages, forms, dashboards, and integrations.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div>
          <p className="eyebrow">Process</p>
          <h2>Plan, build, measure, improve.</h2>
        </div>
        <p>
          This starter keeps frontend and backend code separate, making it easy
          to add APIs, authentication, content, and deployment workflows later.
        </p>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Ready for your real content and features.</h2>
        <a className="button primary" href="mailto:hello@xmaxify.com">
          Contact Xmaxify <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

export default App;
