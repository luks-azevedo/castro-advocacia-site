/**
 * Conteúdo das páginas da Castro Advocacia.
 *
 * Fontes: briefing do escritório e temas que o próprio escritório já publica no
 * Instagram @castro.adv_ (negativação, golpe do Pix, plano de saúde, voos, contratos
 * de imóvel, usucapião, união estável, inventário, PJ, insalubridade etc.).
 *
 * Regras (Provimento 205/2021): caráter informativo, sem promessa de resultado,
 * sem honorários, sem depoimentos de clientes, sem superlativos.
 * Itens marcados com CONFIRMAR dependem de validação do escritório.
 */
import ShoppingBag from '@lucide/astro/icons/shopping-bag';
import House from '@lucide/astro/icons/house';
import Scale from '@lucide/astro/icons/scale';
import Briefcase from '@lucide/astro/icons/briefcase';
import Stamp from '@lucide/astro/icons/stamp';
import ShieldCheck from '@lucide/astro/icons/shield-check';
import Handshake from '@lucide/astro/icons/handshake';
import MapPin from '@lucide/astro/icons/map-pin';
import Video from '@lucide/astro/icons/video';
import MessageCircle from '@lucide/astro/icons/message-circle';

import retrato from '../assets/images/carolina-retrato.jpg';
import cafe from '../assets/images/carolina-cafe.jpg';
import poltrona from '../assets/images/carolina-poltrona.jpg';
import type { ContentImage, FAQItem, FeatureItem, ServiceItem } from '../types/content';

export const photos = {
  hero: { src: retrato, alt: 'Advogada Carolina Araújo, da Castro Advocacia' } satisfies ContentImage,
  about: { src: cafe, alt: 'Carolina Araújo sentada em um sofá, segurando uma xícara de café' } satisfies ContentImage,
  profile: { src: poltrona, alt: 'Carolina Araújo sentada em uma poltrona clara' } satisfies ContentImage,
};

export const areas: ServiceItem[] = [
  {
    id: 'consumidor',
    icon: ShoppingBag,
    title: 'Direito do Consumidor',
    description: 'Orientação e atuação em conflitos com empresas, bancos, companhias aéreas e planos de saúde.',
    details: [
      'Negativação indevida do nome',
      'Golpes e fraudes bancárias, como o golpe do Pix',
      'Negativa de cobertura de plano de saúde',
      'Cancelamentos, atrasos e overbooking de voos',
      'Produtos e serviços com defeito',
      'Contas de redes sociais invadidas',
    ],
  },
  {
    id: 'imobiliario',
    icon: House,
    title: 'Direito Imobiliário',
    description: 'Mais segurança na compra, venda, locação e regularização de imóveis.',
    details: [
      'Análise de contratos de compra e venda',
      'Distrato e desistência na compra de imóvel',
      'Contratos de locação',
      'Usucapião e imóveis sem escritura',
      'Verificação documental antes de comprar',
      'Locação por temporada e regras de condomínio',
    ],
  },
  {
    id: 'civil',
    icon: Scale,
    title: 'Direito Civil',
    description: 'Questões do dia a dia que envolvem família, patrimônio e responsabilidade civil.',
    details: [
      'União estável e partilha de bens',
      'Regime de bens no casamento',
      'Inventário',
      'Indenizações por danos morais, materiais e estéticos',
    ],
  },
  {
    // CONFIRMAR: citado na apresentação do escritório e nos conteúdos, mas não na lista de áreas do briefing
    id: 'trabalho',
    icon: Briefcase,
    title: 'Direito do Trabalho',
    description: 'Orientação sobre direitos e deveres na relação de trabalho.',
    details: [
      'Vínculo de emprego em contratações como PJ',
      'Jornada e intervalo para refeição',
      'Adicional de insalubridade',
      'Escala de trabalho e folgas',
    ],
  },
  {
    // CONFIRMAR: exemplos de serviços extrajudiciais
    id: 'extrajudicial',
    icon: Stamp,
    title: 'Serviços Extrajudiciais',
    description: 'Soluções resolvidas em cartório, sem processo judicial, quando a lei permite.',
    details: ['Inventário extrajudicial', 'Usucapião extrajudicial', 'Notificações e acordos extrajudiciais'],
  },
  {
    id: 'consultoria',
    icon: ShieldCheck,
    title: 'Consultoria Jurídica',
    description: 'A consultoria existe para evitar que o problema aconteça: orientação antes de assinar e de decidir.',
    details: ['Revisão de contratos', 'Orientação antes de decisões importantes', 'Análise de riscos jurídicos'],
  },
  {
    // CONFIRMAR: escopo dos serviços para advogados
    id: 'advogados',
    icon: Handshake,
    title: 'Serviços para Advogados',
    description: 'Parceria e apoio jurídico a colegas advogados e escritórios.',
  },
];

export const howItWorks: FeatureItem[] = [
  { title: 'Primeiro contato', description: 'Você conta brevemente a sua situação pelo WhatsApp ou pelo formulário.' },
  { title: 'Análise do caso', description: 'O caso e os documentos são avaliados, presencialmente ou por videochamada.' },
  { title: 'Orientação', description: 'Você recebe uma explicação clara sobre os caminhos possíveis.' },
  { title: 'Acompanhamento', description: 'Havendo atuação, você é informado sobre cada etapa.' },
];

export const serviceFormats: FeatureItem[] = [
  { icon: MapPin, title: 'Presencial', description: 'Em Belo Horizonte e Conselheiro Lafaiete.' },
  { icon: Video, title: 'Online', description: 'Para clientes de todo o Brasil, por videochamada.' },
  { icon: MessageCircle, title: 'WhatsApp', description: 'Canal direto para o primeiro contato e o agendamento.' },
];

export const faq: FAQItem[] = [
  {
    question: 'O atendimento pode ser online?',
    answer: 'Sim. O atendimento é presencial em Belo Horizonte e Conselheiro Lafaiete e online para clientes de todo o Brasil.',
  },
  {
    question: 'Como agendar um atendimento?',
    answer: 'Pelo WhatsApp ou pelo formulário da página de contato. Conte brevemente a sua situação para direcionarmos o atendimento.',
  },
  {
    question: 'Moro em outra cidade. Posso ser atendido?',
    answer: 'Sim. Clientes de outras cidades são atendidos online.',
  },
  {
    question: 'Quais áreas o escritório atende?',
    answer:
      'Direito do Consumidor, Imobiliário, Civil e do Trabalho, além de serviços extrajudiciais, consultoria jurídica e serviços para advogados.',
  },
];
