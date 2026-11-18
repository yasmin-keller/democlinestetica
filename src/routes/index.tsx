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
const btn = "h-auto min-h-11 max-w-full whitespace-normal rounded-full px-7 py-3 text-base shadow-none";
const ALT = "Imagem ilustrativa: sala de atendimento estético com maca, toalhas e plantas, iluminada por luz natural.";

const treatments: [string, string, string][] = [
  ["Facial", "Limpeza de pele", "Higienização profunda da pele do rosto, com cosméticos indicados após avaliação."],
  ["Facial", "Hidratação facial", "Cuidado com cosméticos hidratantes, escolhidos de acordo com o seu tipo de pele."],
  ["Corporal", "Drenagem linfática", "Técnica manual com movimentos suaves, feita após avaliação."],
  ["Corporal", "Massagem relaxante", "Um momento de pausa, com técnica manual e ambiente tranquilo."],
];
const steps: [string, string][] = [
  ["Agende", "Você chama no WhatsApp e agenda uma avaliação."],
  ["Avaliação", "Conversamos sobre seus cuidados, rotina e expectativas, e analisamos sua pele."],
  ["Seu plano", "Indicamos os tratamentos adequados e combinamos as sessões, se fizer sentido para você."],
];
const faq = [
  ["Preciso fazer avaliação antes?", "Sim. A avaliação ajuda a indicar o cuidado adequado para você."],
  ["Como agendo?", "Pelo WhatsApp, no botão desta página."],
  ["Vocês fazem procedimentos injetáveis?", "Não. Trabalhamos com tratamentos com cosméticos e técnicas manuais."],
];
const nav = [["tratamentos", "Tratamentos"], ["como-funciona", "Como funciona"], ["sobre", "Sobre"], ["contato", "Contato"]];

function Section({ id, alt, children }: { id?: string; alt?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={alt ? "bg-secondary" : ""}>
      <div className="reveal mx-auto max-w-[1200px] px-5 py-16 md:py-24">{children}</div>
    </section>
  );
}

function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return <p className={`mb-4 text-xs font-medium uppercase tracking-[0.2em] ${light ? "text-white/85" : "text-primary"}`}>{children}</p>;
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
        <p className="bg-foreground px-4 py-1 text-center text-[11px] leading-snug text-background md:text-xs">{DEMO_NOTICE}</p>
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 px-5 md:h-16">
          <a href="#inicio" className="font-display text-2xl font-semibold md:text-[28px]">Ateliê Sereno</a>
          <nav aria-label="Principal" className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {nav.map(([id, l]) => <a key={id} href={`#${id}`} className="flex min-h-11 items-center hover:text-foreground">{l}</a>)}
            <a href={WHATSAPP_URL} className="flex min-h-11 items-center rounded-full border border-primary px-5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Agendar avaliação</a>
          </nav>
          <a href="#contato" className="flex min-h-11 items-center text-sm text-primary underline underline-offset-4 md:hidden">Contato</a>
        </div>
      </header>

      <main>
        {/* Abertura: foto como fundo */}
        <section id="inicio" className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-32 md:pt-36">
          <picture className="absolute inset-0 -z-20">
            <source media="(min-width: 768px)" srcSet={desktop.url} width={1376} height={768} />
            <img src={mobile.url} alt={ALT} width={928} height={1152} fetchPriority="high" className="h-full w-full object-cover object-center" />
          </picture>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2A2524]/40 via-[#2A2524]/55 to-[#2A2524]/70" />
          <div className="reveal mx-auto w-full max-w-[880px] text-center text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]">
            <Eyebrow light>Centro de estética · Santos</Eyebrow>
            <h1 className="editorial-title mx-auto text-[36px] leading-[1.1] min-[375px]:text-[40px] sm:text-5xl md:text-6xl lg:text-[68px]">Cuidados estéticos com calma, avaliação e <em className="font-normal">atenção a você</em></h1>
            <p className="mx-auto mt-6 max-w-[560px] text-lg text-white/95">Tratamentos faciais e corporais com cosméticos. Toda jornada começa com uma avaliação.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Button asChild className={btn}><a href={WHATSAPP_URL}>{CTA}</a></Button>
              <a href="#tratamentos" className="flex min-h-11 items-center text-base text-white underline underline-offset-4">Ver tratamentos</a>
            </div>
          </div>
        </section>

        {/* Tratamentos: grade 2x2 */}
        <Section id="tratamentos">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow>Tratamentos</Eyebrow>
              <h2 className="text-4xl md:text-5xl">Cuidados para rosto e corpo</h2>
            </div>
            <p className="max-w-[380px] text-muted-foreground">Todos os tratamentos usam cosméticos e técnicas manuais, indicados depois da avaliação.</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 md:gap-6">
            {treatments.map(([tag, n, t]) => (
              <li key={n} className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent md:p-9">
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs uppercase tracking-[0.15em] text-primary">{tag}</span>
                <h3 className="mt-5 text-2xl md:text-3xl">{n}</h3>
                <p className="mt-3 text-muted-foreground">{t}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-muted-foreground">Não realizamos procedimentos injetáveis. Os tratamentos usam cosméticos e equipamentos regularizados pela Anvisa. [demonstrativo]</p>
        </Section>

        {/* Faixa de destaque */}
        <section className="bg-primary text-primary-foreground">
          <div className="reveal mx-auto max-w-[1000px] px-5 py-14 text-center md:py-20">
            <p className="font-display text-3xl leading-snug md:text-5xl"><em>“Toda jornada começa com uma avaliação.”</em></p>
          </div>
        </section>

        {/* Como funciona: 3 colunas */}
        <Section id="como-funciona" alt>
          <div className="text-center">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="text-4xl md:text-5xl">Do primeiro contato ao seu plano</h2>
          </div>
          <div className="relative mt-12 md:mt-16">
            <div aria-hidden="true" className="absolute left-[16.6%] right-[16.6%] top-7 hidden border-t border-dashed border-accent md:block" />
            <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map(([t, s], i) => (
                <li key={t} className="text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background font-display text-2xl text-primary ring-1 ring-accent">{i + 1}</span>
                  <h3 className="mt-5 text-2xl">{t}</h3>
                  <p className="mx-auto mt-2 max-w-[300px] text-muted-foreground">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* Sobre: imagem + responsável técnica */}
        <Section id="sobre">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16">
            <picture className="block aspect-[4/5] max-h-[560px] overflow-hidden rounded-2xl">
              <img src="/atelie-detalhe.webp" alt="Imagem ilustrativa: toalhas enroladas, vaso com eucalipto e potes de vidro âmbar sobre mesa de madeira clara." width={928} height={1152} loading="lazy" className="h-full w-full object-cover object-center" />
            </picture>
            <div>
              <Eyebrow>O ateliê</Eyebrow>
              <h2 className="text-4xl md:text-5xl">Um espaço pensado para você desacelerar</h2>
              <p className="mt-5 text-lg text-muted-foreground">Cada tratamento é indicado após avaliação individual, em um ambiente tranquilo e sem pressa.</p>
              <div className="mt-8 flex items-center gap-5 rounded-2xl border border-border p-5">
                <div aria-hidden="true" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-2xl text-primary">AS</div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Responsável técnica</p>
                  <p className="mt-1">[nome demonstrativo] · esteticista e cosmetóloga [demonstrativo]</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Contato: duas colunas */}
        <Section id="contato" alt>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <Eyebrow>Contato</Eyebrow>
              <h2 className="text-4xl md:text-5xl">Vamos marcar sua avaliação?</h2>
              <dl className="mt-6 space-y-3">
                <div><dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Endereço</dt><dd>Endereço demonstrativo — Embaré, Santos/SP</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Horários</dt><dd>[demonstrativo] Ter a sáb, 9h às 19h</dd></div>
              </dl>
              <Button asChild className={`${btn} mt-8`}><a href={WHATSAPP_URL}>{CTA}</a></Button>
              <h3 className="mt-12 text-2xl">Perguntas frequentes</h3>
              <div className="mt-4 divide-y divide-border border-y border-border">
                {faq.map(([q, a]) => (
                  <details key={q} className="group">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium">
                      {q}<span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="pb-4 text-muted-foreground">{a}</p>
                  </details>
                ))}
              </div>
            </div>
            <iframe title="Mapa de Santos, SP" src="https://www.google.com/maps?q=Santos,+SP&z=12&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-2xl border border-border md:h-full md:min-h-[480px]" />
          </div>
        </Section>
      </main>

      <footer className="bg-foreground pb-[80px] text-background md:pb-0">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-10 text-sm text-background/75 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl text-background">Ateliê Sereno · Estética</p>
            <p className="mt-1">Responsável técnica: [demonstrativo]</p>
          </div>
          <div className="md:text-right">
            <p>{DEMO_NOTICE}</p>
            <p>Site criado por Yasmin Keller</p>
          </div>
        </div>
      </footer>

      <Button asChild className={`${btn} fixed inset-x-4 bottom-3 z-30 min-h-12 px-3 text-sm shadow-lg md:hidden`}><a href={WHATSAPP_URL} aria-label={CTA}>{CTA}</a></Button>
    </div>
  );
}
