[refs-contributing]: /CONTRIBUTING.md

[refs-docs]: /docs/readme.md
[refs-about]: /docs/about/readme.md
[refs-motivation]: /docs/about/motivation.md
[refs-motivation-why]: /docs/about/motivation.md#-почему-не-хватает-существующих-решений

[refs-getstarted]: /docs/get-started/readme.md

[refs-concepts]: /docs/concepts/readme.md
[refs-arch]: /docs/concepts/architecture.md
[refs-arch-req]: /docs/concepts/architecture.md#-требования
[refs-arch-problems]: /docs/concepts/architecture.md#%EF%B8%8F-проблемы
[refs-splitting]: /docs/concepts/app-splitting.md
[refs-public-api]: /docs/concepts/public-api.md
[refs-adaptability]: /docs/concepts/naming-adaptability.md
[refs-isolation]: /docs/concepts/cross-communication.md
[refs-needs-driven]: /docs/concepts/understanding-needs.md

[refs-knowledge]: /docs/references/knowledge-types.md
[refs-abstractions]: /docs/references/abstractions.md
[refs-abstractions-layers]: /docs/references/abstractions.md#-group-layers
[refs-abstractions-slices]: /docs/references/abstractions.md#-group-slices
[refs-abstractions-segments]: /docs/references/abstractions.md#%EF%B8%8F-group-segments

[ext-ubiq-lang]: https://thedomaindrivendesign.io/developing-the-ubiquitous-language
[ext-fdd]: https://github.com/feature-sliced/wiki/tree/rc/feature-driven
[ext-discussions]: https://github.com/feature-sliced/wiki/discussions
[ext-disc-api]: https://github.com/feature-sliced/wiki/discussions/66

# feature-sliced

> `WIP:` Работа над методологией в процессе и окончательный вид *может поменяться*
>
> Пока *не рекомендуется применять текущую версию* в рабочих проектах (*только на свой страх и риск*)

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
Методология для проектирования *frontend проектов*, нацеленная [**на разделение приложения согласно бизнес-логике и областям ответственности.**][refs-splitting]

- Обеспечивает [**понятность, контролируемость и адаптивность**][refs-arch-req] архитектуры
- Основана на [**проверенных временем**][refs-motivation-why] практиках проектирования и концепциях
    > `SOLID`, `GRASP`, `DDD`, `Separation of Concerns`, `Vertical Slices`, `Public API`, `Isolation`
- Предлагает разделять проект согласно [**бизнес-юнитам**][ext-ubiq-lang]

> **Примечание:** Методология не привязана к конкретному стеку и применима *к любым фронтенд-проектам* в целом.
>
> Но текущая версия приводит примеры и проработана на базе связки `JavaScript` + `React`

## Motivation

Обычно, подходы построения архитектуры фронтенда от проекта к проекту [переизобретаются с нуля][refs-motivation], пополняя тем самым ["проектные знания"][refs-knowledge]

> Несмотря на то, что специфика фронтенд-проектов отличается не так значительно

При этом, неверно принятые решения зачастую приводят [к проблемам масштабируемости проекта и команды][refs-arch-problems].

И поэтому, вместо того, чтобы придумывать и документировать это каждый раз, хочется **обобщить опыт и сформировать рабочую, проверенную и задокументированную методологию** для проектирования архитектуры фронтенда.

*Да, практик и паттернов много (`SOLID`, `GRASP`, `DDD`, ...)*

*Но для фронтенда [крайне трудно найти][refs-motivation] устоявшиеся и конкретные подходы*

## Overview

Методология призвана **упростить и стандартизировать декомпозицию логики для больших и долгоживужих проектов.**

Для этого она вводит ряд [концепций][refs-concepts] и [абстракций][refs-abstractions], на которых *может базироваться* архитектура от проекта к проекту - отсюда получаем *ряд преимуществ*

> **Примечание:** Модуль - структурная единица проекта (файл / директория)

### Явная бизнес-логика

Модули распределяются согласно [скоупу влияния, бизнес-ответственности и техническому назначению][refs-splitting]

Благодаря этому *архитектура стандартизируется и становится более простой для ознакомления*

### Адаптация к новым условиям

Каждый компонент архитектуры имеет свое назначение и не влияет на другие
    
Благодаря этому *под новые требования можно независимо модифицировать функциональность приложения без непредвиденных последствий*

### Техдолг и рефакторинг

Каждый модуль является независимым и самодостаточным

Благодаря этому *можно переписать его с нуля без неожиданных сайд-эффектов*

### Масштабирование проекта и команды

Увеличение функциональности ведет к значительно меньшему усложнению проекта, т.к. вся логика распределена детерминированно и изолированно

Благодаря этому *легко добавлять и онбордить новых людей в команду, а также расширять функциональность проекта*

### Контролируемое переиспользование логики

Каждый модуль имеет свои ограничения и рекоммендации на переиспользуемость согласно [своему слою][refs-abstractions-layers]

Благодаря этому *сохраняется баланс между соблюдением принципа `DRY` и возможности кастомизировать логику модуля без оверхедных переопределений*

## Concepts

### [`Public API`][refs-public-api]

Каждый модуль должен иметь на верхнем уровне **декларацию своего публичного API**
- Для подключения в другие модули, без нужды обращаться к внутренней структуре данного модуля
- Для изоляции деталей реализации от модулей-потребителей
- Также Public API должен защищать интерфейс модуля после рефакторинга - во избежание непредвиденных последствий

### [`Isolation`][refs-isolation] 
Модуль не должен **зависеть напрямую** от других модулей того же слоя или вышележаших слоев

- Концепция известна также как `Low Coupling & High Cohesion` - для предотвращения неявных связей / сайд-эффектов при разработке и рефакторинге

### [`Needs driven`][refs-needs-driven] 
Ориентирование **на потребности бизнеса и пользователя**

- Включает в себя также разбиение структуры по бизнес-доменам *(т.н. ["слайсам"][refs-abstractions-slices])*

## Abstractions

Для [проектирования архитектуры][refs-splitting] методология предлагает оперировать [привычными абстракциями][refs-adaptability], но в более консистентном и последовательном порядке.

<details>
<summary>Визуальная схема</summary>

> `WIP:` Схема - представляет лишь **примерное** разбиение проекта по модулям и будет определена окончательно ближе к релизу

![visual_schema](./assets/visual_schema.jpg)

</details>

### [`Layers`][refs-abstractions-layers]

Первый уровень абстрагирования - **согласно скоупу влияния**
- `app` - инициализация приложения *(init, styles, providers, ...)*
- `processes` - бизнес-процессы приложения управляющие страницами *(payment, auth, ...)*
- `pages` - страницы приложения *(user-page, ...)*
- `features` - части функциональности приложения  *(auth-by-oauth, ...)*
- `entities` - бизнес-сущности *(viewer, order, ...)*
- `shared` - переиспользуемый инфраструктурный код *(UIKit, libs, API, ...)*

### [`Slices`][refs-abstractions-slices]

Второй уровень абстрагирования - **согласно бизнес-домену**

Правила *зависят от конкретного проекта*, и не определяются методологией.

### [`Segments`][refs-abstractions-segments]
Третий уровень абстрагирования - **согласно назначению в реализации**

- `ui` - UI-представление модуля *(components, widgets, canvas, ...)*
- `model` - бизнес-логика модуля *(store, effects/actions, hooks/contracts, ...)*
- `lib` - вспомогательные библиотеки
- `api` - логика взаимодействия с API
- `config` - модуль конфигурации приложения и его окружения

> **Примечание:** В большинстве случаев [рекомендуется][ext-disc-api] располагать `api` и `config` только на shared-слое

## Structure

> `WIP:` Нейминг групп временный, и будет определен окончательно ближе к релизу

```sh
└── src/
    ├── app/                    # Layer: Приложение
    |                           #
    ├── processes/              # Layer: Процессы (опционально)
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
    |   ├── config/             #         Segment: Конфигурация приложения
    |   ├── lib/                #         Segment: Инфраструктурная-логика приложения
    |   └── ui/                 #         Segment: UIKit приложения
    |   ...                     #
    |                           #
    └── index.tsx/              #
```

## Further reading

- **[Документация методологии][refs-docs]**
    > *Get-Started, Concepts, Guides, References, About*
- **Прочие материалы**
  - Предыдущие версии методологии: *[feature-slices](https://featureslices.dev/v1.0.html)*, *[feature-driven][ext-fdd]*
  - [Доклад React SPB Meetup #1 - Feature Slices](https://t.me/feature_slices)
  - [Feature Driven Architecture - Oleg Isonen](https://www.youtube.com/watch?v=BWAeYuWFHhs)
  - [A feature based approach to React development](https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/)
  - [Why React developers should modularize their applications?](https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1)
  - [How to Organize Your React + Redux Codebase](https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase)
  - [The Humanizing Work Guide to Splitting User Stories *(aka "Vetical Slices")*](https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/)

<br/>

- **[Дискуссии по методологии][ext-discussions]**
  - **Здесь обсуждаются и разбираются реальные примеры применения, вопросы, проблемы, идеи методологии**
  - Все это в совокупности влияет на спецификацию, тулкит и в целом - на дальнейшее видение и развитие методологии
  - *Т.е. все, чего пока нет в спецификации/тулките, так или иначе обсуждается в github-discussions*
- **[Как можно помочь?][refs-contributing]**
  - ⭐ Оцените нас на GitHub, если по-вашему методология должна развиваться дальше
  - 💫 [**Важно любое содействие**][refs-contributing] - от *фидбека* до *участия в самой разработке!*

<!-- 
FIXME: Не удалось нормально justify-content:space-around применить в md
Если есть варики как лучше отступы расставить - welcome :)
-->

<!-- TODO: Добавить ссылки, как доработаем ютуб и твиттер -->

<div align="center">

[![tg](./assets/social_tg.png)](https://t.me/feature_sliced "Телеграм-чат")
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![twitter](./assets/social_twitter.png)](#wip "Twitter (в процессе)")
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![open-collective](./assets/social_opencollective.png)](https://opencollective.com/feature-sliced "OpenCollective профиль")
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![youtube](./assets/social_youtube.png)](#wip "YouTube канал (в процессе)")
</div>
