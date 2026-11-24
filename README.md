# Portfólio — Isaac Ferraz de Oliveira

Portfólio de desenvolvedor full-stack e engenheiro de IA (LLMOps, NLP e automação no
setor financeiro), estudante de **Análise e Desenvolvimento de Sistemas** na **FATEC São José dos Campos — Prof. Jessen Vidal** (RA 1460482611003).

- **No ar:** <https://isaac-ferraz.github.io/portfolio/> (PT-BR) · <https://isaac-ferraz.github.io/portfolio/en/> (EN)
- A versão anterior, em estilo Windows XP / Frutiger Aero e sem JavaScript, continua no histórico do git (até o commit `cb38054`).

## O que tem aqui

Uma página única com rolagem coreografada, em sete seções numeradas no estilo de HQ:
**Sobre**, **Jornada**, **Skills**, **Projetos** (profissionais, acadêmicos e
pessoais), **Formação**, **Eventos** e **Contato**. Cada projeto tem também uma página própria.

Um botão de fliperama no hero leva à página **Fora do expediente**
(`/fora-do-expediente/`, em inglês `/en/off-the-clock/`): quem eu sou fora do trabalho,
como uma tela de seleção de fases de arcade.

| Seção | No desktop | No celular/tablet |
| --- | --- | --- |
| Hero | Nome entrando letra a letra (só CSS), personagem recortado e balões que se afastam com o scroll; a retícula segue o mouse | Personagem acima do nome, mesma entrada |
| Sobre | Manifesto fixado; as palavras acendem com o scroll | Acendem com o scroll, sem fixar |
| Jornada | Caminho em SVG que se desenha passando por seis quadrinhos | Linha vertical que se preenche |
| Skills | Faixa com os cargos do LinkedIn, letreiros cuja velocidade e inclinação seguem o scroll + grade de habilidades (IA primeiro) | Um letreiro + grade |
| Profissionais | Trilho horizontal fixado, com snap, contador e barra de progresso | Carrossel nativo com `scroll-snap` |
| Acadêmicos e Pessoais | Grade escalonada, reveal e tilt no hover | Uma coluna |
| Eventos | Cada evento é um ingresso (canhoto picotado + tira de polaroids); a foto abre no lightbox | Canhoto vira faixa no topo; fotos em carrossel com `scroll-snap` |

Um mascote no canto acompanha a leitura: a fala muda a cada seção e o clique leva à próxima.

## Stack

| | |
| --- | --- |
| Framework | [Astro 7](https://astro.build) (site estático), TypeScript no modo `strictest` |
| Conteúdo | Content collections com schema Zod — um YAML bilíngue por projeto em `src/content/projects/` |
| Idiomas | i18n do Astro: PT-BR sem prefixo, inglês em `/en/`; textos de interface em `src/i18n/ui.ts` |
| CSS | Escrito à mão, com `@layer`, tokens em custom properties e tema claro/escuro via `light-dark()` |
| Movimento | GSAP 3 (ScrollTrigger) + Lenis, dentro de `gsap.matchMedia()` (desktop, celular, movimento reduzido) |
| Transições | View Transitions nativas entre documentos: a capa do card "vira" a página do projeto |
| Imagens | `astro:assets` → AVIF/WebP em larguras responsivas; imagens OG geradas no build com satori + resvg |
| Testes | Playwright + axe-core |

## Desempenho e acessibilidade

- **JS inicial: ~3 KB gzip.** GSAP e Lenis (~51 KB gzip) só são baixados na primeira
  interação (scroll, toque, mouse ou teclado). Quem pede movimento reduzido nunca os baixa,
  e todo o conteúdo já aparece na primeira pintura.
- A entrada do hero é feita só com `transform` em CSS: o texto é pintado já no primeiro
  quadro e não atrasa o LCP. Animações em loop usam só `transform`/`opacity`, e os
  letreiros pausam fora da tela.
- Lighthouse (celular): **99 / 100 / 100 / 100** na home e **100 / 100 / 100 / 100** nas
  páginas de projeto; CLS ≈ 0.
- axe-core sem violações (WCAG 2.1 AA) nos dois temas; skip link, foco visível, lightbox
  em `<dialog>` (Esc fecha e devolve o foco) e trilho fixado navegável por teclado.

## Confidencialidade

Os projetos da Cobratec mostram **dados de exemplo**, com aviso no card, na página e na
galeria. Depois de todo build, `scripts/guard-confidential.mjs` falha se o `dist/` tiver
IP privado, a porta `:5432`, EXIF em alguma imagem ou um termo do `.confidential-denylist`
(arquivo local, fora do git).

## Comandos

```sh
npm install
npm run dev        # servidor de desenvolvimento
npm run check      # astro check (tipos)
npm run build      # build + guarda de confidencialidade + checagem dos links com /portfolio/
npm run preview    # serve o build em http://localhost:4321/portfolio/
npm run test:e2e   # Playwright + axe (rodar depois do build)
```

## Estrutura

```
src/
  assets/hero/         personagem recortado e busto do mascote
  assets/projects/     imagens de cada projeto
  assets/events/       fotos dos eventos (uma pasta por evento)
  assets/off/          fotos da página Fora do expediente
  components/          seções da home, cards, página de detalhe, mascote, lightbox
  content/projects/    um YAML bilíngue por projeto
  data/                perfil, jornada, habilidades, formação, eventos, fases do Fora do expediente
  i18n/                textos de interface e utilitários de rota
  pages/               rotas PT, EN e imagens OG
  scripts/site.ts      comportamento leve de todas as páginas
  scripts/motion.ts    coreografia de scroll (carregada sob demanda)
  styles/              tokens e base
scripts/               guarda de confidencialidade, checagem de links, recorte do personagem
tests/                 Playwright + axe
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) faz o build e publica no GitHub Pages a
cada push na `master`. O Pages do repositório precisa estar com a fonte em **GitHub Actions**.

## Recorte do personagem

`scripts/cutout.py` remove o fundo da ilustração com `rembg` (modelo `isnet-general-use`).
Rode sempre com teto de memória — numa máquina de 7 GB, o modelo `birefnet` passou de
9 GB e foi morto pelo sistema:

```sh
systemd-run --user --scope -p MemoryMax=1800M -p MemorySwapMax=256M \
  venv/bin/python scripts/cutout.py ilustracao.jpg saida/ isnet-general-use
```
