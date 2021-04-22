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
- **группировать слайсы БЛ** по слоям и скоупу влияния
  > `app` > `*processes` > `pages` > `features` > `entities` > `shared`

<!-- > TODO: будет дополняться позже -->

## Структура

> См. также ["Абстракции методологии"](./intro/abstractions.md) и ["Разбиение приложения"](./concepts/app-splitting.md)

> `WIP:` Нейминг групп временный, и будет определен окончательно ближе к релизу MVP

```sh
└── src/
    ├── app/                    # Layer: Приложение
    |                           #
    ├── processes/              # Layer: Процессы (опционален)
    |   ├── {some-process}/     #     Slice: (н-р процесс CartPayment)
    |   |   ├── lib/            #         Segment: Инфраструктурная-логика (хелперы)
    |   |   └── model/          #         Segment: Бизнес-логика
    |   ...                     #
    |                           #
    ├── pages/                  # Layer: Страницы
    |   ├── {some-page}/        #     Slice: (н-р страница ProfilePage)
    |   |   ├── lib/            #         Segment: Инфраструктурная-логика (хелперы)
    |   |   ├── model/          #         Segment: Бизнес-логика
    |   |   └── ui/             #         Segment: UI-логика
    |   ...                     #
    |                           #
    ├── features/               # Layer: Фичи
    |   ├── {some-feature}/     #     Slice: (н-р фича AuthByPhone)
    |   |   ├── lib/            #         Segment: Инфраструктурная-логика (хелперы)
    |   |   ├── model/          #         Segment: Бизнес-логика
    |   |   └── ui/             #         Segment: UI-логика
    |   ...                     #
    |                           #
    ├── entities/               # Layer: Бизнес-сущности
    |   ├── {some-entity}/      #     Slice: (н-р сущность User)
    |   |   ├── lib/            #         Segment: Инфраструктурная-логика (хелперы)
    |   |   ├── model/          #         Segment: Бизнес-логика
    |   |   └── ui/             #         Segment: UI-логика
    |   ...                     #
    |                           #
    ├── shared/                 # Layer: Переиспользуемые ресурсы
    |   ├── api/                #         Segment: Логика запросов к API
    |   ├── lib/                #         Segment: Инфраструктурная-логика (хелперы)
    |   └── ui/                 #         Segment: UI-логика
    |   ...                     #
    |                           #
    └── index.tsx/              #
```

## P.S. **Это не "серебряная пуля"**
Не так много примеров проектов, которые полностью следуют правилам и принципам методологии, с сохранением преимуществ

Это связано с тем, что принципы вырисовывают **очень идеальную** архитектуру в теории, но сложную в реализации

> На данный момент ведется активная работа над тем, чтобы соединить опыт многих разработчиков и выразить его в единой методологии, помогающей в реализации методологии в проектах

## См. также

<!--
TODO: Если ссылок будет потом оч много - вынести в переменные
-->

<!-- 
TODO: Перенести ссылки на референсы в /src/readme.md, как Карина добьет свой PR
-->

- `Get started` [Введение в методологию](./intro/readme.md)
- `About` [О методологии](./about/readme.md)
- `Misc` Прочие материалы
    - [A feature based approach to React development](https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/)
    - [Why React developers should modularize their applications?](https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1)
    - [How to Organize Your React + Redux Codebase](https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase)
    - [The Humanizing Work Guide to Splitting User Stories *(aka "Vetical Slices")*](https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/)
    - [Доклад React SPB Meetup#1 - Feature Slices](https://t.me/feature_slices)
    - [Feature Driven Architecture - Oleg Isonen](https://www.youtube.com/watch?v=BWAeYuWFHhs)
    - *Предыдущие* ответвления методологии: *[feature-slices](https://featureslices.dev/v1.0.html)*, *[feature-driven](./about/old/feature-driven/README.md)*

<br/>

- `Discussions` [Дискуссии по методологии](https://github.com/feature-sliced/wiki/discussions)
  > **Здесь обсуждаются и разбираются рельные примеры применения, вопросы, проблемы, идеи методологии**
  >
  > Все это в совокупности влияет на спецификацию, тулкит и в целом - на дальнейшее видение и развитие методологии
  >
  > *Т.е. все, чего пока нет в спецификации/тулките - так или иначе обсуждается в github-discussions*
- `Contributing` **Как можно помочь?**
  - ⭐ Оцените нас на GitHub, если у вас остались положительные впечатления
    > Или если по-вашему этот проект должен развиваться дальше
  - 💫 Ознакомьтесь с нашим [contributing](./CONTRIBUTING.md) гайдом
    > **Важно любое содействие** - от *фидбека* до *участия в самой разработке!*


<!-- 
FIXME: Не удалось нормально justify-content:space-around применить в md
Если есть варики как лучше отступы расставить - welcome :)
-->

<div align="center">
<a href="https://t.me/feature_sliced" title="Телеграм-чат">
    <img src="./assets/social_tg.png" alt="tg" height=48 />
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<!-- TODO: Добавить ссыль, как доработаем твиттер -->
<a href="#wip" title="Twitter (в процессе)">
    <img src="./assets/social_twitter.png" alt="twitter" height=48 />
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://opencollective.com/feature-sliced" title="OpenCollective профиль">
    <img src="./assets/social_opencollective.png" alt="open-collective" height=48 />
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<!-- TODO: Добавить ссыль, как доработаем ютуб -->
<a href="#wip" title="YouTube канал (в процессе)">
    <img src="./assets/social_youtube.png" alt="youtube" height=48 />
</a>
</div>

