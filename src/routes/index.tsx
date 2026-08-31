import { createFileRoute } from "@tanstack/react-router";
import { Menu, Leaf, Droplets, Wind, Sun, ArrowUpRight } from "lucide-react";
import heroVideo from "@/assets/hero-seamless.webm.asset.json";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";
import { HeroVideo } from "@/components/HeroVideo";
import bottleImg from "@/assets/bottle.jpg";
import originsImg from "@/assets/origins.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BROION — Untouched Nature, Bottled Fresh" },
      {
        name: "description",
        content:
          "BROION bottles untouched nature: cold-pressed botanicals, citrus and wild herbs for your daily clarity and peace of mind.",
      },
      { property: "og:title", content: "BROION — Untouched Nature, Bottled Fresh" },
      {
        property: "og:description",
        content:
          "Cold-pressed botanicals, citrus and wild herbs for your daily clarity and peace of mind.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Ingredients", "The Ritual", "Origins", "Sustainability"];

const pillars = [
  {
    icon: Leaf,
    title: "Wild Harvested",
    body: "Moss, nettle and mountain mint gathered by hand from untouched valleys.",
  },
  {
    icon: Droplets,
    title: "Cold Pressed",
    body: "Never heated, never diluted — every bottle keeps its living enzymes.",
  },
  {
    icon: Wind,
    title: "Clean Breath",
    body: "A crisp botanical finish that clears the head in a single sip.",
  },
  {
    icon: Sun,
    title: "Slow Bottled",
    body: "Small batches, sealed within hours of harvest at the source.",
  },
];

const ritual = [
  { step: "01", title: "Chill", body: "Rest the bottle for two hours until the glass sweats." },
  { step: "02", title: "Breathe", body: "Open it slowly and let the herb aroma rise first." },
  { step: "03", title: "Sip", body: "Three long sips, eyes closed, no screen in sight." },
];

const flavours = [
  { name: "Moss & Lime", note: "Earthy, bright, mineral finish" },
  { name: "Nettle & Pear", note: "Soft green, gently sweet" },
  { name: "Fir & Citrus", note: "Alpine, resinous, cold" },
];

const botanicalIndex = [
  { number: "01", name: "Mountain Nettle", origin: "North slope", character: "Mineral · green" },
  { number: "02", name: "Silver Fir", origin: "Upper canopy", character: "Alpine · resinous" },
  { number: "03", name: "Wild Mint", origin: "River edge", character: "Cold · lucid" },
  { number: "04", name: "Forest Pear", origin: "Eastern grove", character: "Soft · luminous" },
];

const batchNotes = [
  { label: "Picked", value: "04:48", detail: "Before the valley warms" },
  { label: "Pressed", value: "08:12", detail: "At the forest station" },
  { label: "Sealed", value: "10:31", detail: "Batch 024 · 612 bottles" },
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* ---------------- HERO ---------------- */}
      <div className="relative min-h-screen overflow-hidden">
        <HeroVideo
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          poster={heroPoster.url}
        />

        <header className="relative z-20 flex items-center justify-between border-b border-foreground/15 px-5 py-4 md:px-8">
          <div className="flex items-center gap-4 md:gap-10">
            <div className="flex h-8 w-8 items-center justify-center bg-foreground text-background">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
              </svg>
            </div>
            <span className="font-display text-base tracking-[0.18em] md:text-lg">BROION</span>
          </div>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s|the\s/g, "")}`}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/75 transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <a
              href="#origins"
              className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/75 transition-colors hover:text-foreground sm:inline"
            >
              See Map
            </a>
            <button aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        <section className="relative z-10 flex min-h-[calc(100vh-65px)] flex-col justify-between">
          <h1 className="mt-4 flex items-baseline justify-between gap-4 whitespace-nowrap px-5 font-display text-[8vw] leading-[0.9] tracking-tight md:px-8">
            <span>BREATHE</span>
            <span>THE</span>
          </h1>

          <div className="flex flex-col gap-8 px-5 pb-8 md:flex-row md:items-end md:justify-between md:px-8 md:pb-10">
            <div className="max-w-[14rem]">
              <span className="mb-4 inline-flex items-center gap-1 border border-foreground/40 px-2 py-1">
                <span className="h-2.5 w-2.5 rounded-full border border-foreground/70" />
                <span className="h-2.5 w-2.5 rounded-full border border-foreground/70" />
              </span>
              <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em]">
                Untouched nature, bottled for your daily clarity and peace of mind.
              </p>
            </div>
            <span className="whitespace-nowrap font-display text-[11vw] leading-[0.85] tracking-tight text-hero-echo md:text-[8vw]">
              FRESHNESS
            </span>
          </div>
        </section>
      </div>

      {/* ---------------- MARQUEE STRIP ---------------- */}
      <div className="overflow-hidden border-y border-foreground/10 bg-card py-3">
        <div className="flex gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/60">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>Cold Pressed</span>
              <span>·</span>
              <span>Zero Sugar</span>
              <span>·</span>
              <span>Wild Harvested</span>
              <span>·</span>
              <span>Glass Only</span>
              <span>·</span>
              <span>Carbon Negative</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- PILLARS ---------------- */}
      <section id="ingredients" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
            01 — Ingredients
          </p>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
            Four rules we never break
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group bg-background p-7 transition-colors duration-300 hover:bg-card"
            >
              <Icon className="h-5 w-5 text-foreground/70 transition-colors group-hover:text-foreground" />
              <h3 className="mt-6 font-display text-lg tracking-wide">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- BOTANICAL INDEX ---------------- */}
      <section className="border-y border-foreground/10 bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
                02 — Botanical Index
              </p>
              <h2 className="mt-4 max-w-md font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
                The living architecture of every bottle
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/60">
                Four wild notes form the backbone of BROION. Each is gathered only when its oils
                are brightest, then pressed together before the morning fades.
              </p>
            </div>

            <ol className="divide-y divide-foreground/10 border-y border-foreground/10">
              {botanicalIndex.map((botanical) => (
                <li
                  key={botanical.number}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 sm:grid-cols-[3rem_1fr_8rem_8rem] sm:items-center"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/35">
                    {botanical.number}
                  </span>
                  <span className="font-display text-lg tracking-wide">{botanical.name}</span>
                  <span className="col-start-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45 sm:col-start-auto">
                    {botanical.origin}
                  </span>
                  <span className="col-start-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/65 sm:col-start-auto sm:text-right">
                    {botanical.character}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCT SPLIT ---------------- */}
      <section className="border-y border-foreground/10 bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div className="relative">
            <img
              src={bottleImg}
              alt="BROION botanical drink bottle resting on wet moss-covered stone"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-[26rem] w-full object-cover md:h-[34rem]"
            />
            <span className="absolute bottom-4 left-4 border border-foreground/30 bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] backdrop-blur-sm">
              250 ml · Glass
            </span>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
              03 — The Bottle
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
              A forest, folded into 250 ml
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/65">
              Each bottle carries eleven wild botanicals pressed at first light. No sugar, no
              concentrate, no shortcuts — just the taste of standing under old trees after rain.
            </p>

            <ul className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
              {flavours.map((f) => (
                <li key={f.name} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="font-display text-lg tracking-wide">{f.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                    {f.note}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="mt-10 inline-flex items-center gap-2 border border-foreground/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
            >
              Shop the range <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- RITUAL ---------------- */}
      <section id="ritual" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
          04 — The Ritual
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
          Three minutes of quiet, on purpose
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {ritual.map((r) => (
            <div key={r.step} className="border-t border-foreground/20 pt-6">
              <span className="font-display text-4xl text-hero-echo">{r.step}</span>
              <h3 className="mt-4 font-display text-xl tracking-wide">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- BATCH TRACE ---------------- */}
      <section className="border-y border-foreground/10 bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
                05 — Batch Trace
              </p>
              <h2 className="mt-4 max-w-xl font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
                One morning, preserved in glass
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-foreground/60">
              Every release keeps the time and place of its making. Batch 024 travelled only
              seven kilometres from leaf to bottle.
            </p>
          </div>

          <div className="mt-14 grid border-y border-foreground/10 md:grid-cols-3 md:divide-x md:divide-foreground/10">
            {batchNotes.map((note) => (
              <div key={note.label} className="border-b border-foreground/10 py-7 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45">
                    {note.label}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <p className="mt-8 font-display text-4xl text-hero-echo md:text-5xl">{note.value}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55">
                  {note.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ORIGINS ---------------- */}
      <section id="origins" className="relative overflow-hidden border-y border-foreground/10">
        <img
          src={originsImg}
          alt="Misty mossy old-growth forest where BROION botanicals are harvested"
          width={1280}
          height={960}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-veil" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/70">
            06 — Origins
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
            Harvested at 1,240 m, in valleys with no roads
          </h2>
          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-10 md:grid-cols-4">
            {[
              ["11", "Wild botanicals"],
              ["0", "Grams of sugar"],
              ["6h", "Harvest to bottle"],
              ["100%", "Recycled glass"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-3xl md:text-4xl">{value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
          07 — Voices
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
          Quiet people, loud opinions
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 md:grid-cols-3">
          {[
            {
              quote: "It tastes like the first breath after stepping out of a pine forest.",
              name: "Mara L.",
              role: "Trail runner",
            },
            {
              quote: "I replaced my afternoon coffee with BROION. My head has never been clearer.",
              name: "Jonas K.",
              role: "Architect",
            },
            {
              quote: "The only drink on my studio shelf. Nothing else comes close to this finish.",
              name: "Aiko T.",
              role: "Ceramic artist",
            },
          ].map((t) => (
            <figure key={t.name} className="bg-background p-8 transition-colors hover:bg-card">
              <blockquote className="font-display text-lg leading-snug tracking-wide">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em]">{t.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------------- SUSTAINABILITY BAND ---------------- */}
      <section id="sustainability" className="border-y border-foreground/10 bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
              08 — Sustainability
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
              We take less than the forest regrows
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/65">
              Every harvest is mapped, measured and capped. For each bottle sold, we fund the
              protection of one square metre of old-growth valley — forever.
            </p>
            <a
              href="#cta"
              className="mt-10 inline-flex items-center gap-2 border border-foreground/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
            >
              Our pledge <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-foreground/10 bg-foreground/10">
            {[
              ["12k m²", "Valley protected"],
              ["-0.4kg", "CO₂ per bottle"],
              ["1:1", "Regrowth ratio"],
              ["0", "Plastic, ever"],
            ].map(([value, label]) => (
              <div key={label} className="bg-background p-7">
                <p className="font-display text-2xl md:text-3xl">{value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- JOURNAL ---------------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50">
              09 — Journal
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
              Notes from the valley
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/60 transition-colors hover:text-foreground md:inline-flex"
          >
            All entries <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
          {[
            ["Harvest Log 14", "First light on the north slope — mint is early this year", "Field notes"],
            ["The Case for Cold", "Why we never heat a single leaf", "Process"],
            ["Glass, Again", "On bottles that come back to us and leave again", "Design"],
          ].map(([title, excerpt, tag]) => (
            <a
              key={title}
              href="#"
              className="group flex flex-col gap-2 py-6 transition-colors md:flex-row md:items-baseline md:justify-between"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                  {tag}
                </span>
                <h3 className="font-display text-xl tracking-wide transition-colors group-hover:text-foreground/80">
                  {title}
                </h3>
              </div>
              <p className="max-w-sm text-sm text-foreground/55">{excerpt}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section id="cta" className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1] tracking-tight md:text-6xl">
          Bottled freshness, delivered monthly
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-foreground/60">
          Join the ritual. Six bottles at your door every month, with the harvest notes from the
          valley they came from.
        </p>
        <form
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            aria-label="Email address"
            className="w-full border border-foreground/25 bg-transparent px-4 py-3 font-mono text-xs tracking-wide text-foreground placeholder:text-foreground/35 focus:border-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap border border-foreground bg-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background transition-opacity hover:opacity-80"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-foreground/10 bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
          <span className="font-display text-lg tracking-[0.18em]">BROION</span>
          <nav className="flex flex-wrap gap-6">
            {[...navItems, "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55 transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
            © {new Date().getFullYear()} BROION
          </p>
        </div>
      </footer>
    </main>
  );
}
