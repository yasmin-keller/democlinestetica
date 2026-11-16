# Ateliê Sereno · Estética — plano (página única)

## Dados que faltam / ficarão como [demonstrativo]
- Nome da responsável técnica → "[nome demonstrativo]"
- Endereço completo → "Endereço demonstrativo — Embaré, Santos/SP" (mapa só em nível de cidade)
- Horários → "[demonstrativo] Ter a sáb, 9h às 19h"
- Nota Anvisa → marcada "[demonstrativo]"
- Imagem de compartilhamento: URL absoluta só após publicar (até lá, sem og:image)
- Favicon: não informado (fica o padrão)
- Imagens: a horizontal (1376×768) vira abertura-desktop.webp; a vertical (928×1152) vira abertura-mobile.webp

## Seções
0. Faixa fixa no topo: "Projeto demonstrativo — marca e dados fictícios, criado para portfólio." + menu (Tratamentos · Como funciona · Responsável técnica · Contato), com âncoras.
1. Abertura — H1, subtítulo, botão WhatsApp + "Ver tratamentos"; foto à direita (desktop) / abaixo (celular) via <picture>, sem lazy.
2. Tratamentos — 4 cartões com ícone de linha + nota Anvisa.
3. Como funciona — 3 passos numerados (fundo alternado).
4. Responsável técnica — círculo "AS", texto e frase de avaliação individual.
5. Contato — endereço, horário, mapa de Santos (iframe simples do Google Maps, sem chave), botão WhatsApp, FAQ em acordeão (3 perguntas).
Rodapé — nome, responsável [demonstrativo], frase demonstrativa, "Site criado por Yasmin Keller"; espaço extra de ~72px para o botão flutuante no celular.

## Técnico
- Número do WhatsApp em um único arquivo de configuração.
- Cores/fontes da direção "Editorial claro" como tokens; Cormorant Garamond + DM Sans via link.
- Revelação leve (fade + 12px, 400ms) com IntersectionObserver; desligada com movimento reduzido.
- Sem backend, sem bibliotecas de animação, sem imagens geradas.
- Verificação sem rolagem lateral em 320, 390 e 1440px; title/description pedidos; lang="pt-BR".
