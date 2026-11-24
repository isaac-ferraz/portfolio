import type { ImageMetadata } from 'astro';
import type { L } from '~/i18n/utils';

import cmsPalco from '~/assets/events/cms-2026/palco.jpg';
import cmsAgente from '~/assets/events/cms-2026/agente-de-voz.jpg';
import cmsPainel from '~/assets/events/cms-2026/painel-cobranca.jpg';
import cmsEstandes from '~/assets/events/cms-2026/estandes.jpg';
import iwEntrada from '~/assets/events/innovation-week-2026/entrada.jpg';
import iwIa from '~/assets/events/innovation-week-2026/palestra-ia-trabalho.jpg';
import iwLayoffs from '~/assets/events/innovation-week-2026/palestra-layoffs.jpg';
import sbcAmigos from '~/assets/events/science-business-connection/amigos.jpg';
import sbcHackathon from '~/assets/events/science-business-connection/hackathon.jpg';

export type EventPhoto = {
  src: ImageMetadata;
  alt: L;
  caption?: L;
  /** Moldura da colagem: retrato 4:5, paisagem 16:9 ou quadrada. */
  shape: 'tall' | 'wide' | 'square';
  /** `object-position` da foto dentro da moldura. */
  focus?: string;
};

export type EventItem = {
  id: string;
  name: string;
  edition?: L;
  when: L;
  where: L;
  /** Como eu estava lá (vai no canhoto do ingresso). */
  role: L;
  topics: L[];
  text: L;
  /** Cor do canhoto. */
  accent: string;
  photos: EventPhoto[];
};

/** Eventos de 2026, do mais recente ao mais antigo. */
export const events: EventItem[] = [
  {
    id: 'cms-2026',
    name: 'CMS Financial Innovation',
    edition: { pt: '2026 · “A era dos agentes”', en: '2026 · “The age of agents”' },
    when: { pt: 'Nov 2026', en: 'Nov 2026' },
    where: { pt: 'São Paulo, SP', en: 'São Paulo, Brazil' },
    role: { pt: 'Participante', en: 'Attendee' },
    topics: [
      { pt: 'IA para cobrança', en: 'AI for collections' },
      { pt: 'Agentes de voz', en: 'Voice agents' },
      { pt: 'Mercado financeiro', en: 'Financial market' },
    ],
    text: {
      pt: 'O encontro de inovação do mercado financeiro. Assisti ao painel “Cobrança: entre as regras e as estratégias” — o mesmo mundo em que trabalho na Cobratec — e testei ao vivo, nos estandes, agentes de IA de voz e texto feitos para cobrança.',
      en: 'The innovation summit of the financial market. I watched the panel “Collections: between the rules and the strategies” — the same world I work in at Cobratec — and, at the booths, tested live AI voice and text agents built for debt collection.',
    },
    accent: '#6d28d9',
    photos: [
      {
        src: cmsPalco, shape: 'square',
        alt: { pt: 'Palco da CMS Financial Innovation iluminado em roxo e azul, com a plateia no escuro.', en: 'The CMS Financial Innovation stage lit in purple and blue, with the audience in the dark.' },
        caption: { pt: 'O palco principal.', en: 'The main stage.' },
      },
      {
        src: cmsAgente, shape: 'tall', focus: '50% 55%',
        alt: { pt: 'Isaac, de costas e com fone de ouvido, testando um agente de IA de voz para cobrança num estande.', en: 'Isaac, seen from behind wearing a headset, testing an AI voice agent for debt collection at a booth.' },
        caption: { pt: 'Testando ao vivo um agente de voz para cobrança.', en: 'Testing a collections voice agent live.' },
      },
      {
        src: cmsPainel, shape: 'tall', focus: '50% 35%',
        alt: { pt: 'Telão do painel “Cobrança: entre as regras e as estratégias”, com os quatro palestrantes.', en: 'Screen for the panel “Collections: between the rules and the strategies”, showing the four speakers.' },
        caption: { pt: 'Painel “Cobrança: entre as regras e as estratégias”.', en: 'Panel “Collections: between the rules and the strategies”.' },
      },
      {
        src: cmsEstandes, shape: 'tall', focus: '50% 75%',
        alt: { pt: 'Pavilhão de estandes lotado, com luzes roxas e o estande da Serasa Experian.', en: 'A packed booth hall with purple lights and the Serasa Experian booth.' },
        caption: { pt: 'O pavilhão dos estandes.', en: 'The booth hall.' },
      },
    ],
  },
  {
    id: 'innovation-week-2026',
    name: 'Innovation Week',
    edition: { pt: 'São José dos Campos · 2026', en: 'São José dos Campos · 2026' },
    when: { pt: '25–27 ago 2026', en: 'Aug 25–27, 2026' },
    where: { pt: 'Parque de Inovação Tecnológica · SJC', en: 'Technology Innovation Park · SJC' },
    role: { pt: 'Participante', en: 'Attendee' },
    topics: [
      { pt: 'IA e trabalho', en: 'AI and work' },
      { pt: 'Feira de inovação', en: 'Innovation fair' },
    ],
    text: {
      pt: 'Três dias de feira e palestras no Parque Tecnológico de São José. As que mais me marcaram foram sobre o impacto da IA no trabalho: quais tarefas estão mais expostas aos modelos e o que os dados dizem — e não dizem — sobre os layoffs.',
      en: 'Three days of exhibits and talks at the São José dos Campos Technology Park. The ones that stuck with me were about AI’s impact on work: which tasks are most exposed to the models, and what the data does — and does not — say about layoffs.',
    },
    accent: '#a21caf',
    photos: [
      {
        src: iwEntrada, shape: 'wide', focus: '40% 50%',
        alt: { pt: 'Entrada da Innovation Week 2026, com o painel do evento e visitantes circulando entre os estandes.', en: 'Entrance of Innovation Week 2026, with the event banner and visitors walking among the booths.' },
        caption: { pt: 'A entrada da feira.', en: 'The fair entrance.' },
      },
      {
        src: iwIa, shape: 'wide', focus: '45% 50%',
        alt: { pt: 'Palestra com o slide “Quais tarefas estão mais expostas à IA”, com um gráfico radial.', en: 'Talk showing the slide “Which tasks are most exposed to AI”, with a radar chart.' },
        caption: { pt: '“Quais tarefas estão mais expostas à IA?”', en: '“Which tasks are most exposed to AI?”' },
      },
      {
        src: iwLayoffs, shape: 'wide', focus: '45% 50%',
        alt: { pt: 'Palestra com o slide “Layoffs? Ainda perto das mínimas históricas” e manchetes sobre IA e demissões.', en: 'Talk showing the slide “Layoffs? Still near historic lows” and headlines about AI and job cuts.' },
        caption: { pt: '“Layoffs? Ainda perto das mínimas históricas.”', en: '“Layoffs? Still near historic lows.”' },
      },
    ],
  },
  {
    id: 'science-business-connection',
    name: 'Science & Business Connection',
    edition: { pt: '4ª edição · 2026', en: '4th edition · 2026' },
    when: { pt: '2026', en: '2026' },
    where: { pt: 'Parque de Inovação Tecnológica · SJC', en: 'Technology Innovation Park · SJC' },
    role: { pt: 'Visitante', en: 'Visitor' },
    topics: [
      { pt: 'Ciência & negócios', en: 'Science & business' },
      { pt: 'Hackathon', en: 'Hackathon' },
    ],
    text: {
      pt: 'Um encontro entre pesquisa e mercado no Parque Tecnológico. Fui como visitante, com dois amigos, e acompanhei o Science Hackathon by TMB.',
      en: 'A meeting point between research and industry at the Technology Park. I went as a visitor with two friends and followed the Science Hackathon by TMB.',
    },
    accent: '#1d4ed8',
    photos: [
      {
        src: sbcAmigos, shape: 'tall', focus: '50% 62%',
        alt: { pt: 'Isaac com dois amigos, de crachá, em frente ao painel do Science & Business Connection.', en: 'Isaac with two friends, wearing badges, in front of the Science & Business Connection banner.' },
        caption: { pt: 'Eu e dois amigos no painel do evento.', en: 'Me and two friends at the event banner.' },
      },
      {
        src: sbcHackathon, shape: 'tall', focus: '50% 62%',
        alt: { pt: 'Auditório com o telão do Science Hackathon by TMB e a plateia sentada.', en: 'Auditorium with the Science Hackathon by TMB screen and the seated audience.' },
        caption: { pt: 'A abertura do Science Hackathon by TMB.', en: 'The opening of the Science Hackathon by TMB.' },
      },
    ],
  },
];
