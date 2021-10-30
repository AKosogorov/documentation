---
sidebar_position: 1
pagination_next: get-started/index
---

# 🔎 Введение

<span class="badge badge--secondary margin-bottom--md">OVERVIEW-ORIENTED</span>

![feature-sliced-banner](/img/banner.jpg)

Методология для проектирования *frontend проектов*, нацеленная [**на разделение приложения согласно бизнес-логике и областям ответственности.**][refs-splitting]

- Обеспечивает [**понятность, контролируемость и адаптивность**][refs-arch-req] архитектуры
- Основана на [**проверенных временем**][refs-motivation-why] практиках проектирования и концепциях
    > `SOLID`, `GRASP`, `DDD`, `Separation of Concerns`, `Vertical Slices`, `Public API`, `Isolation`
- Предлагает разделять проект согласно [**бизнес-юнитам**][ext-ubiq-lang]

:::note

Методология не привязана к конкретному стеку и применима *к любым фронтенд-проектам* в целом.

Но текущая версия приводит примеры и проработана на базе связки `JavaScript` + `React`

:::

## Обзор

Методология призвана **упростить и стандартизировать декомпозицию логики для больших и долгоживущих проектов.**

Для этого она вводит ряд [концепций][refs-concepts] и [абстракций][refs-splitting], на которых *может базироваться* архитектура от проекта к проекту - отсюда получаем *ряд преимуществ*

:::info

[Модуль][refs-module] - структурная единица проекта (файл / директория)

:::

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

Каждый модуль имеет свои ограничения и рекоммендации на переиспользуемость согласно [своему слою][refs-splitting--layers]

Благодаря этому *сохраняется баланс между соблюдением принципа `DRY` и возможности кастомизировать логику модуля без оверхедных переопределений*

## См. также

<!-- 

- [Причины создания методологии][refs-motivation]
- [(Гайд) Как привести модули к низкой связности][refs-low-coupling]
- [Примеры применения методологии][refs-examples]
- [(Гайд) Миграция с feature-slices (v1)][refs-migration-v1]
  - *Содержит также сравнение двух версий и причины создания v2*

[🚀 Быстрый старт][refs-getstarted] | [🎯 Гайды][refs-guides] | [🧩 Концепции][refs-concepts] | [📚 Справочник][refs-reference] | [🍰 О методолологии][refs-about]
|---|---|---|---|---|

-->

```mdx-code-block
import Row from "@site/src/shared/ui/row/tmpl.mdx"
import { RocketOutlined, ThunderboltOutlined, FundViewOutlined } from "@ant-design/icons";

<Row 
    title="Быстрый старт" 
    description="Быстрое погружение в методологию"
    to="/docs/get-started"
    Icon={"🚀"}
/>
<Row 
    title="Гайды" 
    description="Практические гайды и примеры по применению"
    to="/docs/guides"
    Icon={"🎯"}
/>
<Row 
    title="Концепции" 
    description="Ключевые концепции методологии для улучшенного понимания и применения"
    to="/docs/concepts"
    Icon={"🧩"}
/>
<Row 
    title="Справочник" 
    description="Подробно о понятиях методологии"
    to="/docs/reference"
    Icon={"📚"}
/>
<Row 
    title="О методолологии" 
    description="О развитии и продвижению методологии"
    to="/docs/about"
    Icon={"🍰"}
/>
```

[refs-motivation]: /docs/get-started/motivation

[refs-splitting]: /docs/concepts/app-splitting
[refs-splitting--layers]: /docs/concepts/app-splitting#group-layers
<!-- FIXME: Ссылаться на рут позднее, а не на первый элемент -->
[refs-concepts]: /docs/concepts/architecture

[refs-module]: /docs/reference/glossary#module

[refs-low-coupling]: /docs/guides/low-coupling
[refs-migration-v1]: /docs/guides/migration/from-v1
<!-- FIXME: Ссылаться на рут позднее, а не на первый элемент -->
[refs-examples]: /docs/guides/examples/viewer

[refs-getstarted]: /docs/get-started/overview
[refs-guides]: /docs/guides/migration/from-v1
[refs-reference]: /docs/reference/glossary
[refs-about]: /docs/about/mission

[refs-arch-req]: https://feature-sliced.design/docs/concepts/architecture#требования
[refs-motivation-why]: https://feature-sliced.design/docs/get-started/motivation#-почему-не-хватает-существующих-решений

[ext-ubiq-lang]: https://thedomaindrivendesign.io/developing-the-ubiquitous-language
