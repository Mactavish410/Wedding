# Евгений & Мария — сайт-приглашение

Статический сайт-приглашение на Vite + React + TypeScript + Tailwind. Два дня: семья (14.11.2026) и друзья (21.11.2026). Деплой рассчитан на GitHub Pages.

## Локальный запуск

```bash
npm i
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

## Структура

- `/` — выбор дня
- `/#/family` — семейный день
- `/#/friends` — день с друзьями

Фото: `public/photos/*.webp` (пути вида `/Wedding/photos/1.webp` с учётом `base`).

## Деплой на GitHub Pages

В `vite.config.ts` задано `base: '/Wedding/'` — под репозиторий `Wedding`. Если имя репо другое, поменяйте `base`.

1. В настройках репозитория: **Settings → Pages → Source: GitHub Actions** или ветка `gh-pages`.
2. Деплой одной командой:

```bash
npm run deploy
```

Скрипт собирает проект и публикует папку `dist` через `gh-pages`.

Либо вручную: `npm run build`, затем загрузите содержимое `dist` в ветку `gh-pages` / Actions workflow.

Маршрутизация через `HashRouter`, поэтому SPA работает на GH Pages без fallback на `index.html`.
