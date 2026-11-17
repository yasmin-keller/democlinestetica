import { createFileRoute } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import desktop from "@/assets/abertura-desktop.webp.asset.json";
import mobile from "@/assets/abertura-mobile.webp.asset.json";
import { WHATSAPP_URL, DEMO_NOTICE } from "@/config/site";

const TITLE = "Ateliê Sereno · Estética — Projeto demonstrativo | Santos";
const DESC = "Site demonstrativo de um centro de estética fictício em Santos/SP: tratamentos faciais e corporais com cosméticos, sempre a partir de uma avaliação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CTA = "Solicitar avaliação pelo WhatsApp";
const btn = "inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90";
const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);
const treatments = [
  ["Limpeza de pele", "Higienização profunda da pele do rosto, com cosméticos indicados após avaliação.", "M12 3c4 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2-6 6-10z"],
  ["Hidratação facial", "Cuidado com cosméticos hidratantes, escolhidos de acordo com o seu tipo de pele.", "M12 21a7 7 0 0 0 7-7c0-4-7-11-7-11S5 10 5 14a7 7 0 0 0 7 7zM9 14a3 3 0 0 0 3 3"],
  ["Drenagem linfática", "Técnica manual com movimentos suaves, feita após avaliação.", "M3 8c3-2 6 2 9 0s6-2 9 0M3 13c3-2 6 2 9 0s6-2 9 0M3 18c3-2 6 2 9 0s6-2 9 0"],
  ["Massagem relaxante", "Um momento de pausa, com técnica manual e ambiente tranquilo.", "M12 20c-5 0-8-3-8-7 3 0 6 1 8 4 2-3 5-4 8-4 0 4-3 7-8 7zM12 17V9M12 9c-2-2-2-4 0-6 2 2 2 4 0 6z"],
];
const steps = [
  "Você chama no WhatsApp e agenda uma avaliação.",
  "Na avaliação conversamos sobre seus cuidados, rotina e expectativas, e analisamos sua pele.",
  "Indicamos os tratamentos adequados e combinamos as sessões, se fizer sentido para você.",
];
const faq = [
  ["Preciso fazer avaliação antes?", "Sim. A avaliação ajuda a indicar o cuidado adequado para você."],
  ["Como agendo?", "Pelo WhatsApp, no botão desta página."],
  ["Vocês fazem procedimentos injetáveis?", "Não. Trabalhamos com tratamentos com cosméticos e técnicas manuais."],
];
const nav = [["tratamentos", "Tratamentos"], ["como-funciona", "Como funciona"], ["responsavel", "Responsável técnica"], ["contato", "Contato"]];

function Section({ id, alt, children }: { id?: string; alt?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={alt ? "bg-secondary" : ""}>
      <div className="reveal mx-auto max-w-6xl px-5 py-20 md:py-28">{children}</div>
    </section>
  );
}

function Index() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))), { threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <p className="bg-foreground px-4 py-1.5 text-center text-xs text-background">{DEMO_NOTICE}</p>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-5 py-2">
          <a href="#inicio" className="font-display text-xl font-semibold min-h-11 flex items-center">Ateliê Sereno</a>
          <nav aria-label="Principal" className="-mx-5 flex w-[calc(100%+2.5rem)] gap-x-4 overflow-x-auto whitespace-nowrap px-5 text-sm text-muted-foreground md:mx-0 md:w-auto md:px-0">
            {nav.map(([id, l]) => <a key={id} href={`#${id}`} className="flex min-h-11 items-center hover:text-foreground">{l}</a>)}
          </nav>
        </div>
      </header>

      <main className="pt-44 md:pt-28">
        <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-8 md:grid-cols-2 md:pt-16">
          <div className="reveal">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Ateliê Sereno · Estética</p>
            <h1 className="text-5xl md:text-6xl">Cuidados estéticos com calma, avaliação e atenção a você</h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">Tratamentos faciais e corporais com cosméticos, em Santos. Toda jornada começa com uma avaliação.</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href={WHATSAPP_URL} className={btn}>{CTA}</a>
              <a href="#tratamentos" className="flex min-h-11 items-center underline underline-offset-4">Ver tratamentos</a>
            </div>
          </div>
          <picture>
            <source media="(min-width: 768px)" srcSet={desktop.url} />
            <img src={mobile.url} alt="Imagem ilustrativa: sala de atendimento estético com maca, toalhas e plantas, iluminada por luz natural." width={928} height={1152} fetchPriority="high" className="aspect-[4/5] w-full rounded-lg object-cover object-center md:aspect-[4/5]" />
          </picture>
        </section>

        <Section id="tratamentos" alt>
          <h2 className="text-4xl md:text-5xl">Tratamentos</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map(([n, t, d]) => d && (
              <article key={n} className="rounded-lg border border-border bg-background p-6">
                <Icon d={d} />
                <h3 className="mt-5 text-2xl">{n}</h3>
                <p className="mt-2 text-muted-foreground">{t}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">Não realizamos procedimentos injetáveis. Os tratamentos usam cosméticos e equipamentos regularizados pela Anvisa. [demonstrativo]</p>
        </Section>

        <Section id="como-funciona">
          <h2 className="text-4xl md:text-5xl">Como funciona</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={i} className="border-t border-accent pt-6">
                <span className="font-display text-5xl text-primary">{i + 1}</span>
                <p className="mt-3">{s}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="responsavel" alt>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            <div aria-hidden="true" className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-accent bg-background font-display text-4xl text-primary">AS</div>
            <div>
              <h2 className="text-4xl md:text-5xl">Responsável técnica</h2>
              <p className="mt-4 text-lg">Responsável técnica: [nome demonstrativo], esteticista e cosmetóloga [demonstrativo]</p>
              <p className="mt-2 text-muted-foreground">Cada tratamento é indicado após avaliação individual.</p>
            </div>
          </div>
        </Section>

        <Section id="contato">
          <h2 className="text-4xl md:text-5xl">Contato e localização</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <p>Endereço demonstrativo — Embaré, Santos/SP</p>
              <p className="mt-2 text-muted-foreground">[demonstrativo] Ter a sáb, 9h às 19h</p>
              <a href={WHATSAPP_URL} className={`${btn} mt-8`}>{CTA}</a>
              <h3 className="mt-12 text-2xl">Perguntas frequentes</h3>
              <div className="mt-4 divide-y divide-border border-y border-border">
                {faq.map(([q, a]) => (
                  <details key={q} className="group">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between py-3 font-medium">
                      {q}<span aria-hidden="true" className="text-accent transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="pb-4 text-muted-foreground">{a}</p>
                  </details>
                ))}
              </div>
            </div>
            <iframe title="Mapa de Santos, SP" src="https://www.google.com/maps?q=Santos,+SP&z=12&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-lg border border-border md:h-full md:min-h-96" />
          </div>
        </Section>
      </main>

      <footer className="border-t border-border bg-secondary pb-[72px] md:pb-0">
        <div className="mx-auto max-w-6xl space-y-1 px-5 py-10 text-sm text-muted-foreground">
          <p className="font-display text-xl text-foreground">Ateliê Sereno · Estética</p>
          <p>Responsável técnica: [demonstrativo]</p>
          <p>{DEMO_NOTICE}</p>
          <p>Site criado por Yasmin Keller</p>
        </div>
      </footer>

      <a href={WHATSAPP_URL} aria-label={CTA} className="fixed inset-x-4 bottom-3 z-30 flex min-h-12 items-center justify-center rounded-lg bg-primary font-medium text-primary-foreground shadow-lg md:hidden">{CTA}</a>
    </div>
  );
}
