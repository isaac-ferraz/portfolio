import type { ImageMetadata } from 'astro';
import type { L } from '~/i18n/utils';

import igreja from '~/assets/off/igreja-auto-de-pascoa.jpg';
import icCollege from '~/assets/off/ic-college-volta.jpg';
import corinthians from '~/assets/off/corinthians-arena.jpg';

export type Stage = {
  id: string;
  tag: L;
  title: L;
  text: L;
  /** Cor da sombra do card (decorativa). */
  color: string;
  photo?: { src: ImageMetadata; alt: L; focus?: string };
  /** Card de curiosidade: sem foto, com ilustração. */
  bonus?: boolean;
};

/** As "fases" da página Fora do expediente, na ordem em que aparecem. */
export const stages: Stage[] = [
  {
    id: 'igreja',
    tag: { pt: 'Fé', en: 'Faith' },
    title: { pt: 'Servir à igreja', en: 'Serving at church' },
    text: {
      pt: 'Sou apaixonado por servir à igreja. Na foto, o auditório lotado no Auto de Páscoa.',
      en: 'I am passionate about serving at my church. In the photo, a packed auditorium at our Easter play.',
    },
    color: 'var(--accent)',
    photo: {
      src: igreja,
      focus: '50% 60%',
      alt: {
        pt: 'Auditório da igreja lotado durante o Auto de Páscoa, com o elenco vestido de branco no palco sob feixes de luz.',
        en: 'The church auditorium packed during the Easter play, with the cast dressed in white on stage under beams of light.',
      },
    },
  },
  {
    id: 'marcenaria',
    bonus: true,
    tag: { pt: 'Curiosidade', en: 'Fun fact' },
    title: { pt: 'Marcenaria no Auto de Páscoa 2026', en: 'Carpentry for the 2026 Easter play' },
    text: {
      pt: 'Antes de entrar na Cobratec Cobranças, trabalhei como auxiliar de marcenaria no Auto de Páscoa 2026 — trocando o teclado por serrote, trena e pó de serra para ajudar a montar o cenário.',
      en: 'Before joining Cobratec Cobranças, I worked as a carpentry assistant on the 2026 Easter play — trading the keyboard for a saw, a tape measure and sawdust to help build the set.',
    },
    color: '#b7793f',
  },
  {
    id: 'ic-college',
    tag: { pt: '2025', en: '2025' },
    title: { pt: 'Um ano no IC College', en: 'A year at IC College' },
    text: {
      pt: 'Em 2025, passei um ano no IC College. Nesse ano fiz uma viagem missionária pelas cidades do Rio Grande do Sul atingidas pela enchente — a foto é da volta para casa.',
      en: 'In 2025 I spent a year at IC College. That year I went on a mission trip to towns in Rio Grande do Sul hit by the floods — the photo is from the trip home.',
    },
    color: '#38bdf8',
    photo: {
      src: icCollege,
      focus: '40% 50%',
      alt: {
        pt: 'Isaac sorrindo e fazendo joinha no aeroporto, segurando a bandeira do Rio Grande do Sul, com um avião na pista ao fundo.',
        en: 'Isaac smiling and giving a thumbs-up at the airport, holding the Rio Grande do Sul flag, with a plane on the apron behind him.',
      },
    },
  },
  {
    id: 'corinthians',
    tag: { pt: 'Paixão', en: 'Passion' },
    title: { pt: 'Corinthiano', en: 'Corinthians fan' },
    text: {
      pt: 'E sou corinthiano. Na foto, a Fiel lotando a Neo Química Arena.',
      en: 'And I support Corinthians. In the photo, the Fiel packing the Neo Química Arena.',
    },
    color: 'var(--line-strong)',
    photo: {
      src: corinthians,
      focus: '45% 50%',
      alt: {
        pt: 'Arquibancada lotada da Neo Química Arena à noite, com a faixa “Gaviões da Fiel” à beira do gramado.',
        en: 'The packed stands of the Neo Química Arena at night, with the “Gaviões da Fiel” banner at the edge of the pitch.',
      },
    },
  },
];
