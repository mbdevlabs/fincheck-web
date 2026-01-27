# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fincheck is a personal finance management web application built with React 19, TypeScript, and Vite.

## Commands

```bash
pnpm dev      # Start development server (opens browser automatically)
pnpm build    # Type-check with tsc and build for production
pnpm lint     # Run ESLint
pnpm preview  # Preview production build locally
```

## Tech Stack

- **Framework**: React 19 with react-router-dom v7 for routing
- **Build**: Vite 7 with SWC for Fast Refresh
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **Language**: TypeScript with strict mode enabled

## Architecture

- `src/main.tsx` - Application entry point, renders App with StrictMode
- `src/App.tsx` - Root component with BrowserRouter and route definitions
- `src/Router/` - Router-related components
- `src/index.css` - Global styles with Tailwind import

### Routing Structure

Routes are defined in `App.tsx` using react-router-dom:
- `/` - Dashboard (main authenticated view)
- `/login` - Login page (nested under layout)
- `/register` - Registration page (nested under layout)
