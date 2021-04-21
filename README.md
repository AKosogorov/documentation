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

Главная идея - разделить логику приложения не по типам, **а по функциональности приложения, т.е. согласно бизнес-ценностям**
> См. также `separation of concerns`

<!-- > TODO: будет дополняться позже -->

## Структура

Пока что пришли примерно к такому варианту
> Но т.к. все еще [ведутся жаркие дискуссии](https://github.com/feature-sliced/wiki/discussions) - вариант неокончательный, хоть и составлен путем объединения разных опытов

```bash
└── src/
    ├── app/          # Инициализирующая логика приложения
    ├── processes/    # Процессы приложения, протекающие "над страницами"
    ├── pages/        # Страницы приложения
    ├── features/     # Ключевой функционал приложения (разбитый по фичам)
    ├── entities/     # Сущности
    ├── shared/       # Переиспользуемые модули
    └── index.tsx/    # Энтрипоинт приложения
```


<details>
  <summary>/app/</summary>
  
```sh
└── app/
├── store/                      # Инициализация store
├── styles/                     # Инициализация styles
├── hocs/                       # Инициализирующая логика (HOC-обертки)
├── {...}                       #
```
  
</details>

<details>
  <summary>/processes/</summary>
  
`TODO:` Позже будет дополнено

```sh
└── processes/
```
  
</details>

<details>
  <summary>/pages/</summary>
  
```sh
└── pages/
├── {page}/                 # Ресурсы страницы (с минимальной логикой)
└── index.tsx               # Энтрипоинт (чаще всего с composed роутингом)
```
  
</details>

<details>
  <summary>/features/</summary>
  
```sh
└── features/                          # Фичи приложения
  └── feature-name/                  #   Обычно содержит в себе:
          ├── components/            #      UI-компоненты фичи
          ├── {store/}               #      *Store фичи
          ├── {models/}              #      *Модели фичи
          ├── {...}/                 #
          └── index.ts               # Энтрипоинт фичи (с ее публичным API)
```

</details>

<details>
  <summary>/entities/</summary>

```sh
└── entities/               # Сущности
├── user/                 #   Обычно содержит в себе (по необходимости):
|    ├── components/      #     *Подкомпоненты
|    ├── lib/             #     *Библиотеки
|    ├── api/             #     *Мб Подзапросы
|    └── store/           #     *Зашаренный Стейт
├── {entity-1}            #
├── {entity-2}            #
└── {...}/                #
```
  
</details>

<details>
  <summary>/shared/</summary>
  
```sh
└── shared/             # Переиспользуемые модули
 ├── ui/              #   *UIKit приложения
 ├── lib/             #   *Библиотеки приложения (вместо свалки хелперов)
 ├── api/             #   *API-инстансы/методы
 └── {...}            #
```
  
</details>

## P.S. **Это не "серебряная пуля"**
Не так много примеров проектов, которые полностью следуют правилам и принципам методологии, с сохранением преимуществ

Это связано с тем, что принципы вырисовывают **очень идеальную** архитектуру в теории, но сложную в реализации

> На данный момент ведется активная работа над тем, чтобы соединить опыт многих разработчиков и выразить его в единой методологии, помогающей в реализации методологии в проектах

## См. также

<!-- TODO: Если ссылок будет потом оч много - вынести в переменные -->

<!-- 
TODO: Перенести ссылки на референсы в /src/readme.md, как Карина добьет свой PR
-->

- `Get started` [Введение в методологию](./intro/readme.md)
- `About` [О методологии](./about/readme.md)
- `Misc` Прочие материалы
    - [A feature based approach to React development](https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/)
    - [Why React developers should modularize their applications?](https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1)
    - [How to Organize Your React + Redux Codebase](https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase)
    - [Feature Driven Architecture - Oleg Isonen](https://www.youtube.com/watch?v=BWAeYuWFHhs)
    - *Предыдущие* ответвления методологии: *[feature-slices](https://featureslices.dev/v1.0.html)*, *[feature-driven](./about/old/feature-driven/readme.md)*

---

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
