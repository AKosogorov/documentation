# Миграция с v1

> Миграция с feature-slices (v1)

---

[refs-adaptability]: ../concepts/naming-adaptability.md
[refs-abstractions]: ../references/abstractions.md

[ext-v1]: https://github.com/feature-sliced/featureslices.dev/blob/master/v1.0.md
[ext-tg-spb]: https://t.me/feature_slices
[ext-fdd]: https://github.com/feature-sliced/wiki/tree/rc/feature-driven
[ext-fdd-issues]: https://github.com/kof/feature-driven-architecture/issues
[ext-v2]: https://github.com/feature-sliced/wiki
[ext-about]: ../about/readme.md
[ext-kof]: https://github.com/kof
[ext-kof-fdd]: https://www.youtube.com/watch?v=BWAeYuWFHhs
[ext-tg-v2-draft]: https://t.me/atomicdesign/18708

## Зачем `v2`?

> Опционально к прочтению

Изначальная концепция `feature-slices` [была заявлена][ext-tg-spb] еще в 2018 году.

С тех пор прошло много трансформаций методологии, но при этом **[сохранялись базовые принципы][ext-v1]**:
- Использование *стандартизированной* структуры фронтенд-проектов
- Разбиение приложения в первую очередь - согласно *бизнес-логике*
- Использование *изолированных фичей*, для предотвращения неявных сайд-эффектов и циклических зависимостей
- Использование *`Public API`* с запретом лезть "во внутренности" модуля

При этом, в прежней версии методологии все равно **оставались слабые места**, которые 
- Где-то приводили к бойлерплейту
- Где-то к чрезмерному усложнению кодовой базы и неочевидным правилам между абстракциями
- Где-то к неявным архитектурным решениям, что мешало поддерже проекта и онбордингу новых людей

Новая версия методологии ([v2][ext-v2]) призвана **устранить эти недостатки, сохраняя при этом и имеющиеся достоинства** подхода.

С 2018 года [развивалась][ext-fdd-issues] и другая подобная методология - [`feature-driven`][ext-fdd], о которой заявил впервые [Oleg Isonen][ext-kof].

В результате слияния двух подходов, **были улучшены и доработаны существующие практики** - в сторону большей гибкости, понятности и эффективности при применении.

> По итогу это повлияло даже на наименование методологии - *"feature-slice**d**"*

## Changelog


### `BREAKING` Layers

Теперь методология предполагает явное выделение слоев на верхнем уровне

- `/app` > `/processes` > **`/pages`** > **`/features`** > `/entities` > `/shared`
- *Т.е. не все теперь трактуется как фичи/страницы*
- Такой подход позволяет [явно задать правила для слоев][ext-tg-v2-draft]:
    - Чем **выше расположен слой** модуля - тем большим **контекстом** он располагает
        
        *(иными словами - каждый модуль слоя - может импортировать только **модули нижележащих слоев**, но не выше)*
    - Чем **ниже расположен слой** модуля - тем больше **опасности и ответственности**, чтобы внести в него изменения

        *(потому что, как правило - более переиспользуемыми являются именно нижележащие слои)*

### `BREAKING` Shared

Инфраструктурные абстракции `/ui`, `/lib`, `/api`, которые раньше лежали в src-корне проекта, теперь обособлены отдельной директорией `/src/shared`

- `shared/ui` - Все так же общий uikit приложения (опционален)
    - *При этом никто не запрещает использовать здесь `Atomic Design` как раньше*
- `shared/lib` - Набор вспомогательных библиотек для реализации логики
    - *По-прежнему - без свалки хелперов*
- `shared/api` - Общий энтрипоинт для обращения к API
    - *Может прописываться и локально в каждой фиче/странице - но не рекомендуется*
- Как и раньше - в `shared` не должно быть явной привязки к бизнес-логике
    - *При необходимости - нужно выносить эту связь на уровень `entities` или еще выше*

### `NEW` Entities, Processes

В v2 **добавлены и другие новые абстракции**, для устранения проблем усложнения логики и сильной связности.

- `/entities` - слой **бизнес-сущностей**, содержащий в себе слайсы, относящиеся напрямую к бизнес-моделям или синтетическим сущностям, необходимым только на фронтенде
    - *Примеры: `user`, `i18n`, `order`*
- `/processes` - слой **бизнес-процессов**, пронизывающих приложение
    - *Примеры: `payment`, `auth`, `quick-tour`*

### `BREAKING` Abstractions & Naming

Теперь определены [конкретные абстракции][refs-abstractions] и [четкие рекоммендации для их нейминга][refs-adaptability]

[disc-process]: https://github.com/feature-sliced/wiki/discussions/20
[disc-features]: https://github.com/feature-sliced/wiki/discussions/23
[disc-entities]: https://github.com/feature-sliced/wiki/discussions/18#discussioncomment-422649
[disc-shared]: https://github.com/feature-sliced/wiki/discussions/31#discussioncomment-453020

[disc-ui]: https://github.com/feature-sliced/wiki/discussions/31#discussioncomment-453132
[disc-model]: https://github.com/feature-sliced/wiki/discussions/31#discussioncomment-472645
[disc-api]: https://github.com/feature-sliced/wiki/discussions/66

#### Layers
- Директорию со **слоем инициализации приложения** стоит называть `/app`
    - *Прежние варианты: `app`, `core`, `init`, `src/index` (и такое бывает)*
- Директорию со **слоем бизнес-процессов** [стоит][disc-process] называть `/processes`
    - *Прежние варианты: `processes`, `flows`, `worfklows`*
- Директорию со **слоем страниц приложения** стоит называть `/pages`
    - *Прежние варианты: `pages`, `screens`, `views`, `layouts`*
- Директорию со **слоем частей функциональности** [стоит][disc-features] называть `/features`
    - *Прежние варианты: `features`, `containers`*
- Директорию со **слоем бизнес-сущностей** [стоит][disc-entities] называть `/entities`
    - *Прежние варианты: `entities`, `models`, `shared`*
- 🔥 Директорию со **слоем переиспользуемого инфраструктурного кода** [стоит][disc-shared] называть `/shared`
    - *Прежние варианты: `shared`, `common`, `lib`*

#### Segments
- 🔥 Директорию с **UI-сегментом** [стоит][disc-ui] называть `/ui`
    - *Прежние варианты: `ui`, `components`, `view`*
- 🔥 Директорию с **БЛ-сегментом** [стоит][disc-model] называть `/model`
    - *Прежние варианты: `model`, `store`, `state`, `services`, `controller`*
- Директорию с сегментом **вспомогательного кода** стоит называть `/lib`
    - *Прежние варианты: `lib`, `libs`, `utils`, `helpers`*
- Директорию с **API-сегментом** [стоит][disc-api] называть `/api`
    - *Прежние варианты: `api`, `service`, `requests`, `queries`*
- Директорию с **сегментом конфигурации приложения** стоит называть `/config`
    - *Прежние варианты: `config`, `env`, `get-env`*

### `REFINED` Low coupling

Теперь гораздо проще [соблюдать принцип низкой связности](low-coupling.md) между модулями, благодаря новым слоям.

*При этом по-прежнему рекоммендуется максимально избегать случаев, где крайне трудно "расцепить" модули*

## См. также
- [Заметки с доклада "React SPB Meetup #1"][ext-tg-spb]
- [React Berlin Talk - Oleg Isonen "Feature Driven Architecture"][ext-kof-fdd]
- [Сравнение с v1 (community-chat)](https://t.me/feature_sliced/493)
- [Новые идеи v2 с пояснениями (atomicdesign-chat)][ext-tg-v2-draft]
- [Обсуждение абстракций и нейминга для новой версии методологии (v2)](https://github.com/feature-sliced/wiki/discussions/31)
