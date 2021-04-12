# feature-sliced

<!-- 🏅 Add badges -->

<!--
[npm]: https://www.npmjs.com/package/NPM_PACKAGE

[![npm](https://img.shields.io/npm/v/NPM_PACKAGE?style=flat-square)][npm]
[![npm](https://img.shields.io/npm/dw/NPM_PACKAGE?style=flat-square)][npm]
[![npm bundle size](https://img.shields.io/bundlephobia/min/NPM_PACKAGE?style=flat-square)][npm]
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FOWNER%2FREPO&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/OWNER/REPO/WORKFLOW?label=tests&style=flat-square)](https://github.com/OWNER/REPO/actions)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/OWNER/REPO?style=flat-square)](https://github.com/OWNER/REPO/commits)
-->


<!-- 🖼️ Add logo / primary image -->
<img src="https://avatars.githubusercontent.com/u/60469024?s=120" align="right" width=120>

<!-- ⚡ Add primary information & features about your repository -->
Методология, помогающая определять разбиение модулей и связи между ними в приложении

- Обеспечивает [**понятность и явность архитектуры**](https://github.com/feature-sliced/wiki/blob/master/about/architecture.md#explicit-%D0%BF%D0%BE%D0%BD%D1%8F%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8F%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D1%8C)
- Обеспечивает [**контроль и изоляцию модулей**](https://github.com/feature-sliced/wiki/blob/master/about/architecture.md#control-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C)
- Обеспечивает [**адаптивность под проекты**](https://github.com/feature-sliced/wiki/blob/master/about/architecture.md#adaptivity-%D0%B0%D0%B4%D0%B0%D0%BF%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D0%BE%D1%81%D1%82%D1%8C)

## Overview
`feature-sliced` - структурная методология для JavaScript фронтенд проектов

Основные идеи: 
- разделить логику приложения не по типам, **а по функциональности приложения, т.е. согласно бизнес-ценностям**
  > См. также `separation of concerns`, `vertical-slices`, `feature-based`
- **группировать слайсы БЛ** по ярусам и скоупу влияния
  > `app` > `*processes` > `pages` > `features` > `entities` > `shared`

<!-- > TODO: будет дополняться позже -->

## Структура

> См. также ["Абстракции методологии"](./intro/abstractions.md) и ["Разбиение приложения"](./concepts/app-splitting.md)

```sh
└── src/
    ├── app/                    # Tier: Приложение
    |                           #
    ├── processes/              # Tier: Процессы (опционален)
    |   ├── {some-process}/     #   Slice: (н-р процесс CartPayment)
    |   |   ├── lib/            #       Layer: Инфраструктурная-логика (хелперы)
    |   |   └── model/          #       Layer: Бизнес-логика
    |   ...                     #
    |                           #
    ├── pages/                  # Tier: Страницы
    |   ├── {some-page}/        #   Slice: (н-р страница ProfilePage)
    |   |   ├── lib/            #       Layer: Инфраструктурная-логика (хелперы)
    |   |   ├── model/          #       Layer: Бизнес-логика
    |   |   └── ui/             #       Layer: UI-логика
    |   ...                     #
    |                           #
    ├── features/               # Tier: Фичи
    |   ├── {some-feature}/     #   Slice: (н-р фича AuthByPhone)
    |   |   ├── lib/            #       Layer: Инфраструктурная-логика (хелперы)
    |   |   ├── model/          #       Layer: Бизнес-логика
    |   |   └── ui/             #       Layer: UI-логика
    |   ...                     #
    |                           #
    ├── entities/               # Tier: Бизнес-сущности
    |   ├── {some-entity}/      #   Slice: (н-р сущность User)
    |   |   ├── lib/            #       Layer: Инфраструктурная-логика (хелперы)
    |   |   ├── model/          #       Layer: Бизнес-логика
    |   |   └── ui/             #       Layer: UI-логика
    |   ...                     #
    |                           #
    ├── shared/                 # Tier: Переиспользуемые ресурсы
    |   ├── api/                #       Layer: Логика запросов к API
    |   ├── lib/                #       Layer: Инфраструктурная-логика (хелперы)
    |   └── ui/                 #       Layer: UI-логика
    |   ...                     #
    |                           #
    └── index.tsx/              #
```

## P.S. **Это не "серебряная пуля"**
Не так много примеров проектов, которые полностью следуют правилам и принципам методологии, с сохранением преимуществ

Это связано с тем, что принципы вырисовывают **очень идеальную** архитектуру в теории, но сложную в реализации

> На данный момент ведется активная работа над тем, чтобы соединить опыт многих разработчиков и выразить его в единой методологии, помогающей в реализации методологии в проектах

## См. также

<!-- TODO: Если ссылок будет потом оч много - вынести в переменные -->
<!-- TODO: Пока что упоминаем здесь все существующие статьи - после того как их количество вырастет - сделаем более структурированную навигацию -->

- [О методологии](./about/readme.md)
- [Об архитектуре](./about/architecture.md)
- [Об истории методологии](./about/history.md)
- `NEW:` `HOT:` [Про абстракции методологии](./intro/abstractions.md)
- `NEW:` [О мотивации создания методологии](./about/motivation.md)
- `NEW:` [О понимании потребностей и формулировке задач](./concepts/understanding-needs.md)
- [Дискуссии по методологии](https://github.com/feature-sliced/wiki/discussions)
  > **Здесь обсуждаются и разбираются рельные примеры применения, вопросы, проблемы, идеи методологии**
  >
  > Все это в совокупности влияет на спецификацию, тулкит и в целом - на дальнейшее видение и развитие методологии
  > *Т.е. все, чего пока нет в спецификации/тулките - так или иначе обсуждается в github-discussions*
- `NEW:` [О Public API сущностей](./concepts/public-api.md)
- **Как можно помочь?**
  - ⭐ Оцените нас на GitHub, если у вас остались положительные впечатления
    > Или если по-вашему этот проект должен развиваться дальше
  - 💫 Ознакомьтесь с нашим [contributing](./CONTRIBUTING.md) гайдом
    > **Важно любое содействие** - от *фидбека* до *участия в самой разработке*!
