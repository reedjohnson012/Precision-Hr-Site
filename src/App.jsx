import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ShieldCheck, BarChart3, Settings2, FileText, TrendingUp } from "lucide-react";

// Color system based on logo
const colors = {
  navy: "#0b2a49",
  red: "#d62828",
  light: "#f5f6f8",
  dark: "#0a223c",
};

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Badge = ({ children, tone = "navy" }) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide border ${tone === "navy"
      ? "bg-white/60"
      : "bg-white/60"
      }`}
    style={{
      color: tone === "navy" ? colors.navy : colors.red,
      borderColor: tone === "navy" ? colors.navy : colors.red,
    }}
  >
    {children}
  </span>
);

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium ${isActive ? "bg-white" : "hover:bg-white/10"}`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10" style={{ backgroundColor: colors.navy }}>
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/FullLogo.png" alt="Precision HR Consulting" className="h-10 w-auto hidden sm:block" />
            <div className="text-white font-extrabold tracking-wide text-lg sm:text-xl">PRECISION HR CONSULTING</div>
          </Link>
          <button className="sm:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
          <div className={`sm:flex items-center gap-1 ${open ? "block" : "hidden sm:block"}`}>
            <NavLink to="/" className={navLinkClass} style={{ color: "white" }}>Home</NavLink>
            <NavLink to="/services" className={navLinkClass} style={{ color: "white" }}>Services</NavLink>
            <NavLink to="/sectors" className={navLinkClass} style={{ color: "white" }}>Sectors</NavLink>
            <NavLink to="/about" className={navLinkClass} style={{ color: "white" }}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass} style={{ color: "white" }}>Contact</NavLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};

const Hero = () => (
  <div className="relative overflow-hidden" style={{ backgroundColor: colors.light }}>
    <Container>
      <div className="grid md:grid-cols-2 gap-10 items-center py-14 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge tone="red">Accuracy • Dependability • Integrity</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight" style={{ color: colors.navy }}>
            HR systems that scale with your business
          </h1>
          <p className="mt-5 text-base md:text-lg text-neutral-700 leading-relaxed max-w-2xl">
            We implement HRIS, automate Microsoft 365 workflows, and lock down compliance so founders and operators can hire, onboard, and manage with confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge tone="navy"><ShieldCheck className="mr-1 h-4 w-4" /> Veteran‑Owned & Operated</Badge>
            <Badge tone="navy"><TrendingUp className="mr-1 h-4 w-4" /> HRIS & Automation</Badge>
            <Badge tone="navy"><BarChart3 className="mr-1 h-4 w-4" /> Workforce Analytics</Badge>
          </div>
          <div className="mt-8 flex gap-3">
            <Link to="/contact" className="rounded-2xl px-6 py-3.5 font-semibold shadow-sm border" style={{ backgroundColor: colors.red, color: "white", borderColor: colors.red }}>Email Us</Link>
            <Link to="/services" className="rounded-2xl px-6 py-3.5 font-semibold shadow-sm border" style={{ color: colors.navy, borderColor: colors.navy }}>Explore Services</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl shadow-xl border bg-white" style={{ borderColor: colors.navy }}>
            <img src="/FullLogo.png" alt="Precision HR Consulting Logo" className="w-full h-full object-contain p-6 md:p-8" />
          </div>
        </motion.div>
      </div>
    </Container>
  </div>
);

const ServiceCard = ({ icon: Icon, title, children }) => (
  <div className="rounded-3xl border p-6 md:p-8 shadow-sm bg-white" style={{ borderColor: colors.navy }}>
    <div className="flex items-center gap-3">
      <div className="rounded-2xl p-2" style={{ backgroundColor: colors.light }}>
        <Icon className="h-6 w-6" style={{ color: colors.navy }} />
      </div>
      <h3 className="text-xl font-bold" style={{ color: colors.navy }}>{title}</h3>
    </div>
    <div className="mt-4 text-sm leading-relaxed text-neutral-700">{children}</div>
  </div>
);

const Home = () => (
  <>
    <Hero />
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: colors.navy }}>What’s most urgent in HR right now</h2>
        <p className="mt-2 text-neutral-700 max-w-3xl">We prioritize high‑impact areas based on current HR trends: compliance automation, HRIS modernization, data‑driven workforce planning, and secure policy frameworks for hybrid work.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={ShieldCheck} title="Compliance Automation">
            Build defensible, audit‑ready processes for wage & hour, leave, onboarding, and pay transparency. Automate evidence capture with Microsoft 365.
          </ServiceCard>
          <ServiceCard icon={Settings2} title="HRIS Implementation">
            Select, configure, and integrate HRIS to fit your workflows. We map data, streamline approvals, and connect M365, payroll, and benefits.
          </ServiceCard>
          <ServiceCard icon={BarChart3} title="Workforce Analytics">
            Dashboards for headcount, turnover, DEI metrics, and labor costs. Clear insights that leadership can act on.
          </ServiceCard>
          <ServiceCard icon={FileText} title="Policies & Procedures">
            Remote/hybrid handbooks, SOPs, and risk‑based policies that scale with you and align to federal/state guidance.
          </ServiceCard>
        </div>
      </Container>
    </section>
  </>
);

const Services = () => (
  <div className="py-12 md:py-16" style={{ backgroundColor: colors.light }}>
    <Container>
      <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>Services</h2>
      <p className="mt-2 text-neutral-700 max-w-3xl">End‑to‑end execution with measurable outcomes. Fixed‑fee pilots available.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <ServiceCard icon={Settings2} title="HRIS Implementation & M365 Automation">
          Selection support, implementation, data migration, and integration. We automate intake, onboarding, and approvals using Microsoft 365 (Power Automate, Forms, SharePoint).
        </ServiceCard>
        <ServiceCard icon={ShieldCheck} title="Compliance Audits & Readiness">
          Rapid diagnostic across policies, training, and recordkeeping. Remediation roadmaps and templates included.
        </ServiceCard>
        <ServiceCard icon={BarChart3} title="Workforce Analytics & Reporting">
          Build or tune dashboards for leadership visibility—turnover, recruiting funnel, and labor costs. Governance built‑in.
        </ServiceCard>
        <ServiceCard icon={FileText} title="Policies, SOPs & Employee Handbooks">
          Practical, plain‑English policies aligned to your risk profile and industry obligations.
        </ServiceCard>
      </div>
      <div className="mt-10">
        <Link to="/contact" className="rounded-2xl px-5 py-3 font-semibold shadow-sm border" style={{ backgroundColor: colors.red, color: "white", borderColor: colors.red }}>Email Us</Link>
      </div>
    </Container>
  </div>
);

const Sectors = () => (
  <div className="py-12 md:py-16 bg-white">
    <Container>
      <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>Who we serve</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="rounded-3xl border p-6" style={{ borderColor: colors.navy }}>
          <h3 className="font-semibold" style={{ color: colors.navy }}>Startups & Small Businesses</h3>
          <p className="mt-2 text-sm text-neutral-700">Foundations to grow: HRIS, policies, and automated workflows that save hours every week.</p>
        </div>
        <div className="rounded-3xl border p-6" style={{ borderColor: colors.navy }}>
          <h3 className="font-semibold" style={{ color: colors.navy }}>Veteran‑Owned Companies</h3>
          <p className="mt-2 text-sm text-neutral-700">Veteran‑owned & operated ourselves—we speak your language and build mission‑ready HR systems.</p>
        </div>
        <div className="rounded-3xl border p-6" style={{ borderColor: colors.navy }}>
          <h3 className="font-semibold" style={{ color: colors.navy }}>Nonprofits & New Gov Contractors</h3>
          <p className="mt-2 text-sm text-neutral-700">Grant‑compliant processes, workforce tracking, and documentation that stands up to audits.</p>
        </div>
      </div>
    </Container>
  </div>
);

const About = () => (
  <div className="py-12 md:py-16" style={{ backgroundColor: colors.light }}>
    <Container>
      <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>About Precision HR Consulting</h2>
      <p className="mt-3 max-w-3xl text-neutral-700">
        Precision HR Consulting is a remote‑first firm based in Richmond, VA. Founded by a veteran HR leader with 12+ years of experience, we help small organizations deploy precise, dependable HR systems that enable confident growth.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Badge tone="navy">Veteran‑Owned & Operated</Badge>
        <Badge tone="navy">Remote‑First</Badge>
        <Badge tone="navy">Security‑minded</Badge>
      </div>
    </Container>
  </div>
);

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Precision HR Consulting — Inquiry");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    // Update this once Microsoft 365 is connected for your domain:
    window.location.href = `mailto:reedjohnson@precision-hr.org?subject=${subject}&body=${body}`;
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <div className="py-12 md:py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-bold" style={{ color: colors.navy }}>Email Us</h2>
        <p className="mt-2 text-neutral-700">Use the form and we’ll respond within one business day.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-2xl">
          <div>
            <label className="text-sm font-semibold" style={{ color: colors.navy }}>Name</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring"
              style={{ borderColor: colors.navy }}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-semibold" style={{ color: colors.navy }}>Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring"
              style={{ borderColor: colors.navy }}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-semibold" style={{ color: colors.navy }}>Message</label>
            <textarea
              className="mt-1 w-full rounded-xl border px-3 py-2 min-h-[140px] focus:outline-none focus:ring"
              style={{ borderColor: colors.navy }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              placeholder="Tell us about your HR goals"
            />
          </div>
          <button type="submit" className="rounded-2xl px-5 py-3 font-semibold shadow-sm border w-fit" style={{ backgroundColor: colors.red, color: "white", borderColor: colors.red }}>
            <span className="inline-flex items-center gap-2"><Mail className="h-5 w-5" /> Send Email</span>
          </button>
        </form>
      </Container>
    </div>
  );
};

const Footer = () => (
  <footer className="py-10" style={{ backgroundColor: colors.navy }}>
    <Container>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/80 text-sm">© {new Date().getFullYear()} Precision HR Consulting • Richmond, VA • Veteran‑Owned</p>
        <div className="text-white/80 text-sm">Accuracy • Dependability • Integrity</div>
      </div>
    </Container>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.light }}>
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
