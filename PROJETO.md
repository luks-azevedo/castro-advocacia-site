# Castro Advocacia — notas do projeto

Site da Castro Advocacia (Carolina Araújo), criado a partir do `apresenta-template`.
Instruções gerais de uso, build e publicação: ver `README.md`.

## Onde está cada coisa

| O quê | Arquivo |
| --- | --- |
| Dados do escritório, WhatsApp, redes, advogada (nº OAB) | `src/config/site.ts` |
| Cores e fontes (tema `castro`) | `src/config/theme.ts` |
| Áreas de atuação, FAQ, formatos de atendimento | `src/data/castro.ts` |
| Fotos da Carolina (recortadas dos posts, sem texto) | `src/assets/images/carolina-*.jpg` |
| Logotipo tipográfico (CASTRO + Advocacia Especializada) | `logo.wordmark` / `logo.tagline` em `site.ts` |
| Favicon e imagem de compartilhamento | `public/favicon.svg`, `public/images/og-default.png` |

## Identidade

Extraída dos posts do Instagram @castro.adv_: vinho `#7A1243`, ameixa `#3E0C24`, off-white `#F4F3F1`,
títulos em serifada (Playfair Display), texto em Inter, botões em pílula, linhas circulares finas
e o arco (como o espelho dourado das fotos) no retrato da página Sobre.

## Publicidade — Provimento 205/2021 (CFOAB)

O site foi escrito em tom informativo: sem promessas de resultado, sem honorários, sem depoimentos
de clientes e sem superlativos. **O conteúdo final deve ser revisado pela advogada.**

## Pendências com o cliente

- [ ] **Nº de inscrição na OAB** da Carolina — obrigatório na publicidade. Preencher `lawyer.oab` e
      acrescentar em `legalName` (rodapé) em `site.ts`. **Resolver antes de divulgar o site.**
- [ ] **Confirmar o WhatsApp**: o briefing informa "31 9206-7107" (8 dígitos); o site usa (31) 99206-7107.
- [ ] **Direito do Trabalho**: aparece na apresentação e nos posts, mas não na lista de áreas do briefing. Manter?
- [ ] **Serviços extrajudiciais e serviços para advogados**: confirmar os exemplos/escopo descritos.
- [ ] **Bio da Carolina** (formação, especializações) — hoje o texto usa só dados do briefing.
- [ ] **E-mail, endereço do escritório e horário** (opcionais).
- [ ] **Domínio/URL final** → preencher `domain` em `site.ts`.

## Observação

A imagem "Mayam Marques beauty center" enviada junto com os posts é de outra marca e não foi usada.
