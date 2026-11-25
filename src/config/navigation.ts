import type { NavigationConfig } from './types';

export const navigation: NavigationConfig = {
  main: [
    { label: 'Início', href: '/' },
    { label: 'Áreas de atuação', href: '/areas' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],
  cta: { label: 'Agendar atendimento', href: '/contato' },
  footer: [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '/' },
        { label: 'Áreas de atuação', href: '/areas' },
        { label: 'Sobre', href: '/sobre' },
        { label: 'Contato', href: '/contato' },
      ],
    },
    {
      title: 'Áreas',
      links: [
        { label: 'Direito do Consumidor', href: '/areas#consumidor' },
        { label: 'Direito Imobiliário', href: '/areas#imobiliario' },
        { label: 'Direito Civil', href: '/areas#civil' },
        { label: 'Direito do Trabalho', href: '/areas#trabalho' },
      ],
    },
  ],
};
