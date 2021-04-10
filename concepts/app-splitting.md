[src-disc]: https://github.com/feature-sliced/wiki/discussions/31#discussioncomment-451507
[refs-pluralsight]: https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase
[refs-medium]: https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1
[refs-ryanlanciaux]: https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/
[refs-react]: https://reactjs.org/docs/faq-structure.html

# Разбиение приложения
> О способах разбиения проекта по модулям и позицию методологии
---

## ⚡ `TL;DR:`

- *Сначала по абстракциям-**фичам** (app/pages/features/...),*
- *Потом по абстракциям-**типам** (ui/lib/...)*

## Предистория
Каждый из нас застал на своем пути разработчика проекты примерно такой структуры

```sh
└── src/
    ├── api/
    ├── components/
    ├── containers/
    ├── helpers/
    ├── pages/
    ├── store/
    └── index.tsx/
```

И более того - каждый из нас создавал поначалу проекты с такой структурой!
> Особенно если мы говорим про React

Ведь на первый взгляд - такой подход кажется простым:
- Все лежит на верхнем уровне 
    > Нет глубокой вложенности и длинным импортам!
- В каждом модуле конкретно понятно что лежит, по его прямому назначению 
    > В store - все экшены/редьюсеры/эффекты приложения, в хелперах - все хелперы и т.д.

## Separation of Concerns

## 📑 См. также
- [Тред **"Про разбиение приложения"**][src-disc]
- [Статья **"Про организацию кодовой базы"** с полным сравнением нескольких подходов][refs-pluralsight]
- [Статья **"Про модуляризацию проектов"**][refs-medium]
- [Статья **"Про Separation of Concerns и структурирование по фичам"**][refs-ryanlanciaux]
- [Документация от React **о двух способах разделить приложение**][refs-react]
