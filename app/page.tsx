import { BarChart3, Bot, Layers3, Leaf, Monitor, Palette } from "lucide-react";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiMonitor,
  FiUsers,
  FiZap,
  FiCheck,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites tailored around your business goals.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Custom Software",
    description:
      "Powerful software solutions designed to streamline operations and solve unique business challenges.",
  },
  {
    number: "03",
    icon: Bot,
    title: "AI Development",
    description:
      "Intelligent AI-powered solutions that automate workflows, solve complex problems and create smarter digital experiences.",
  },
];

const values = [
  {
    icon: FiUsers,
    title: "Client First",
    description:
      "We listen, understand your goals and build around what actually matters.",
  },
  {
    icon: FiZap,
    title: "Quality Driven",
    description:
      "Clean code, scalable architecture and attention to every important detail.",
  },
  {
    icon: Leaf,
    title: "Simple Communication",
    description:
      "No unnecessary jargon. Just clear, honest and effective collaboration.",
  },
  {
    icon: BarChart3,
    title: "Result Oriented",
    description:
      "We focus on technology that creates meaningful business value.",
  },
];

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f7f4] text-[#111111]">
      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/[0.08] bg-white/85 px-5 py-3 shadow-sm backdrop-blur-xl sm:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="text-xl font-bold tracking-[-0.06em]">
              RCS<span className="text-black/30">.</span>
            </div>

            <div className="hidden h-7 w-px bg-black/10 sm:block" />

            <div className="hidden leading-tight sm:block">
              <p className="text-[11px] font-semibold">Rajesh Charhajari</p>
              <p className="text-[10px] text-black/40">Software Solution</p>
            </div>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 text-sm text-black/55 md:flex">
            <a href="#services" className="transition hover:text-black">
              Services
            </a>

            <a href="#about" className="transition hover:text-black">
              About
            </a>

            <a href="#process" className="transition hover:text-black">
              Process
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-xs font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black"
          >
            Let's Talk
            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>
      </header>

      {/* ================= HERO ================= */}

      <main>
        <section className="relative min-h-screen px-5 pb-16 pt-36 sm:px-8 lg:px-10">
          {/* Decorative background */}
          <div className="pointer-events-none absolute left-1/2 top-32 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-black/[0.025] blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
            {/* Left */}
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/[0.08] bg-white/60 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/50">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Build · Solve · Grow
              </div>

              <h1 className="max-w-4xl text-[clamp(4rem,8vw,7.5rem)] font-medium leading-[0.87] tracking-[-0.075em]">
                Ideas into
                <br />
                <span className="text-black/30">impactful</span>
                <br />
                software.
              </h1>

              <p className="mt-9 max-w-xl text-base leading-7 text-black/50 sm:text-lg sm:leading-8">
                Rajesh Charhajari Software Solution builds modern web and
                software solutions that help businesses work smarter, scale
                faster and create real value.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group flex items-center gap-3 rounded-full bg-[#111111] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1"
                >
                  Start a project
                  <FiArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#services"
                  className="group flex items-center gap-3 px-4 py-3 text-sm font-medium text-black/60 transition hover:text-black"
                >
                  Explore services
                  <FiArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#deded8] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <div className="relative flex aspect-[0.88] items-end overflow-hidden rounded-[1.5rem] bg-[#202020]">
                  {/* Abstract visual instead of stock photo */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(135deg,#363636,#101010)]" />

                  <div className="absolute right-[-15%] top-[10%] h-64 w-64 rounded-full border border-white/10" />
                  <div className="absolute right-[5%] top-[22%] h-40 w-40 rounded-full border border-white/10" />

                  <div className="relative z-10 w-full p-7 sm:p-9">
                    <p className="max-w-[220px] text-3xl font-medium leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                      Good software
                      <br />
                      creates
                      <br />
                      opportunities.
                    </p>

                    <div className="mt-12 h-px w-full bg-white/10" />

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-white/40">
                        Digital solutions
                      </span>

                      <FiArrowUpRight size={17} className="text-white/60" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-7 -left-5 max-w-[230px] rounded-2xl border border-black/10 bg-white p-5 shadow-xl sm:-left-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1f1ed]">
                  <BarChart3 size={19} />
                </div>

                <p className="text-sm font-semibold">Digital solutions</p>

                <p className="mt-1 text-xs leading-5 text-black/45">
                  Built for a better tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Hero bottom */}
          <div className="mx-auto mt-28 flex max-w-7xl flex-col justify-between gap-4 border-t border-black/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-black/35 sm:flex-row">
            <span>Rajesh Charhajari Software Solution</span>
            <span>Web · Software · Design</span>
          </div>
        </section>

        {/* ================= SERVICES ================= */}

        <section
          id="services"
          className="border-t border-black/10 bg-white px-5 py-28 sm:px-8 lg:px-10 lg:py-36"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              {/* Section intro */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/40">
                  Our services
                </p>

                <h2 className="mt-5 max-w-md text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-5xl">
                  Technology that works for you.
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-6 text-black/45">
                  From idea to deployment, we help you build digital products
                  that are reliable, scalable and designed for real users.
                </p>
              </div>

              {/* Service cards */}
              <div className="grid gap-4 md:grid-cols-3">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.number}
                      className="group rounded-[1.5rem] border border-black/[0.08] bg-[#fafaf8] p-6 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.06] bg-white shadow-sm">
                          <Icon size={20} />
                        </div>

                        <span className="text-xs text-black/25">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-12 text-xl font-medium tracking-[-0.03em]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-black/45">
                        {service.description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-xs font-medium">
                        Learn more
                        <FiArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/40">
                  About us
                </p>

                <h2 className="mt-5 max-w-md text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-5xl">
                  A partner in your growth.
                </h2>

                <p className="mt-7 max-w-md text-base leading-7 text-black/50">
                  We are a software development firm driven by curiosity,
                  clarity and a commitment to quality.
                </p>

                <p className="mt-4 max-w-md text-base leading-7 text-black/50">
                  Our goal is simple — help businesses turn ideas into digital
                  products that make a difference.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Get to know us
                  <FiArrowUpRight size={15} />
                </a>
              </div>

              {/* Values */}
              <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
                {values.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div key={value.title} className="flex gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white">
                        <Icon size={18} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold">{value.title}</h3>

                        <p className="mt-2 max-w-xs text-sm leading-6 text-black/45">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}

        <section
          id="process"
          className="border-y border-black/10 bg-[#eeeee9] px-5 py-28 sm:px-8 lg:px-10 lg:py-36"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/40">
                Our process
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-5xl">
                From idea to impact.
              </h2>
            </div>

            <div className="grid border-t border-black/10 md:grid-cols-3">
              {[
                {
                  no: "01",
                  title: "Understand",
                  text: "We start by understanding your business, users and the problem you want to solve.",
                },
                {
                  no: "02",
                  title: "Build",
                  text: "We design and develop a focused solution with clean technology and thoughtful execution.",
                },
                {
                  no: "03",
                  title: "Grow",
                  text: "We refine, improve and support your product as your business continues to grow.",
                },
              ].map((item) => (
                <div
                  key={item.no}
                  className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                >
                  <span className="text-xs text-black/35">{item.no}</span>

                  <h3 className="mt-12 text-2xl font-medium tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-black/45">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}

        <section id="contact" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#111111] px-7 py-14 text-white sm:px-12 sm:py-20">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/[0.08]" />
              <div className="pointer-events-none absolute -right-8 -top-20 h-52 w-52 rounded-full border border-white/[0.08]" />

              <div className="relative z-10 max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                  Let's build together
                </p>

                <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-6xl">
                  Have a project
                  <br />
                  in mind?
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-6 text-white/45 sm:text-base">
                  We'd love to hear about it. Let's discuss your idea and
                  explore how we can turn it into something useful.
                </p>

                <a
                  href="mailto:rajesh.charhajari@gmail.com"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition hover:-translate-y-1"
                >
                  Start a conversation
                  <FiArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-black/10 bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold tracking-[-0.06em]">
                RCS<span className="text-black/30">.</span>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-black/40">
                Building digital solutions for a better tomorrow.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-black/30">
                  Explore
                </p>

                <div className="flex flex-col gap-3 text-sm text-black/55">
                  <a href="#services" className="hover:text-black">
                    Services
                  </a>
                  <a href="#about" className="hover:text-black">
                    About
                  </a>
                  <a href="#process" className="hover:text-black">
                    Process
                  </a>
                  <a href="#contact" className="hover:text-black">
                    Contact
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-black/30">
                  Social
                </p>

                <div className="flex gap-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/rajeshcharhajari/"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
                  >
                    <FiLinkedin size={15} />
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/rajeshcharhajari"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
                  >
                    <FiInstagram size={15} />
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.github.com/rajeshrc12/"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
                  >
                    <FiGithub size={15} />
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.x.com/rajescharhajari/"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
                  >
                    <FiTwitter size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-black/10 pt-6 text-[11px] text-black/35 sm:flex-row">
            <p>
              © 2026 Rajesh Charhajari Software Solution. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-black">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-black">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
