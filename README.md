# Democlinestetica

Antes de executar: liste os dados que faltam e me mostre um plano curto das seções. Use apenas as informações abaixo. Não invente endereço real, preço, depoimentos, avaliações, certificações, equipe, números ou resultados. Não conecte Supabase nem nenhum banco de dados ou backend. Não use bibliotecas de animação pesadas. Não crie nem gere imagens: vou anexar as imagens.

PROJETO
Site demonstrativo (portfólio) de um centro de estética FICTÍCIO chamado "Ateliê Sereno · Estética", em Santos/SP. Este site não representa um negócio real.

FAIXA OBRIGATÓRIA
No topo de todas as telas, uma faixa fina, fixa e discreta, mas legível: "Projeto demonstrativo — marca e dados fictícios, criado para portfólio." Repita a mesma frase no rodapé.

PÚBLICO
Adultos de Santos e região que procuram cuidados estéticos faciais e corporais com cosméticos, em um ambiente tranquilo, e querem marcar uma avaliação sem complicação.

AÇÃO PRINCIPAL
Solicitar avaliação pelo WhatsApp. Todo CTA abre:
https://wa.me/WHATSAPP_NUMERO?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20solicitar%20uma%20avaliação.
Defina WHATSAPP_NUMERO = "5511945343249" em um único arquivo de configuração. Rótulo do botão: "Solicitar avaliação pelo WhatsApp". Botão flutuante de WhatsApp no celular, sem cobrir conteúdo nem o rodapé (rodapé com padding-bottom de ~72px).

MENU
Tratamentos · Como funciona · Responsável técnica · Contato. Todos rolam até a seção correspondente (sem ícones de link externo).

SEÇÕES (página única, máximo 5 + rodapé)
1. Abertura: título (único H1) "Cuidados estéticos com calma, avaliação e atenção a você". Subtítulo: "Tratamentos faciais e corporais com cosméticos, em Santos. Toda jornada começa com uma avaliação." CTA principal + link secundário "Ver tratamentos" (âncora). Imagem à direita no desktop e abaixo do texto no celular, com o foco reposicionado.
2. Tratamentos: 4 cartões com ícone de linha, nome e 1 frase neutra, sem promessa de resultado, prazo ou número de sessões:
   - "Limpeza de pele": "Higienização profunda da pele do rosto, com cosméticos indicados após avaliação."
   - "Hidratação facial": "Cuidado com cosméticos hidratantes, escolhidos de acordo com o seu tipo de pele."
   - "Drenagem linfática": "Técnica manual com movimentos suaves, feita após avaliação."
   - "Massagem relaxante": "Um momento de pausa, com técnica manual e ambiente tranquilo."
   Abaixo dos cartões, uma nota pequena: "Não realizamos procedimentos injetáveis. Os tratamentos usam cosméticos e equipamentos regularizados pela Anvisa. [demonstrativo]"
3. Como funciona: 3 passos numerados: (1) Você chama no WhatsApp e agenda uma avaliação. (2) Na avaliação conversamos sobre seus cuidados, rotina e expectativas, e analisamos sua pele. (3) Indicamos os tratamentos adequados e combinamos as sessões, se fizer sentido para você.
4. Responsável técnica: bloco sem foto de rosto (círculo com as iniciais "AS"). Texto: "Responsável técnica: [nome demonstrativo], esteticista e cosmetóloga [demonstrativo]". Frase: "Cada tratamento é indicado após avaliação individual." Nada de títulos, prêmios, anos de experiência ou certificações.
5. Contato e localização: "Endereço demonstrativo — Embaré, Santos/SP". Horários: "[demonstrativo] Ter a sáb, 9h às 19h". Mapa incorporado do Google Maps centralizado em "Santos, SP" (nível de cidade). CTA de WhatsApp repetido. FAQ em acordeão acessível com 3 perguntas:
   - "Preciso fazer avaliação antes?" → "Sim. A avaliação ajuda a indicar o cuidado adequado para você."
   - "Como agendo?" → "Pelo WhatsApp, no botão desta página."
   - "Vocês fazem procedimentos injetáveis?" → "Não. Trabalhamos com tratamentos com cosméticos e técnicas manuais."

RODAPÉ
Nome fictício, "Responsável técnica: [demonstrativo]", a frase de projeto demonstrativo e "Site criado por Yasmin Keller". Sem link de Instagram.

PROIBIDO NESTE SITE
Fotos ou simulações de "antes e depois", corpos ou rostos para comparação, promessas de resultado ("rejuvenesça", "elimine", "resultado garantido"), números de sessões ou prazos, depoimentos, estrelas, preços, promoções, marcas de cosméticos ou equipamentos, menção a botox, preenchimento, harmonização, laser, microagulhamento, peeling químico ou qualquer procedimento injetável ou médico.

DIREÇÃO VISUAL — "Editorial claro"
- Paleta: fundo #FBF8F6; seções alternadas #F4ECE7; texto principal #2A2524; texto secundário #6B5F5B; cor de ação rosé-terracota escuro #8C4F45 (texto branco no botão, contraste AA); detalhe nude #D9B8A7 só em ícones e divisores; bordas #EADFD8.
- Tipografia: títulos em Cormorant Garamond (peso 500–600, tamanhos grandes); corpo em DM Sans, mínimo 16px no celular, altura de linha 1,6.
- Foto grande, muito espaço negativo, linhas finas como divisores, cantos de 8px, ícones de linha finos.
- Tom do texto: calmo, direto, sem exagero e sem jargão.

MOVIMENTO (opcional e leve)
Apenas fade + subida de 12px ao revelar cada seção, 400ms. Com prefers-reduced-motion: reduce, tudo estático. Sem parallax, vídeo ou carrossel automático.

IMAGENS
Use as imagens anexadas: abertura-desktop.webp a partir de 768px e abertura-mobile.webp abaixo disso, com <picture>, sem lazy na abertura, object-fit: cover com foco no centro. Alt: "Imagem ilustrativa: sala de atendimento estético com maca, toalhas e plantas, iluminada por luz natural." Use abertura-desktop.webp como imagem de compartilhamento (Open Graph); depois da publicação ajuste para a URL absoluta.

QUALIDADE
- Responsivo, sem rolagem lateral em 320, 390 e 1440px.
- Toque ≥ 44px, foco visível no teclado, contraste AA.
- Um único H1; textos essenciais em HTML.
- SEO: title "Ateliê Sereno · Estética — Projeto demonstrativo | Santos", meta description específica, alt em todas as imagens, lang="pt-BR".
- Imagens otimizadas; nada de lorem ipsum ou marca de template.

Ao final, me mostre a prévia e liste o que ficou como [demonstrativo] ou pendente.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://democlinestetica.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a38474f3-2263-47b8-bdbf-aebe11d312b4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
