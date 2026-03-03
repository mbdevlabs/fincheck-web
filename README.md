# Fincheck — Web

App de financas pessoais para controlar contas bancarias, receitas e despesas.

![React](https://img.shields.io/badge/-React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

<!-- ![Screenshot](.github/screenshot.png) -->

## Funcionalidades

- Autenticacao (signup/signin) com JWT
- Dashboard com visao geral das financas
- Gerenciar multiplas contas bancarias com saldo
- Registrar receitas e despesas com categorias
- Filtrar transacoes por mes, ano, conta e tipo
- Layout responsivo (desktop e mobile)

## Tech Stack

| Tecnologia | Uso |
|------------|-----|
| React 19 | UI |
| TypeScript | Tipagem |
| TailwindCSS 4 | Estilizacao |
| Vite | Build/dev server |
| React Query (TanStack) | Estado do servidor |
| React Hook Form + Zod | Formularios e validacao |
| React Router DOM v7 | Rotas |
| Radix UI + Headless UI | Componentes acessiveis |
| Axios | Cliente HTTP |
| Swiper | Slider de contas bancarias |

## Como Rodar

**Pre-requisitos:** Node.js 18+ e [Fincheck API](https://github.com/mbdevlabs/fincheck-api) rodando.

```bash
git clone https://github.com/mbdevlabs/fincheck-web.git
cd fincheck-web
npm install
cp .env.example .env   # configurar URL da API
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura

```
src/
  app/
    config/        → Constantes e configuracao
    contexts/      → AuthContext (autenticacao)
    hooks/         → useAuth, useWindowWidth
    services/      → Camada HTTP (Axios)
    utils/         → cn(), formatCurrency()
  view/
    components/    → Componentes reutilizaveis (Button, Logo, icons)
    layouts/       → Layouts de pagina
    pages/
      Dashboard/   → Tela principal (contas + transacoes)
      Login/       → Tela de login
      Register/    → Tela de cadastro
  Router/          → Configuracao de rotas
```

## Relacionados

- [Fincheck API](https://github.com/mbdevlabs/fincheck-api) — Backend REST
