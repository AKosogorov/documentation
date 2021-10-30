const DOMAIN = "https://feature-sliced.design/";
const GITHUB_ORG = "https://github.com/feature-sliced";
const GITHUB_DOCS = "https://github.com/feature-sliced/documentation";
const TELEGRAM = "https://t.me/feature_sliced";
const YOUTUBE = "https://www.youtube.com/channel/UCkng_PHLatpDKPOIKfI731A";
const TWITTER = "https://twitter.com/feature_sliced";
const OPEN_COLLECTIVE = "https://opencollective.com/feature-sliced";
const DEFAULT_LOCALE = "ru";

// Конкретные страницы нужны, т.к. отдельно секции доки не индексируются
// FIXME: Привести в порядок формат урлов
const SECTIONS = {
    INTRO: {
        shortPath: "/docs",
        fullPath: "/docs/intro",
    },
    GET_STARTED: {
        shortPath: "/docs/get-started",
        fullPath: "/docs/get-started",
    },
    CONCEPTS: {
        shortPath: "/docs/concepts",
        fullPath: "/docs/concepts",
    },
    GUIDES: {
        shortPath: "/docs/guides",
        fullPath: "/docs/guides",
    },
    REFERENCE: {
        shortPath: "/docs/reference",
        fullPath: "/docs/reference",
    },
    LAYERS: {
        shortPath: "/docs/reference/layers",
        fullPath: "/docs/reference/layers/overview",
    },
    ABOUT: {
        shortPath: "/docs/about",
        fullPath: "/docs/about",
    },
    EXAMPLES: {
        shortPath: "/examples",
        fullPath: "/examples",
    },
};

/** @typedef {import('@docusaurus/types').DocusaurusConfig} Config */

/** @type {Config["themeConfig"]["navbar"]} */
const navbar = {
    title: "feature-sliced",
    logo: {
        alt: "logo",
        // FIXME: Сделать под SVG позднее
        src: "img/logo.png",
    },
    items: [
        // left
        {
            type: "dropdown",
            label: "📖 Docs",
            position: "left",
            items: [
                {
                    label: "🔎 Intro",
                    to: SECTIONS.INTRO.fullPath,
                    activeBasePath: SECTIONS.INTRO.fullPath,
                },
                {
                    label: "🚀 Get Started",
                    to: SECTIONS.GET_STARTED.shortPath,
                    activeBasePath: SECTIONS.GET_STARTED.shortPath,
                },
                {
                    label: "🎯 Guides",
                    to: SECTIONS.GUIDES.shortPath,
                    activeBasePath: SECTIONS.GUIDES.shortPath,
                },
                {
                    label: "🧩 Concepts",
                    to: SECTIONS.CONCEPTS.shortPath,
                    activeBasePath: SECTIONS.CONCEPTS.shortPath,
                },
                // {
                //     label: "📚 Reference",
                //     to: SECTIONS.REFERENCE.shortPath,
                //     activeBasePath: SECTIONS.REFERENCE.shortPath,
                // },
                {
                    label: "📚 Background",
                    to: SECTIONS.ABOUT.shortPath,
                    activeBasePath: SECTIONS.ABOUT.shortPath,
                },
                {
                    label: "🚩 Community",
                    to: "/docs/community",
                    activeBasePath: "/docs/community",
                },
            ],
        },
        {
            label: "🛠 Examples",
            to: SECTIONS.EXAMPLES.fullPath,
            position: "left",
        },
        // right
        {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
                {
                    to: "https://featureslices.dev/v1.0.html",
                    label: "v1.0",
                },
                {
                    to: "https://featureslices.dev/v0.1.html",
                    label: "v0.1",
                },
                {
                    to: "https://github.com/feature-sliced/documentation/tree/rc/feature-driven",
                    label: "feature-driven",
                },
                {
                    to: "/versions",
                    // TODO: (i18n) Add translation
                    label: "All versions",
                },
            ],
        },
        {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
                {
                    href: "https://github.com/feature-sliced/documentation/issues/244",
                    label: "Help Us Translate",
                },
            ],
        },
        {
            "href": TELEGRAM,
            "position": "right",
            "className": "ext-link telegram",
            "aria-label": "Telegram community chat",
        },
        {
            "href": GITHUB_DOCS,
            "position": "right",
            "className": "ext-link github",
            "aria-label": "GitHub repository",
        },
    ],
};

/** @type {Config["themeConfig"]["footer"]} */
const footer = {
    style: "dark",
    links: [
        {
            title: "Specs",
            items: [
                { label: "Documentation", to: "/docs/intro" },
                { label: "Discussions", to: `${GITHUB_DOCS}/discussions` },
            ],
        },
        {
            title: "Community",
            items: [
                { label: "Telegram", href: TELEGRAM },
                { label: "Twitter", href: TWITTER },
                { label: "Open Collective", href: OPEN_COLLECTIVE },
                { label: "YouTube", href: YOUTUBE },
            ],
        },
        {
            title: "More",
            items: [
                // TODO: Добавить ссыль на dev.to позднее (как доработаем)
                // { label: 'Blog', to: '/blog' },
                { label: "GitHub", href: GITHUB_ORG },
            ],
        },
    ],
    logo: {
        alt: "feature-sliced - Structural pattern for Frontend projects",
        src: "img/logo.png",
        href: GITHUB_ORG,
    },
    copyright: `Copyright © ${new Date().getFullYear()}  Feature-Sliced`,
};

/** @type {Config["presets"]} */
const presets = [
    [
        "@docusaurus/preset-classic",
        {
            docs: {
                path: `i18n/${DEFAULT_LOCALE}/docusaurus-plugin-content-docs/current`,
                editLocalizedFiles: true,
                sidebarPath: require.resolve("./sidebars.js"),
                // Please change this to your repo.
                editUrl: `${GITHUB_DOCS}/edit/master/website/`,
                // // Equivalent to `enableUpdateBy`.
                // showLastUpdateAuthor: true,
                // Equivalent to `enableUpdateTime`.
                // FIXME: convert DD/MM/YYYY format
                showLastUpdateTime: true,
                versions: {
                    current: {
                        label: `v2.0-beta 🍰`,
                    },
                },
            },
            // blog: {
            //   showReadingTime: true,
            //   // Please change this to your repo.
            //   editUrl:
            //     `${GITHUB_DOCS}/edit/master/website/blog/`,
            // },
            theme: {
                customCss: require.resolve("./src/app/index.css"),
            },
            // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap
            sitemap: {
                changefreq: "weekly",
                priority: 0.5,
                trailingSlash: false,
            },
        },
    ],
];

/** @type {Config["plugins"]} */
const plugins = [
    // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
    [
        "@docusaurus/plugin-client-redirects",
        {
            // NOTE: Редиректы работают при прямом переходе по ссылке в адресной строке
            // Если же переходить чисто по ссылкам, то редиректа не будет (только при обновлении страницы)
            // TODO: Сделать позже, чтоб редирект работал и при переходе с внутренних ссылок
            // И убрать хардкод с доки и конфига
            redirects: Object.values(SECTIONS)
                // Иначе выбрасывает ошибку
                .filter(({ shortPath, fullPath }) => shortPath !== fullPath)
                .map(({ shortPath, fullPath }) => ({
                    from: shortPath,
                    to: fullPath,
                }))
                // NOTE: temp redirects, resolve later
                .concat([
                    {
                        from: "/docs/get-started/quick-start",
                        to: "/docs/get-started/tutorial/quick-start",
                    },
                ]),
        },
    ],
    // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image
    [
        "@docusaurus/plugin-ideal-image",
        {
            quality: 70,
            max: 1030, // max resized image's size.
            min: 640, // min resized image's size. if original is lower, use that size.
            steps: 2, // the max number of images generated between min and max (inclusive)
        },
    ],
];

/** @type {Config["themeConfig"]["algolia"]} */
const algolia = {
    apiKey: process.env.ALGOLIA_KEY,
    indexName: "feature-sliced",
    // FIXME: При включении отрубает поиск (исправить поздней)
    // // Для поиска с учетом версий (на будущее)
    // contextualSearch: true,
};

/** @type {Config["themeConfig"]["announcementBar"]} */
const announcementBar = {
    id: "bar", // Any value that will identify this message.
    // content: `<b>WIP:</b> Текущая версия методологии находится на стадии разработки и некоторые детали <i>могут измениться</i>`,
    // backgroundColor: '#e6a700', // As caution by docusaurus (defaults was `#fff`)
    // FIXME: (i18n) translate by locale later (how to?)
    // content: `If you are using the methodology <a href="/versions">(v0 / v1 / v2)</a> at work or in personal projects, <a href="https://github.com/feature-sliced/documentation/issues/131" target="_blank" rel="noreferrer noopener">tell, us!</a>`,
    content: `📚 Documentation refinements are in progress. <a href="https://github.com/feature-sliced/documentation/issues/263" target="_blank" rel="noreferrer noopener">Stay tuned for updates</a> and <a href="https://forms.gle/nsYua6bMMG5iBB3v7" target="_blank" rel="noreferrer noopener">share your feedback</a>`,
    backgroundColor: "#5c9cb5", // As primary theme
    textColor: "#fff", // Defaults to `#000`.
    isCloseable: false, // Defaults to `true`.
};

/** @type {Config["themeConfig"]["colorMode"]} */
const colorMode = {
    respectPrefersColorScheme: true,
};

/**
 * @type {Config["themeConfig"]["metadatas"]}
 * @see https://docusaurus.io/docs/api/themes/configuration#meta-image
 * @see https://docusaurus.io/docs/api/themes/configuration#metadatas
 */
const metadatas = [
    { name: "twitter:site", content: "@feature_sliced" },
    { name: "twitter:card", content: "summary_large_image" },
    // NOTE: uncomment if need
    // { name: "description", content: description },
    // { name: "og:image", content: `/img/preview.png` }, // ~ inherits from themeConfig.image
    // { name: "og:title", content: title },
    // { name: "og:type", content: "website" },
    // { name: "og:description", content: description },
    // { name: "twitter:image", content: `/img/preview.png` }, // ~ inherits from themeConfig.image
    // { name: "twitter:title", content: title },
    // { name: "twitter:description", content: description },
];

/** @type {Config} */
module.exports = {
    title: "feature-sliced",
    // tagline: 'Методология для проектирования frontend проектов, нацеленная на разделение приложения согласно бизнес-логике и областям ответственности.',
    tagline: "Structural methodology for frontend projects",
    url: DOMAIN,
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "error",
    onDuplicateRoutes: "warn",
    favicon: "img/favicon.ico",
    organizationName: "feature-sliced", // Usually your GitHub org/user name.
    projectName: "documentation", // Usually your repo name.
    themeConfig: {
        image: "img/preview.png",
        metadatas,
        colorMode,
        navbar,
        footer,
        announcementBar,
        algolia,
        hideableSidebar: true,
    },
    i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: ["ru", "en"],
        localeConfigs: {
            ru: {
                label: "Русский",
            },
            en: {
                label: "English (WIP)",
            },
        },
    },
    presets,
    plugins,
};

if (!process.env.ALGOLIA_KEY) {
    delete module.exports.themeConfig.algolia;
}
