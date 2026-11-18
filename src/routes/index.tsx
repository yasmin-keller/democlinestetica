import { createFileRoute } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import mobile from "@/assets/abertura-mobile.webp.asset.json";
import desktop from "@/assets/abertura-desktop.webp.asset.json";
import { Button } from "@/components/ui/button";
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
const btn = "h-auto min-h-11 max-w-full whitespace-normal rounded-lg px-6 py-3 text-base shadow-none";
const treatments: [string, string][] = [
  ["Limpeza de pele", "Higienização profunda da pele do rosto, com cosméticos indicados após avaliação."],
  ["Hidratação facial", "Cuidado com cosméticos hidratantes, escolhidos de acordo com o seu tipo de pele."],
  ["Drenagem linfática", "Técnica manual com movimentos suaves, feita após avaliação."],
  ["Massagem relaxante", "Um momento de pausa, com técnica manual e ambiente tranquilo."],
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
      <div className="reveal mx-auto max-w-[1200px] px-5 py-[72px] md:py-[120px]">{children}</div>
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
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <a href="#inicio" className="flex min-h-11 items-center justify-center py-3 font-display text-3xl font-semibold md:py-4 md:text-4xl">Ateliê Sereno</a>
          <nav aria-label="Principal" className="flex flex-wrap justify-center gap-x-5 border-t border-border py-1 text-sm text-muted-foreground md:gap-x-9">
            {nav.map(([id, l]) => <a key={id} href={`#${id}`} className="flex min-h-11 items-center hover:text-foreground">{l}</a>)}
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-[240px] md:pb-20 md:pt-[220px]">
          <picture className="absolute inset-0 -z-20">
            <source media="(min-width: 768px)" srcSet={desktop.url} width={1376} height={768} />
            <img src={mobile.url} alt="Imagem ilustrativa: sala de atendimento estético com maca, toalhas e plantas, iluminada por luz natural." width={928} height={1152} fetchPriority="high" className="h-full w-full object-cover object-center" />
          </picture>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2A2524]/45 via-[#2A2524]/55 to-[#2A2524]/65" />
          <div className="reveal mx-auto w-full max-w-[920px] text-center text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-white/90">Ateliê Sereno · Estética</p>
            <h1 className="editorial-title mx-auto text-[34px] leading-[1.12] min-[375px]:text-[38px] sm:text-5xl md:text-6xl lg:text-[68px]">Cuidados estéticos com calma, avaliação e atenção a você</h1>
            <p className="mx-auto mt-6 max-w-[600px] text-lg text-white/95">Tratamentos faciais e corporais com cosméticos, em Santos. Toda jornada começa com uma avaliação.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Button asChild className={btn}><a href={WHATSAPP_URL}>{CTA}</a></Button>
              <Button asChild variant="link" className="min-h-11 text-base text-white underline"><a href="#tratamentos">Ver tratamentos</a></Button>
            </div>
          </div>
        </section>

        <Section id="tratamentos" alt>
          <h2 className="text-center text-4xl md:text-5xl">Tratamentos</h2>
          <ol className="mt-12 border-t border-border md:mt-16">
            {treatments.map(([n, t], i) => (
              <li key={n} className="grid grid-cols-[48px_minmax(0,1fr)] items-baseline gap-x-4 gap-y-3 border-b border-border py-8 md:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)] md:gap-x-8 md:py-10">
                <span className="font-display text-3xl text-accent md:text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-3xl md:text-4xl">{n}</h3>
                <p className="col-start-2 text-muted-foreground md:col-start-auto">{t}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-[720px] text-center text-sm text-muted-foreground">Não realizamos procedimentos injetáveis. Os tratamentos usam cosméticos e equipamentos regularizados pela Anvisa. [demonstrativo]</p>
        </Section>

        <Section id="como-funciona">
          <h2 className="text-center text-4xl md:text-5xl">Como funciona</h2>
          <ol className="mx-auto mt-12 max-w-[580px] text-center">
            {steps.map((s, i) => (
              <li key={i} className="py-6 first:pt-0 last:pb-0">
                {i > 0 && <div aria-hidden="true" className="mx-auto mb-10 w-16 border-t border-accent" />}
                <span className="font-display text-6xl text-primary md:text-7xl">{i + 1}</span>
                <p className="mt-5 text-lg">{s}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="responsavel" alt>
          <div className="flex flex-col items-center gap-8 text-center">
            <div aria-hidden="true" className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-accent bg-background font-display text-4xl text-primary">AS</div>
            <div>
              <h2 className="text-4xl md:text-5xl">Responsável técnica</h2>
              <p className="mt-4 text-lg">[nome demonstrativo] · esteticista e cosmetóloga [demonstrativo]</p>
              <p className="mt-2 text-muted-foreground">Cada tratamento é indicado após avaliação individual.</p>
            </div>
          </div>
        </Section>

        <Section id="contato">
          <h2 className="text-center text-4xl md:text-5xl">Contato e localização</h2>
          <div className="mt-10 text-center">
            <div>
              <p>Endereço demonstrativo — Embaré, Santos/SP</p>
              <p className="mt-2 text-muted-foreground">[demonstrativo] Ter a sáb, 9h às 19h</p>
              <Button asChild className={`${btn} mt-8`}><a href={WHATSAPP_URL}>{CTA}</a></Button>
            </div>
            <iframe title="Mapa de Santos, SP" src="https://www.google.com/maps?q=Santos,+SP&z=12&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-12 h-80 w-full rounded-lg border border-border md:mt-16 md:h-[480px]" />
            <div className="mx-auto mt-[72px] max-w-[720px]">
              <h3 className="text-2xl md:text-3xl">Perguntas frequentes</h3>
              <div className="mt-8 divide-y divide-border border-y border-border">
                {faq.map(([q, a]) => (
                  <details key={q} className="group">
                    <summary className="relative flex min-h-11 cursor-pointer list-none items-center justify-center px-7 py-5 font-medium">
                      {q}<span aria-hidden="true" className="absolute right-1 text-accent transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="pb-4 text-muted-foreground">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border bg-secondary pb-[72px] md:pb-0">
        <div className="mx-auto max-w-[1200px] space-y-1 px-5 py-10 text-center text-sm text-muted-foreground">
          <p className="font-display text-xl text-foreground">Ateliê Sereno · Estética</p>
          <p>Responsável técnica: [demonstrativo]</p>
          <p>{DEMO_NOTICE}</p>
          <p>Site criado por Yasmin Keller</p>
        </div>
      </footer>

      <Button asChild className={`${btn} fixed inset-x-4 bottom-3 z-30 min-h-12 px-3 text-sm md:hidden`}><a href={WHATSAPP_URL} aria-label={CTA}>{CTA}</a></Button>
    </div>
  );
}
