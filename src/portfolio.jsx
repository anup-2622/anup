import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Palette,
  Layers,
  Sparkles,
  Database,
  Phone,
  MapPin,
  Calendar,
  TrendingUp,
  Zap,
  Award,
  Target,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Send,
  Heart,
  Rocket,
  CheckCircle2,
  Cpu,
  BookOpen,
  Clock,
} from "lucide-react";
import {
  education,
  experience,
  projects,
  skills,
  stats,
  technicalSkills,
  blogPosts,
} from "./util/portfolioUtil";
import RevealOnScroll from "./components/RevealOnScroll";
import SkillBar from "./components/SkillBar";

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numValue = parseFloat(value);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * numValue);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {Number.isInteger(parseFloat(value))
        ? Math.round(count)
        : count.toFixed(2)}
    </span>
  );
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [experienceYear, setExperienceYear] = useState(0);
  const [activeNav, setActiveNav] = useState("");

  const startDate = new Date("08-08-2023");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["work", "skills", "experience", "education", "blog", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveNav(id);
          break;
        }
      }
    };
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const today = new Date();
    setExperienceYear(getDateDifference(today, startDate));
  }, []);

  function getDateDifference(date1, date2) {
    if (date1 > date2) [date1, date2] = [date2, date1];
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    if (months < 0) { years--; months += 12; }
    if (date2.getDate() < date1.getDate()) {
      months--;
      if (months < 0) { years--; months += 12; }
    }
    return years + "." + months;
  }

  const navItems = [
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-midnight text-white relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Mouse-following glow */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 400}px`,
            top: `${mousePosition.y - 400}px`,
            background: "radial-gradient(circle, rgba(245,158,11,0.035) 0%, transparent 70%)",
          }}
        />
        {/* Floating gradient orbs */}
        <div className="absolute top-[-15%] right-[-5%] w-[900px] h-[900px] bg-gradient-to-br from-amber-500/[0.04] via-orange-500/[0.02] to-transparent rounded-full blur-[100px] animate-float-slower" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[900px] h-[900px] bg-gradient-to-tr from-amber-600/[0.04] via-orange-600/[0.02] to-transparent rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/[0.02] to-orange-500/[0.02] rounded-full blur-[120px] animate-aurora" />
        {/* Grid and dot patterns */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight/50" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled ? "glass-nav-scrolled py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="relative group flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-500 group-hover:scale-105">
                <span className="text-midnight font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">anup</span>
                <span className="text-amber-400">.</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeNav === item.id
                      ? "text-amber-400 bg-amber-500/10"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                  {activeNav === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                  )}
                </a>
              ))}
              <a
                href="mailto:anupk2622@gmail.com"
                className="ml-4 btn-primary text-sm !px-6 !py-2.5 rounded-xl"
              >
                <span>Hire Me</span>
              </a>
            </div>

            <button
              className="md:hidden p-2.5 text-slate-300 hover:text-white transition-colors rounded-xl hover:bg-white/[0.06]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-midnight/95 backdrop-blur-3xl border-t border-white/[0.04] px-6 py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                  activeNav === item.id
                    ? "text-amber-400 bg-amber-500/10"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:anupk2622@gmail.com"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 btn-primary text-center text-sm rounded-xl"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION — Premium layout with gradient orbs
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-8 pt-28 pb-20">
        {/* Decorative orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/[0.06] rounded-full blur-[100px] animate-float-slow pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-500/[0.05] rounded-full blur-[80px] animate-float pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <RevealOnScroll delay={0}>
                <div className="section-badge mb-10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  {experienceYear}+ Years Experience
                  <span className="text-white/20">|</span>
                  Open to Opportunities
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                <h1 className="text-5xl sm:text-6xl lg:text-[84px] font-extrabold mb-8 leading-[1.02] tracking-tight">
                  <span className="text-white block">Full Stack</span>
                  <span className="text-slate-400 text-3xl sm:text-4xl lg:text-5xl font-bold block mb-3">&</span>
                  <span className="gradient-text-shimmer block">Data Engineer</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <p className="text-lg lg:text-xl text-slate-300/90 mb-10 leading-relaxed max-w-2xl text-balance">
                  Crafting scalable web applications and intelligent data
                  pipelines. Specialized in React, Node.js, Python, dbt, and
                  modern data stack technologies.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <div className="flex flex-wrap gap-3 mb-12">
                  {[
                    { icon: Phone, text: "+91 9470899107", color: "text-amber-400", href: "tel:+919470899107" },
                    { icon: Mail, text: "anupk2622@gmail.com", color: "text-amber-400", href: "mailto:anupk2622@gmail.com" },
                    { icon: MapPin, text: "Delhi, India", color: "text-orange-400" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-slate-200 glass-pill px-5 py-3 transition-all duration-300 hover:bg-[#111d33]/70 hover:border-white/[0.14] group cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center border border-white/[0.06] group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-300">
                        <item.icon size={15} className={item.color} />
                      </div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium">{item.text}</a>
                      ) : (
                        <span className="text-sm font-medium">{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={400}>
                <div className="flex flex-wrap gap-4">
                  <a href="#work" className="btn-primary group">
                    <span className="flex items-center gap-3">
                      View Projects
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  <a href="mailto:anupk2622@gmail.com" className="btn-secondary">
                    Get in Touch
                  </a>
                </div>
              </RevealOnScroll>
            </div>

            {/* Floating Code Card — Premium */}
            <div className="lg:col-span-2 hidden lg:block">
              <RevealOnScroll delay={300} direction="right">
                <div className="relative">
                  {/* Glow behind card */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-amber-500/[0.08] via-transparent to-orange-500/[0.06] rounded-[2rem] blur-3xl animate-glow-pulse" />
                  <div className="absolute -inset-px bg-gradient-to-br from-amber-500/20 via-transparent to-orange-500/20 rounded-3xl blur-xl opacity-50" />

                  {/* Card */}
                  <div className="relative bg-[#0c1222]/95 backdrop-blur-2xl p-8 rounded-3xl border border-white/[0.1] shadow-2xl shadow-black/40 overflow-hidden">
                    {/* Top bar */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-lg shadow-red-500/20" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-lg shadow-yellow-500/20" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-lg shadow-green-500/20" />
                      <span className="ml-3 text-xs text-slate-400 font-mono">
                        developer.ts
                      </span>
                    </div>

                    <pre className="text-[13px] font-mono leading-[1.8]">
                      <code>
                        <span className="text-orange-400">const</span>
                        <span className="text-amber-300"> developer</span>
                        <span className="text-slate-400">{" = {"}</span>
                        {"\n"}
                        <span className="text-slate-500">{"  "}</span>
                        <span className="text-amber-300/80">name</span>
                        <span className="text-slate-500">{": "}</span>
                        <span className="text-emerald-400">"Anup Kumar"</span>
                        <span className="text-slate-500">,</span>
                        {"\n"}
                        <span className="text-slate-500">{"  "}</span>
                        <span className="text-amber-300/80">role</span>
                        <span className="text-slate-500">{": "}</span>
                        <span className="text-emerald-400">
                          "Full Stack & Data Eng."
                        </span>
                        <span className="text-slate-500">,</span>
                        {"\n"}
                        <span className="text-slate-500">{"  "}</span>
                        <span className="text-amber-300/80">experience</span>
                        <span className="text-slate-500">{": "}</span>
                        <span className="text-amber-400">{experienceYear}</span>
                        <span className="text-slate-500">,</span>
                        {"\n"}
                        <span className="text-slate-500">{"  "}</span>
                        <span className="text-amber-300/80">passion</span>
                        <span className="text-slate-500">{": "}</span>
                        <span className="text-emerald-400">
                          "Big Data & AI"
                        </span>
                        <span className="text-slate-500">,</span>
                        {"\n"}
                        <span className="text-slate-500">{"  "}</span>
                        <span className="text-amber-300/80">coffee</span>
                        <span className="text-slate-500">{": "}</span>
                        <span className="text-purple-400">true</span>
                        <span className="text-slate-500">,</span>
                        {"\n"}
                        <span className="text-slate-500">{"};"}</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STATS SECTION — Premium glass cards with glow
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="glass-card-premium card-shine p-10 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  const dynamicValue = stat.dynamic ? experienceYear : stat.value;
                  console.log(dynamicValue);
                  return (
                    <div key={index} className="text-center group cursor-default">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-2xl mb-5 group-hover:scale-110 group-hover:shadow-gold transition-all duration-500 border border-amber-500/20">
                        <Icon className="text-amber-400" size={26} />
                      </div>
                      <div className="text-4xl lg:text-5xl font-extrabold mb-2 font-mono">
                        <span className="gradient-text-primary">
                          <AnimatedCounter value={dynamicValue} />
                        </span>
                        <span className="text-amber-400/50 text-2xl">+</span>
                      </div>
                      <div className="text-slate-400 text-sm font-medium tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT SECTION — Rich narrative cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Sparkles size={18} className="text-midnight" />
                </div>
                <span className="text-sm font-semibold text-amber-400 uppercase tracking-[0.2em]">
                  About Me
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold mb-12 tracking-tight leading-[1.1]">
                <span className="text-white">Turning Ideas into </span>
                <span className="gradient-text-shimmer">Reality</span>
              </h2>
              <div className="space-y-5">
                {[
                  {
                    text: `Software developer with ${experienceYear} years of hands-on experience in implementing and supporting mission-critical business solutions. I specialize in full-stack development and am actively expanding my expertise into Data Engineering.`,
                    icon: Code2,
                  },
                  {
                    text: "My technical expertise includes advanced concepts such as asynchronous programming, higher-order functions, ES6+ features, inheritance, polymorphism, and design pattern implementation. I have successfully delivered projects serving thousands of users with focus on scalability, performance, and user experience.",
                    icon: Cpu,
                  },
                  {
                    text: "Currently working at Schoofi Software Solution, where I lead development of enterprise applications and have resolved 55+ production bugs while implementing critical features from scratch.",
                    icon: Briefcase,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass-card-premium card-shine p-8 flex gap-5 items-start"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:shadow-gold transition-all duration-500">
                      <item.icon className="text-amber-400" size={20} />
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[17px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SKILLS SECTION — Premium cards with glow
      ═══════════════════════════════════════════════════════════ */}
      <section id="skills" className="relative py-32 px-6 lg:px-8">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.01] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Target size={18} className="text-midnight" />
              </div>
              <span className="text-sm font-semibold text-amber-400 uppercase tracking-[0.2em]">
                Technical Expertise
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-16 tracking-tight leading-[1.1]">
              <span className="text-white">Skills & </span>
              <span className="gradient-text-shimmer">Technologies</span>
            </h2>
          </RevealOnScroll>

          {/* Skill Bars Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            {[
              {
                key: "frontend",
                title: "Frontend",
                subtitle: "User Interfaces",
                icon: Code2,
                gradient: "from-amber-500/10 to-orange-500/10",
                border: "border-amber-500/15 hover:border-amber-500/30",
                iconBg: "from-amber-400 to-orange-500",
                barColor: "from-amber-400 to-orange-500",
                barShadow: "shadow-amber-500/50",
              },
              {
                key: "backend",
                title: "Backend",
                subtitle: "Server Architecture",
                icon: Database,
                gradient: "from-orange-500/10 to-red-500/10",
                border: "border-orange-500/15 hover:border-orange-500/30",
                iconBg: "from-orange-400 to-red-500",
                barColor: "from-orange-400 to-red-500",
                barShadow: "shadow-orange-500/50",
              },
              {
                key: "dataEngineering",
                title: "Data Engineering",
                subtitle: "Pipelines & Analytics",
                icon: Layers,
                gradient: "from-amber-600/10 to-yellow-600/10",
                border: "border-amber-600/15 hover:border-amber-600/30",
                iconBg: "from-amber-500 to-yellow-500",
                barColor: "from-amber-500 to-yellow-500",
                barShadow: "shadow-amber-600/50",
              },
              {
                key: "tools",
                title: "Tools & Others",
                subtitle: "Development Ecosystem",
                icon: Palette,
                gradient: "from-emerald-500/10 to-teal-500/10",
                border: "border-emerald-500/15 hover:border-emerald-500/30",
                iconBg: "from-emerald-400 to-teal-500",
                barColor: "from-emerald-400 to-teal-500",
                barShadow: "shadow-emerald-500/50",
              },
            ].map((cat, index) => (
              <RevealOnScroll key={cat.key} delay={index * 100} className="h-full">
                <div
                  className={`bg-gradient-to-br ${cat.gradient} p-8 rounded-3xl border ${cat.border} backdrop-blur-sm transition-all duration-700 group h-full card-shine relative overflow-hidden`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`bg-gradient-to-br ${cat.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    >
                      <cat.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{cat.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {skills[cat.key].map((skill, i) => (
                      <SkillBar
                        key={i}
                        skill={skill}
                        color={cat.barColor}
                        shadow={cat.barShadow}
                      />
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Technical Skills Tags */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <RevealOnScroll key={index} delay={index * 80}>
                  <div className="glass-card-premium p-7 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-xl flex items-center justify-center border border-amber-500/20">
                        <Icon className="text-amber-400" size={18} />
                      </div>
                      <h4 className="font-bold text-white text-[15px]">
                        {category.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[13px] bg-white/[0.03] border border-white/[0.06] text-slate-300 px-4 py-2 rounded-xl font-medium hover:bg-amber-500/[0.08] hover:text-amber-300 hover:border-amber-500/20 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROJECTS SECTION — Featured projects with rich cards
      ═══════════════════════════════════════════════════════════ */}
      <section id="work" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Rocket size={18} className="text-midnight" />
              </div>
              <span className="text-sm font-semibold text-amber-400 uppercase tracking-[0.2em]">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-[1.1]">
              <span className="text-white">Featured </span>
              <span className="gradient-text-shimmer">Projects</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mb-16">
              Real-world applications and data pipelines serving thousands of
              users
            </p>
          </RevealOnScroll>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="group glass-card-premium overflow-hidden card-shine">
                  <div className="grid lg:grid-cols-5 gap-0">
                    <div className="relative overflow-hidden h-72 lg:h-auto lg:col-span-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-multiply`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a]/90 via-[#080d1a]/20 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg">
                          {project.category}
                        </span>
                      </div>
                      {/* Project number */}
                      <div className="absolute bottom-6 left-6">
                        <span className="text-6xl font-black text-white/[0.06]">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-10 lg:col-span-3 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm text-slate-400 font-medium">
                          {project.company}
                        </span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span className="text-sm text-slate-400">
                          {project.period}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-extrabold mb-5 text-white tracking-tight group-hover:text-amber-400 transition-colors duration-500">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 mb-7 leading-relaxed text-[15px]">
                        {project.description}
                      </p>

                      <div className="mb-7">
                        <h4 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm">
                          <Zap className="text-amber-400" size={16} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-slate-300 text-sm"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-amber-400 flex-shrink-0 mt-0.5"
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white/[0.03] border border-white/[0.06] text-slate-300 px-4 py-2 rounded-xl font-medium hover:bg-amber-500/[0.08] hover:text-amber-300 hover:border-amber-500/20 transition-all duration-300 cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EXPERIENCE SECTION — Premium timeline
      ═══════════════════════════════════════════════════════════ */}
      <section id="experience" className="relative py-32 px-6 lg:px-8">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.015] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Briefcase size={18} className="text-midnight" />
              </div>
              <span className="text-sm font-semibold text-amber-400 uppercase tracking-[0.2em]">
                Career
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-16 tracking-tight leading-[1.1]">
              <span className="text-white">Work </span>
              <span className="gradient-text-shimmer">Experience</span>
            </h2>
          </RevealOnScroll>

          <div className="max-w-4xl">
            {experience.map((exp, index) => (
              <RevealOnScroll key={index}>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent hidden lg:block" />

                  <div className="lg:pl-20 relative">
                    {/* Timeline dot */}
                    <div className="absolute left-[19px] top-10 w-[18px] h-[18px] rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-midnight hidden lg:block shadow-lg shadow-amber-500/30 z-10">
                      <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-20" />
                    </div>

                    <div className="glass-card-premium p-8 lg:p-10 card-shine">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

                      <div className="flex flex-wrap justify-between items-start gap-4 mb-7">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2 tracking-tight">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-semibold text-amber-400">
                            {exp.company}
                          </p>
                          <p className="text-slate-400 flex items-center gap-2 mt-2 text-sm">
                            <MapPin size={14} />
                            {exp.location}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-2 bg-amber-500/[0.08] border border-amber-500/20 text-amber-300 px-5 py-2.5 rounded-xl text-sm font-semibold backdrop-blur-sm">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>

                      {exp.description && (
                        <p className="text-slate-300 mb-8 leading-relaxed text-[15px]">
                          {exp.description}
                        </p>
                      )}

                      <div>
                        <h4 className="font-semibold text-white mb-5 flex items-center gap-2 text-sm">
                          <TrendingUp className="text-amber-400" size={16} />
                          Key Contributions
                        </h4>
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-slate-300 text-sm"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-amber-400 flex-shrink-0 mt-0.5"
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EDUCATION SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section id="education" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <GraduationCap size={18} className="text-midnight" />
              </div>
              <span className="text-sm font-semibold text-amber-400 uppercase tracking-[0.2em]">
                Education
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-16 tracking-tight leading-[1.1]">
              <span className="text-white">Academic </span>
              <span className="gradient-text-shimmer">Background</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="max-w-4xl">
              <div className="glass-card-premium p-8 lg:p-10 relative overflow-hidden card-shine">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-500/[0.05] to-transparent rounded-full blur-[80px]" />

                <div className="relative">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-10">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2 tracking-tight">
                        {education.degree}
                      </h3>
                      <p className="text-lg font-semibold text-amber-400">
                        {education.institution}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 bg-amber-500/[0.08] border border-amber-500/20 text-amber-300 px-5 py-2.5 rounded-xl text-sm font-semibold backdrop-blur-sm">
                      <Calendar size={14} />
                      {education.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-6 flex items-center gap-2 text-sm">
                      <Award className="text-amber-400" size={16} />
                      Relevant Coursework
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {education.coursework.map((course, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-slate-300 bg-white/[0.02] px-5 py-3.5 rounded-xl border border-white/[0.04] hover:bg-amber-500/[0.05] hover:border-amber-500/15 hover:text-white transition-all duration-300 text-sm group"
                        >
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0 group-hover:shadow-lg group-hover:shadow-amber-400/50 transition-all duration-300" />
                          <span className="font-medium">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BLOG SECTION — Dynamic-ready blog posts
      ═══════════════════════════════════════════════════════════ */}
      <section id="blog" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <BookOpen size={18} className="text-midnight" />
              </div>
              <span className="text-sm font-semibold text-amber-400 uppercase tracking-[0.2em]">
                Blog
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-[1.1]">
              <span className="text-white">Latest </span>
              <span className="gradient-text-shimmer">Writings</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mb-16">
              Thoughts on data engineering, full-stack development, and the technologies I work with
            </p>
          </RevealOnScroll>

          {/* Featured Post (first post) */}
          {blogPosts.length > 0 && (
            <RevealOnScroll delay={0}>
              <a
                href={blogPosts[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block mb-8"
              >
                <div className="glass-card-premium overflow-hidden card-shine">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden h-64 lg:h-auto">
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0c1222]/60" />
                      <div className="absolute top-5 left-5">
                        <span className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-300">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                          {blogPosts[0].category}
                        </span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span className="text-xs text-slate-500 flex items-center gap-1.5">
                          <Clock size={12} />
                          {blogPosts[0].readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight group-hover:text-amber-400 transition-colors duration-500">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed text-[15px]">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {blogPosts[0].tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white/[0.03] border border-white/[0.06] text-slate-400 px-3 py-1.5 rounded-lg font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        Read Article
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </RevealOnScroll>
          )}

          {/* Remaining Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <RevealOnScroll key={post.id} delay={(index + 1) * 100}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="glass-card-premium overflow-hidden h-full card-shine flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-slate-500">{post.date}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock size={10} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-amber-400 transition-colors duration-500 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-white/[0.03] border border-white/[0.05] text-slate-500 px-2.5 py-1 rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                        Read More
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONTACT SECTION — Premium CTA
      ═══════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem]">
            {/* Rich background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-[#0c1222] to-orange-600/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a]/50 to-transparent" />
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/[0.08] rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-orange-500/[0.05] rounded-full blur-[80px]" />

            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            <div className="relative px-8 py-20 lg:px-16 lg:py-24">
              <RevealOnScroll>
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                    <span className="text-white">Let's Build Something </span>
                    <span className="gradient-text-shimmer">Amazing</span>
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                    I'm currently available for full-time opportunities and
                    freelance projects. Let's discuss how I can contribute to your
                    team.
                  </p>
                </div>
              </RevealOnScroll>

              <div className="grid md:grid-cols-3 gap-5 mb-16">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "anupk2622@gmail.com",
                    href: "mailto:anupk2622@gmail.com",
                    color: "text-amber-400",
                    iconBg: "from-amber-500/15 to-orange-500/15",
                    borderHover: "hover:border-amber-500/30",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 9470899107",
                    href: "tel:+919470899107",
                    color: "text-amber-400",
                    iconBg: "from-amber-500/15 to-yellow-500/15",
                    borderHover: "hover:border-amber-500/30",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "Connect with me",
                    href: "https://www.linkedin.com/in/anup-kumar-4987821a3/",
                    color: "text-orange-400",
                    iconBg: "from-orange-500/15 to-red-500/15",
                    borderHover: "hover:border-orange-500/30",
                    external: true,
                  },
                ].map((contact, i) => (
                  <RevealOnScroll key={i} delay={i * 100}>
                    <a
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noopener noreferrer" : undefined}
                      className={`glass-card-premium p-8 text-center ${contact.borderHover} transition-all duration-500 group block card-shine`}
                    >
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${contact.iconBg} rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-500 border border-white/[0.06]`}>
                        <contact.icon
                          className={contact.color}
                          size={26}
                        />
                      </div>
                      <div className="font-bold text-white mb-1.5 text-lg">
                        {contact.label}
                      </div>
                      <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        {contact.value}
                      </div>
                    </a>
                  </RevealOnScroll>
                ))}
              </div>

              <RevealOnScroll>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:anupk2622@gmail.com"
                    className="btn-primary group"
                  >
                    <span className="flex items-center gap-3">
                      <Send size={18} />
                      Send Message
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anup-kumar-4987821a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View LinkedIn
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER — Premium minimal
      ═══════════════════════════════════════════════════════════ */}
      <footer className="relative py-10 px-6 lg:px-8">
        {/* Top line */}
        <div className="glow-line" />
        <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-midnight font-bold text-xs">A</span>
            </div>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Anup Kumar. Crafted with{" "}
              <Heart size={12} className="inline text-red-400 mx-0.5" /> and lots of
              coffee.
            </p>
          </div>
          <div className="flex gap-2">
            {[
              { icon: Github, href: "https://github.com/anup-2622", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/anup-kumar-4987821a3/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:anupk2622@gmail.com", label: "Email" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:bg-amber-500/[0.08] rounded-xl transition-all duration-300 border border-transparent hover:border-amber-500/20"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
