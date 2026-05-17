import { useEffect, useMemo, useRef, useState } from "react"
import AOS from "aos"
import { motion } from "framer-motion"
import "aos/dist/aos.css"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Atom,
  Beaker,
  BookOpen,
  Download,
  Eye,
  Facebook,
  GraduationCap,
  Instagram,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Music2,
  Moon,
  Phone,
  SunMedium,
  Twitter,
  X
} from "lucide-react"
import heroImage from "./assets/img/deepa.jpg"
import cvFile from "./assets/cv/Deepa-Bhandari-CV.pdf"

const heroIntroMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const cardHoverMotion = {
  whileHover: { y: -6 },
  transition: { duration: 0.2, ease: "easeOut" }
}

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light"

  const storedTheme = window.localStorage.getItem("portfolio-theme")
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const App = () => {
  const formRef = useRef(null)
  const [formStatus, setFormStatus] = useState({ type: "idle", message: "" })
  const [isCvOpen, setIsCvOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(0)
  const [themeMode, setThemeMode] = useState(getInitialTheme)
  const isDarkMode = themeMode === "dark"

  const socialLinks = useMemo(
    () => [
      {
        name: "_dee_paaaa_",
        href: "https://www.instagram.com/_dee_paaaa_",
        Icon: Instagram
      },
      {
        name: "Deepa Bhandari",
        href: "https://www.facebook.com/deepa.bhandari.165",
        Icon: Facebook
      },
      {
        name: "@_Deepa_bhandari",
        href: "https://x.com/_Deepa_bhandari",
        Icon: Twitter
      },
      {
        name: "_deepaaa🐰",
        href: "https://www.tiktok.com/@_deepaaa_bhandariii_",
        Icon: Music2
      }
    ],
    []
  )

  const education = [
    {
      year: "2025",
      title: "MSc Chemistry",
      place: "Amrit Science Campus (ASCOL)"
    },
    {
      year: "2024",
      title: "Bachelor's in Chemistry",
      place: "Butwal Multiple Campus"
    },
    {
      year: "2019",
      title: "+2 Science",
      place: "Manimukunda Secondary School/College"
    }
  ]

  const skills = [
    { label: "Chemistry Teaching", Icon: BookOpen },
    { label: "Research Methodology", Icon: Microscope },
    { label: "Electrochemistry", Icon: Atom },
    { label: "Laboratory Techniques", Icon: Beaker },
    { label: "Data Analysis", Icon: LineChart }
  ]

  const projects = [
    {
      title: "Recent advances in HER electrocatalysis derived from Fe, Co, Ni, and Mo-based phosphides",
      description:
        "This summarizes transition metal phosphides (Fe, Co, Ni, Mo and their alloys) as efficient catalysts for hydrogen production via water electrolysis. It highlights their mechanisms, synthesis, and performance improvements through alloying and structural design, along with current limitations and future research directions for better efficiency and scalability.",
      citation:
        "Kandel M.R., Dhakal P.P., Chapagain K.R., Thapa J.R., Kandel L., Bhatt T.D., Karki B., Ghimire M., Bhandari D. (2026). Discover Electrochemistry, Vol. 3, Article 8.",
      link: "https://link.springer.com/article/10.1007/s44373-026-00095-5",
      focus: ["Metal phosphides", "HER", "Electrocatalysis", "Review", "Clean hydrogen"]
    }
  ]

  const experience = [
    {
      role: "Chemistry Teacher",
      place: "Secondary level schools",
      detail:
        "Delivered board-focused lessons, weekly assessments, and lab-centered demonstrations for grades 8-12."
    },
    {
      role: "Science Tutor",
      place: "College preparation classes",
      detail:
        "Guided students through concept mapping, numericals, and experiment planning with measurable academic gains."
    }
  ]


  const quickFacts = [
    { label: "Location", value: "Banasthali, Kathmandu, Nepal" },
    { label: "Research", value: "LDH electrocatalysis, water splitting" },
    { label: "Current Degree", value: "MSc Chemistry" },
    { label: "Availability", value: "Open to collaboration" }
  ]

  const researchHighlights = [
    {
      title: "Low-cost HER catalysts",
      metric: "Fe/Co/Ni/Mo phosphides",
      detail:
        "Transition metal phosphides (Fe, Co, Ni, Mo and their alloys) are identified as low-cost, highly active, and stable alternatives to noble metal catalysts for HER."
    },
    {
      title: "Performance optimization",
      metric: "Alloying + phosphidation",
      detail:
        "Catalytic performance improves through alloying, phosphidation, and structural engineering that optimize hydrogen adsorption energy and enhance charge-transfer kinetics."
    },
    {
      title: "Future research directions",
      metric: "In situ + screening",
      detail:
        "Next steps include multi-metal catalyst design, in situ/operando characterization, and computational screening to improve activity, stability, and scalability."
    }
  ]


  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormStatus({ type: "loading", message: "Sending message..." })

    const serviceId = "YOUR_SERVICE_ID"
    const templateId = "YOUR_TEMPLATE_ID"
    const publicKey = "YOUR_PUBLIC_KEY"

    try {
      const { default: emailjs } = await import("@emailjs/browser")
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey
      })
      formRef.current.reset()
      setFormStatus({ type: "success", message: "Message sent successfully." })
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "EmailJS not configured yet. Add your keys to enable sending."
      })
    }
  }

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" })
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleThemeChange = (event) => {
      if (!window.localStorage.getItem("portfolio-theme")) {
        setThemeMode(event.matches ? "dark" : "light")
      }
    }

    mediaQuery.addEventListener("change", handleThemeChange)
    return () => mediaQuery.removeEventListener("change", handleThemeChange)
  }, [])

  useEffect(() => {
    const title = "Deepa Bhandari | MSc Chemistry Student & Teacher"
    const description =
      "Deepa Bhandari is an MSc Chemistry student and educator focused on electrocatalysis, HER, OER, and sustainable energy research."

    document.title = title

    const ensureMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement("meta")
        document.head.appendChild(element)
      }
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
    }

    ensureMeta('meta[name="description"]', { name: "description", content: description })
    ensureMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: isDarkMode ? "#0b1020" : "#fbf7ff"
    })
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: title })
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description
    })
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" })
    ensureMeta('meta[property="og:image"]', { property: "og:image", content: heroImage })
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" })
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title })
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description })
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: heroImage })

    const setIcon = (rel, sizes, type) => {
      let link = document.head.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ""}`)
      if (!link) {
        link = document.createElement("link")
        document.head.appendChild(link)
      }
      link.setAttribute("rel", rel)
      if (sizes) link.setAttribute("sizes", sizes)
      else link.removeAttribute("sizes")
      if (type) link.setAttribute("type", type)
      link.setAttribute("href", heroImage)
    }

    setIcon("icon", null, "image/jpeg")
    setIcon("apple-touch-icon", "180x180", null)
    document.documentElement.classList.toggle("dark", isDarkMode)
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light"
  }, [isDarkMode])

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark"
    setThemeMode(nextTheme)
    window.localStorage.setItem("portfolio-theme", nextTheme)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? Math.min(100, Math.round((scrollTop / maxScroll) * 100)) : 0
      setScrollProgress(progress)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isNavOpen) return
    const handleKey = (event) => {
      if (event.key === "Escape") setIsNavOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isNavOpen])

  const dividerClass =
    "mx-auto my-2 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#CDB4DB]/60 to-transparent"

  return (
    <div
      className={`chem-pattern min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#1e1b4b] text-slate-100"
          : "bg-gradient-to-br from-[#FAF9F6] via-[#FFF1F6] to-[#F3E8FF] text-[#333333]"
      }`}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#333333]"
      >
        Skip to content
      </a>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#CDB4DB]/45 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-[#BDE0FE]/45 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-[#A8E6CF]/35 blur-3xl" />
        <Atom className="float-slow absolute left-10 top-24 h-10 w-10 text-[#CDB4DB]/50" />
        <Beaker className="float-slow absolute right-16 top-48 h-12 w-12 text-[#FFC8DD]/50" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[#EAD7F5] bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-lg font-semibold tracking-tight text-[#3a3340] dark:text-slate-100">
            Deepa Bhandari
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#7b7084] md:flex dark:text-slate-300">
            <a className="transition hover:text-[#3d3642] dark:hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-[#3d3642] dark:hover:text-white" href="#education">
              Education
            </a>
            <a className="transition hover:text-[#3d3642] dark:hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-[#3d3642] dark:hover:text-white" href="#research">
              Research
            </a>
            <a className="transition hover:text-[#3d3642] dark:hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-[#3d3642] dark:hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-full border border-[#EAD7F5] bg-white/80 p-2 text-[#6a5c72] transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
              title={isDarkMode ? "Light mode" : "Dark mode"}
            >
              {isDarkMode ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full border border-[#EAD7F5] bg-white/80 px-4 py-2 text-sm font-semibold text-[#4a3b51] shadow-sm transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800 md:inline-flex"
            >
              Let’s Connect
            </a>
            <button
              type="button"
              onClick={() => setIsNavOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-[#EAD7F5] bg-white/80 p-2 text-[#6a5c72] transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <main className="relative">
        <section
          id="home"
          data-aos="fade-up"
          className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-16 pt-16 sm:px-6 lg:flex-row lg:items-center lg:pt-24"
        >
          <motion.div className="flex-1" initial="hidden" animate="visible" variants={heroIntroMotion}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#EAD7F5] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6a5c72]">
              MSc Chemistry Student | Teacher
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-[#2f2a33] sm:text-5xl">
              Deepa Bhandari
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[#5b5560]">
              Passionate about teaching and sustainable energy research.
            </p>
            <p className="mt-5 max-w-xl text-base text-[#6e6676]">
              MSc Chemistry student focused on electrocatalysis, water splitting, and clean hydrogen pathways,
              while shaping confident, curious learners in the classroom.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href={cvFile}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFC8DD] via-[#CDB4DB] to-[#BDE0FE] px-6 py-3 text-sm font-semibold text-[#3d3642] shadow-[0_12px_30px_rgba(205,180,219,0.35)] transition hover:-translate-y-0.5 dark:border dark:border-slate-700 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 dark:text-slate-100 dark:shadow-[0_12px_30px_rgba(2,6,23,0.45)]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4" />
                Download CV
              </motion.a>
              <motion.button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-[#EAD7F5] bg-white/80 px-6 py-3 text-sm font-semibold text-[#4a3b51] transition hover:bg-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="h-4 w-4" />
                Preview CV
              </motion.button>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#EAD7F5] bg-white/80 px-6 py-3 text-sm font-semibold text-[#4a3b51] transition hover:bg-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </motion.a>
            </div>
            <div className="mt-8 grid gap-3 rounded-3xl border border-[#EAD7F5] bg-white/70 p-5 shadow-[0_18px_40px_rgba(205,180,219,0.2)] sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-[#EAD7F5] bg-white/80 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7f94]">{fact.label}</p>
                  <p className="mt-1 text-sm font-semibold text-[#3d3642]">{fact.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#EAD7F5] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#6a5c72] transition hover:border-[#CDB4DB] hover:text-[#3d3642]"
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </a>
              ))}
            </div>
          </motion.div>
          <div className="flex flex-1 items-center justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFC8DD]/60 via-transparent to-[#BDE0FE]/40 blur-2xl" />
              <img
                src={heroImage}
                alt="Deepa Bhandari"
                loading="lazy"
                decoding="async"
                className="relative h-72 w-72 rounded-full border border-[#EAD7F5] object-cover shadow-[0_20px_60px_rgba(205,180,219,0.45)] sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              />
            </div>
          </div>
        </section>

        <div className={dividerClass} />

        <section id="about" data-aos="fade-up" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div>
            <div className="grid gap-8 rounded-3xl border border-[#EAD7F5] bg-white/75 p-8 shadow-[0_18px_40px_rgba(205,180,219,0.2)] lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27ac7]">About Me</p>
                <h2 className="font-display mt-3 text-3xl font-semibold text-[#2f2a33]">Chemistry educator with a research-driven lens.</h2>
                <p className="mt-4 text-base text-[#5b5560]">
                  Based in Banasthali, Kathmandu, Nepal, I balance postgraduate chemistry study with hands-on teaching. My academic work centers on
                  electrocatalysts for HER and OER, aiming to design sustainable water splitting pathways.
                </p>
                <p className="mt-4 text-base text-[#6e6676]">
                  In the classroom, I connect complex topics to real-world energy systems, encouraging students to think critically
                  and experiment with confidence.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-[#EAD7F5] bg-white/80 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#b27ac7]" />
                  <div>
                    <p className="text-sm font-semibold text-[#3d3642]">Location</p>
                    <p className="text-sm text-[#6e6676]">Banasthali, Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Atom className="mt-1 h-5 w-5 text-[#b27ac7]" />
                  <div>
                    <p className="text-sm font-semibold text-[#3d3642]">Research Interests</p>
                    <p className="text-sm text-[#6e6676]">Electrocatalysis, HER, OER, sustainable energy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-1 h-5 w-5 text-[#b27ac7]" />
                  <div>
                    <p className="text-sm font-semibold text-[#3d3642]">Focus</p>
                    <p className="text-sm text-[#6e6676]">Teaching + research synergy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={dividerClass} />

        <section id="education" data-aos="fade-up" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-3xl font-semibold text-[#2f2a33]">Education</h2>
              <GraduationCap className="h-6 w-6 text-[#b27ac7]" />
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {education.map((item) => (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-[#EAD7F5] bg-white/75 p-6 shadow-[0_16px_35px_rgba(205,180,219,0.2)]"
                  data-aos="zoom-in"
                  {...cardHoverMotion}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7f94]">{item.year}</p>
                  <h3 className="mt-3 text-lg font-semibold text-[#2f2a33]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#6e6676]">{item.place}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className={dividerClass} />

        <section id="skills" data-aos="fade-up" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-3xl font-semibold text-[#2f2a33]">Skills</h2>
              <Beaker className="h-6 w-6 text-[#b27ac7]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map(({ label, Icon }) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-[#EAD7F5] bg-white/75 p-5 shadow-[0_16px_35px_rgba(205,180,219,0.2)]"
                  data-aos="fade-up"
                  {...cardHoverMotion}
                >
                  <span className="rounded-full bg-[#F3E8FF] p-2 text-[#b27ac7]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold text-[#2f2a33]">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className={dividerClass} />

        <section id="research" data-aos="fade-up" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-3xl font-semibold text-[#2f2a33]">Research & Projects</h2>
              <Microscope className="h-6 w-6 text-[#b27ac7]" />
            </div>
            <div className="grid gap-6 lg:grid-cols-1">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  className="rounded-3xl border border-[#EAD7F5] bg-white/75 p-6 shadow-[0_18px_40px_rgba(205,180,219,0.22)] transition-transform hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(205,180,219,0.35)]"
                  data-aos="zoom-in"
                  {...cardHoverMotion}
                >
                  <h3 className="text-lg font-semibold text-[#2f2a33]">{project.title}</h3>
                  <p className="mt-3 text-sm text-[#6e6676]">{project.description}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7f94]">Publication</p>
                  <p className="mt-2 text-sm text-[#6e6676]">{project.citation}</p>
                  <motion.button
                    type="button"
                    onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFC8DD] via-[#CDB4DB] to-[#BDE0FE] px-5 py-3 text-sm font-semibold text-[#3d3642] shadow-[0_12px_28px_rgba(205,180,219,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(205,180,219,0.45)] dark:border dark:border-slate-700 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 dark:text-slate-100 dark:shadow-[0_12px_28px_rgba(2,6,23,0.45)] dark:hover:shadow-[0_16px_34px_rgba(2,6,23,0.55)]"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View publication
                  </motion.button>
                  <p className="mt-4 rounded-2xl border border-[#EAD7F5] bg-white/80 px-4 py-3 text-sm text-[#6e6676]">
                    Heartfelt gratitude to Dr. Mani Ram Kandel sir for his invaluable guidance, motivation, and constant support. I
                    look forward to working more under your mentorship.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#EAD7F5] bg-white/80 px-3 py-1 text-xs font-semibold text-[#6a5c72]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-[#EAD7F5] bg-white/75 p-6" data-aos="fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7f94]">Research Focus</p>
              <div className="mt-4 flex flex-col items-center gap-4 text-sm font-semibold text-[#6a5c72] sm:flex-row sm:justify-center">
                <div className="rounded-full border border-[#EAD7F5] bg-white/80 px-4 py-2">Metal phosphides</div>
                <ArrowRight className="h-4 w-4 text-[#b27ac7]" />
                <div className="rounded-full border border-[#EAD7F5] bg-white/80 px-4 py-2">HER activity</div>
                <ArrowRight className="h-4 w-4 text-[#b27ac7]" />
                <div className="rounded-full border border-[#EAD7F5] bg-white/80 px-4 py-2">Water electrolysis</div>
                <ArrowRight className="h-4 w-4 text-[#b27ac7]" />
                <div className="rounded-full border border-[#EAD7F5] bg-white/80 px-4 py-2">Clean hydrogen</div>
              </div>
            </div>
            <div className="mt-6 rounded-3xl border border-[#EAD7F5] bg-white/75 p-6" data-aos="fade-up">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7f94]">Research Highlights</p>
                  <h3 className="mt-2 text-lg font-semibold text-[#2f2a33]">{researchHighlights[highlightIndex].title}</h3>
                  <p className="mt-2 text-sm text-[#6e6676]">{researchHighlights[highlightIndex].detail}</p>
                </div>
                <div className="rounded-2xl border border-[#EAD7F5] bg-white/80 px-4 py-3 text-sm font-semibold text-[#b27ac7]">
                  {researchHighlights[highlightIndex].metric}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setHighlightIndex((prev) => (prev - 1 + researchHighlights.length) % researchHighlights.length)
                  }
                  className="rounded-full border border-[#EAD7F5] bg-white/80 p-2 text-[#6a5c72] transition hover:bg-white"
                  aria-label="Previous highlight"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setHighlightIndex((prev) => (prev + 1) % researchHighlights.length)}
                  className="rounded-full border border-[#EAD7F5] bg-white/80 p-2 text-[#6a5c72] transition hover:bg-white"
                  aria-label="Next highlight"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7f94]">
                  {highlightIndex + 1} / {researchHighlights.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={dividerClass} />


        <section id="experience" data-aos="fade-up" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-3xl font-semibold text-[#2f2a33]">Experience</h2>
              <BookOpen className="h-6 w-6 text-[#b27ac7]" />
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {experience.map((item) => (
                <motion.div
                  key={item.role}
                  className="rounded-2xl border border-[#EAD7F5] bg-white/75 p-6 shadow-[0_16px_35px_rgba(205,180,219,0.2)]"
                  data-aos="fade-up"
                  {...cardHoverMotion}
                >
                  <h3 className="text-lg font-semibold text-[#2f2a33]">{item.role}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#b27ac7]">{item.place}</p>
                  <p className="mt-3 text-sm text-[#6e6676]">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className={dividerClass} />


        <section id="contact" data-aos="fade-up" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div>
            <div className="grid gap-8 rounded-3xl border border-[#EAD7F5] bg-white/75 p-8 shadow-[0_18px_40px_rgba(205,180,219,0.22)] lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27ac7]">Contact</p>
                <h2 className="font-display mt-3 text-3xl font-semibold text-[#2f2a33]">Let’s build the next learning breakthrough.</h2>
                <p className="mt-4 text-sm text-[#6e6676]">
                  Reach out for collaborations in sustainable energy research, curriculum design, or mentoring programs.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href="tel:9862907670"
                    className="flex items-center gap-3 text-sm font-semibold text-[#6a5c72] transition hover:text-[#3d3642]"
                  >
                    <Phone className="h-4 w-4" />
                    9862907670
                  </a>
                  <a
                    href="mailto:bhandarideepa2057@gmail.com"
                    className="flex items-center gap-3 text-sm font-semibold text-[#6a5c72] transition hover:text-[#3d3642]"
                  >
                    <Mail className="h-4 w-4" />
                    bhandarideepa2057@gmail.com
                  </a>
                  {socialLinks.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-sm font-semibold text-[#6a5c72] transition hover:text-[#3d3642]"
                    >
                      <Icon className="h-4 w-4" />
                      {name}
                    </a>
                  ))}
                </div>
              </div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {formStatus.type === "success" && (
                  <div className="rounded-2xl border border-emerald-300/60 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Thanks for reaching out. I will respond within 1-2 business days.
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="user_name"
                    placeholder="Full name"
                    className="rounded-2xl border border-[#EAD7F5] bg-white/90 px-4 py-3 text-sm text-[#333333] placeholder:text-[#9a8da3] focus:border-[#CDB4DB] focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]/30"
                  />
                  <input
                    required
                    type="email"
                    name="user_email"
                    placeholder="Email address"
                    className="rounded-2xl border border-[#EAD7F5] bg-white/90 px-4 py-3 text-sm text-[#333333] placeholder:text-[#9a8da3] focus:border-[#CDB4DB] focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]/30"
                  />
                </div>
                <input
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-2xl border border-[#EAD7F5] bg-white/90 px-4 py-3 text-sm text-[#333333] placeholder:text-[#9a8da3] focus:border-[#CDB4DB] focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]/30"
                />
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or class needs"
                  className="w-full resize-none rounded-2xl border border-[#EAD7F5] bg-white/90 px-4 py-3 text-sm text-[#333333] placeholder:text-[#9a8da3] focus:border-[#CDB4DB] focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]/30"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFC8DD] via-[#CDB4DB] to-[#BDE0FE] px-6 py-3 text-sm font-semibold text-[#3d3642] shadow-[0_12px_30px_rgba(205,180,219,0.35)] transition hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  Send Message
                </button>
                {formStatus.message && (
                  <p
                    className={`text-xs font-semibold ${
                      formStatus.type === "success" ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}
                <p className="text-xs text-[#9a8da3]">
                  EmailJS placeholders: Service ID, Template ID, and Public Key.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {isCvOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10">
          <div className="relative w-full max-w-3xl rounded-3xl border border-[#EAD7F5] bg-white p-4 shadow-[0_20px_50px_rgba(205,180,219,0.35)]">
            <div className="flex items-center justify-between px-2 pb-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7f94]">CV Preview</p>
                <p className="text-sm font-semibold text-[#2f2a33]">Deepa Bhandari</p>
              </div>
                <button
                type="button"
                onClick={() => setIsCvOpen(false)}
                  className="rounded-full border border-[#EAD7F5] bg-white/80 p-2 text-[#6a5c72] transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <iframe
              title="Deepa Bhandari CV"
              src={cvFile}
              className="h-[70vh] w-full rounded-2xl border border-[#EAD7F5]"
            />
          </div>
        </div>
      )}

      {isNavOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 px-4 py-6">
          <div className="mx-auto h-full w-full max-w-sm rounded-3xl border border-[#EAD7F5] bg-white p-6 shadow-[0_20px_50px_rgba(205,180,219,0.35)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a7f94]">Menu</p>
              <button
                type="button"
                onClick={() => setIsNavOpen(false)}
                className="rounded-full border border-[#EAD7F5] bg-white/80 p-2 text-[#6a5c72] transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-3 text-base font-semibold text-[#6a5c72]">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Education", href: "#education" },
                { label: "Skills", href: "#skills" },
                { label: "Research", href: "#research" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                  className="rounded-2xl border border-[#EAD7F5] bg-white/80 px-4 py-3 transition hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#EAD7F5] bg-white/80 text-[#6a5c72] shadow-[0_10px_20px_rgba(205,180,219,0.25)] transition hover:bg-white ${
          scrollProgress > 8 ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          background: `conic-gradient(#CDB4DB ${scrollProgress}%, rgba(255,255,255,0.9) 0)`
        }}
        aria-label="Back to top"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <ArrowUp className="h-4 w-4" />
        </span>
      </button>

      <footer className="border-t border-[#EAD7F5] bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-[#7b7084] sm:flex-row sm:px-6">
          <p>© 2026 Deepa Bhandari. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, href, Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="text-[#7b7084] transition hover:text-[#3d3642]">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App