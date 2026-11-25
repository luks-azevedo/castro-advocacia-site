/**
 * Dados da Castro Advocacia.
 * Fonte: briefing preenchido pelo escritório (nov/2026) e Instagram @castro.adv_.
 * Publicidade conforme o Provimento 205/2021 do CFOAB — revisar com o escritório.
 */
import type { SiteConfig } from './types';

export const site: SiteConfig = {
  demo: false,
  name: 'Castro Advocacia',
  // Identificação exigida na publicidade da advocacia — acrescentar o nº da OAB quando informado
  legalName: 'Carolina Araújo · Advogada',
  cnpj: '',
  description:
    'Advocacia especializada em Direito Civil, do Consumidor, Imobiliário e do Trabalho. Atendimento presencial em Belo Horizonte e Conselheiro Lafaiete e online em todo o Brasil.',
  segment: 'Advocacia',
  domain: '',
  logo: {
    src: '',
    alt: 'Castro Advocacia',
    width: 0,
    height: 0,
    wordmark: 'CASTRO',
    tagline: 'Advocacia Especializada',
  },
  favicon: '/favicon.svg',
  contact: {
    phone: '',
    // CONFIRMAR: o briefing informa "31 9206-7107" (8 dígitos). Celulares têm 9 dígitos;
    // foi considerado (31) 99206-7107.
    whatsapp: '5531992067107',
    whatsappMessage: 'Olá! Vim pelo site da Castro Advocacia e gostaria de agendar um atendimento.',
    email: '',
    hours: 'Presencial em Belo Horizonte e Conselheiro Lafaiete · Online em todo o Brasil',
  },
  address: {
    street: '',
    district: '',
    city: '',
    state: '',
    zip: '',
    mapsUrl: '',
  },
  social: {
    instagram: 'https://www.instagram.com/castro.adv_/',
    facebook: '',
    linkedin: 'https://www.linkedin.com/in/carolina-ara%C3%BAjo-de-castro-b1b58324a/',
    youtube: '',
  },
  schemaType: 'LegalService',
  areaServed: ['Belo Horizonte, MG', 'Conselheiro Lafaiete, MG', 'Brasil'],
  seo: {
    titleTemplate: '%s | Castro Advocacia',
    defaultTitle: 'Castro Advocacia — Advocacia especializada em BH e Conselheiro Lafaiete',
    defaultDescription:
      'Direito Civil, do Consumidor, Imobiliário e do Trabalho. Atendimento presencial em Belo Horizonte e Conselheiro Lafaiete e online em todo o Brasil.',
    ogImage: '/images/og-default.png',
    locale: 'pt_BR',
    language: 'pt-BR',
  },
};

/** Advogada responsável — o nº da OAB é obrigatório na publicidade (Provimento 205/2021). */
export const lawyer = {
  name: 'Carolina Araújo',
  role: 'Advogada',
  // PENDENTE: informar UF e número de inscrição (ex.: 'OAB/MG 000.000')
  oab: '',
};
