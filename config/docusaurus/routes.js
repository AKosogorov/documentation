// Custom "not-docusaurus-related" config for routes setup
// @see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects

// FIXME: move to root and remove "docs" redundant prefix later
const SECTIONS = {
    BRANDING: {
        shortPath: "/branding",
        fullPath: "/docs/branding",
    },
    MIGRATION: {
        shortPath: "/docs/guides/migration",
        fullPath: "/docs/guides/migration/from-legacy",
    },
};

/**
 * Redirections after restructuring docs
 * @remark For compatibility with legacy links
 */
const LEGACY_ROUTES = [
    {
        group: "🚀 Get Started",
        details: "Simplified and merged",
        children: [
            {
                title: "Tutorial",
                from: "/docs/get-started/quick-start",
                to: "/docs/get-started/tutorial",
            },
            {
                title: "Decompose Cheatsheet",
                from: [
                    "/docs/get-started/tutorial/decompose",
                    "/docs/get-started/tutorial/design-mockup",
                    "/docs/get-started/onboard/cheatsheet",
                ],
                to: "/docs/get-started/cheatsheet",
            },
        ],
    },
    {
        group: "🍰 Alternatives",
        details: "Moved and merged to /about/alternatives as advanced materials",
        children: [
            {
                title: "BBoM",
                from: "/docs/about/alternatives/big-ball-of-mud",
                to: "/docs/about/alternatives",
            },
            {
                title: "Design Principles",
                from: "/docs/about/alternatives/design-principles",
                to: "/docs/about/alternatives",
            },
            {
                title: "DDD",
                from: "/docs/about/alternatives/ddd",
                to: "/docs/about/alternatives",
            },
            {
                title: "Clean Architecture",
                from: "/docs/about/alternatives/clean-architecture",
                to: "/docs/about/alternatives",
            },
            {
                title: "Frameworks",
                from: "/docs/about/alternatives/frameworks",
                to: "/docs/about/alternatives",
            },
            {
                title: "Atomic Design",
                from: "/docs/about/alternatives/atomic-design",
                to: "/docs/about/alternatives",
            },
            {
                title: "Smart & Dumb components",
                from: "/docs/about/alternatives/smart-dumb-components",
                to: "/docs/about/alternatives",
            },
            {
                title: "Feature Driven",
                from: "/docs/about/alternatives/feature-driven",
                to: "/docs/about/alternatives",
            },
        ],
    },
    {
        group: "🍰 Promote & Understanding",
        details: "Moved to /about as advanced materials",
        children: [
            {
                title: "Integration, Pros & Cons, Limitations",
                from: "/docs/get-started/onboard/pros-cons",
                to: "/docs/about/promote/integration",
            },
            {
                title: "Partial application",
                from: "/docs/get-started/onboard/partial-application",
                to: "/docs/about/promote/partial-application",
            },
            {
                title: "For team",
                from: "/docs/get-started/onboard/for-team",
                to: "/docs/about/promote/for-team",
            },
            {
                title: "For company",
                from: "/docs/get-started/onboard/promote",
                to: "/docs/about/promote/for-company",
            },
            {
                title: "Motivation",
                from: "/docs/get-started/motivation",
                to: "/docs/about/motivation",
            },
            {
                title: "Knowledge types",
                from: "/docs/reference/knowledge-types",
                to: "/docs/about/understanding/knowledge-types",
            },
            {
                title: "Needs driven",
                from: "/docs/concepts/needs-driven",
                to: "/docs/about/understanding/needs-driven",
            },
            {
                title: "About architecture",
                from: "/docs/concepts/architecture",
                to: "/docs/about/understanding/architecture",
            },
            {
                title: "Naming adaptability",
                from: "/docs/concepts/naming-adaptability",
                to: "/docs/about/understanding/naming-adaptability",
            },
            {
                title: "Signals of architecture",
                from: "/docs/concepts/signals",
                to: "/docs/about/understanding/signals",
            },
            {
                title: "Abstractions of architecture",
                from: "/docs/concepts/abstractions",
                to: "/docs/about/understanding/abstractions",
            },
        ],
    },
    {
        group: "📚 Reference guidelines (isolation & units)",
        details: "Moved to /reference as theoretical materials (old concepts)",
        children: [
            {
                title: "Decouple of entities",
                from: "/docs/concepts/decouple-entities",
                to: "/docs/reference/isolation/decouple-entities",
            },
            {
                title: "Low Coupling & High Cohesion",
                from: "/docs/concepts/low-coupling",
                to: "/docs/reference/isolaiton/low-coupling",
            },
            {
                title: "Cross-communication",
                from: "/docs/concepts/cross-communication",
                to: "/docs/reference/isolation",
            },
            {
                title: "App splitting",
                from: "/docs/concepts/app-splitting",
                to: "/docs/reference/units/decomposition",
            },
            {
                title: "Glossary",
                from: "/docs/reference/glossary",
                to: "/docs/reference/units",
            },
            {
                title: "Segments",
                from: "/docs/reference/segments",
                to: "/docs/reference/units/segments",
            },
            {
                title: "Layers",
                from: "/docs/reference/layers/overview",
                to: "/docs/reference/units/layers",
            },
            {
                title: "Layers:app",
                from: "/docs/reference/layers/app",
                to: "/docs/reference/units/layers/app",
            },
            {
                title: "Layers:processes",
                from: "/docs/reference/layers/processes",
                to: "/docs/reference/units/layers/processes",
            },
            {
                title: "Layers:pages",
                from: "/docs/reference/layers/pages",
                to: "/docs/reference/units/layers/pages",
            },
            {
                title: "Layers:widgets",
                from: "/docs/reference/layers/widgets",
                to: "/docs/reference/units/layers/widgets",
            },
            {
                title: "Layers:features",
                from: "/docs/reference/layers/features",
                to: "/docs/reference/units/layers/features",
            },
            {
                title: "Layers:entities",
                from: "/docs/reference/layers/entities",
                to: "/docs/reference/units/layers/entitites",
            },
            {
                title: "Layers:shared",
                from: "/docs/reference/layers/shared",
                to: "/docs/reference/units/layers/shared",
            },
        ],
    },
    {
        group: "🎯 Bad Practices handbook",
        details: "Moved to /guides as practice materials",
        children: [
            {
                title: "Cross-imports",
                from: "/docs/concepts/issues/cross-imports",
                to: "/docs/guides/issues/cross-imports",
            },
            {
                title: "Desegmented",
                from: "/docs/concepts/issues/desegmented",
                to: "/docs/guides/issues/desegmented",
            },
            {
                title: "Routes",
                from: "/docs/concepts/issues/routes",
                to: "/docs/guides/issues/routes",
            },
        ],
    },
    {
        group: "🎯 Examples",
        details: "Grouped and simplified into /guides/examples as practical examples",
        children: [
            {
                title: "Viewer logic",
                from: "/docs/guides/examples/viewer",
                to: "/docs/guides/examples/auth",
            },
            {
                title: "Monorepo",
                from: "/docs/guides/monorepo",
                to: "/docs/guides/examples/monorepo",
            },
            {
                title: "White Labels",
                from: "/docs/guides/white-labels",
                to: "/docs/guides/examples/white-labels",
            },
        ],
    },
    {
        group: "🎯 Migration",
        details: "Grouped and simplified into /guides/migration as migration guidelines",
        children: [
            {
                title: "Migration from V1",
                from: "/docs/guides/migration-from-v1",
                to: "/docs/guides/migration/from-v1",
            },
            {
                title: "Migration from Legacy",
                from: "/docs/guides/migration-from-legacy",
                to: "/docs/guides/migration/from-legacy",
            },
        ],
    },
    {
        group: "🎯 Tech",
        details: "Grouped into /guides/tech as tech-specific usage guidelines",
        children: [
            {
                title: "Usage with NextJS",
                from: "/docs/guides/usage-with-nextjs",
                to: "/docs/guides/tech/with-nextjs",
            },
        ],
    },
];

// @returns { from, to }[]
const LEGACY_ROUTES_REDIRECTS = LEGACY_ROUTES.reduce((acc, group) => {
    const cleanItems = group.children.map(({ from, to }) => ({ from, to }));
    return acc.concat(cleanItems);
}, []);

// FIXME: temp, resolve later
// @returns { from, to }[]
const SECTIONS_REDIRECTS = Object.values(SECTIONS).map(({ shortPath, fullPath }) => ({
    from: shortPath,
    to: fullPath,
}));

// !!! FIXME: refactor later!
const _TOTAL_ROUTES = [
    "/docs/about",
    "/docs/about/alternatives",
    "/docs/about/understanding/knowledge-types",
    "/docs/about/mission",
    "/docs/about/motivation",
    "/docs/about/promote/for-company",
    "/docs/about/promote/for-team",
    "/docs/about/promote/integration",
    "/docs/about/promote/partial-application",
    "/docs/branding",
    "/docs/reference/units/decomposition",
    "/docs/about/understanding/abstractions",
    "/docs/about/understanding/architecture",
    "/docs/reference/isolaiton",
    "/docs/reference/isolaiton/decouple-entities",
    "/docs/guides/issues/cross-imports",
    "/docs/guides/issues/desegmented",
    "/docs/guides/issues/routes",
    "/docs/reference/isolaiton/low-coupling",
    "/docs/about/understanding/naming-adaptability",
    "/docs/about/understanding/needs-driven",
    "/docs/reference/public-api",
    "/docs/about/understanding/signals",
    "/docs/get-started",
    "/docs/get-started/overview",
    "/docs/get-started/cheatsheet",
    "/docs/get-started/faq",
    "/docs/get-started/tutorial",
    "/docs/guides",
    "/docs/guides/examples",
    "/docs/guides/examples/auth",
    "/docs/guides/examples/autocompleted",
    "/docs/guides/examples/browser-api",
    "/docs/guides/examples/cms",
    "/docs/guides/examples/feedback",
    "/docs/guides/examples/i18n",
    "/docs/guides/examples/metric",
    "/docs/guides/examples/monorepo",
    "/docs/guides/examples/page-layout",
    "/docs/guides/examples/platforms",
    "/docs/guides/examples/ssr",
    "/docs/guides/examples/theme",
    "/docs/guides/examples/types",
    "/docs/guides/examples/white-labels",
    "/docs/guides/migration/from-legacy",
    "/docs/guides/migration/from-v1",
    "/docs/guides/tech/with-nextjs",
    "/docs/",
    "/docs/privacy",
    "/docs/reference",
    "/docs/reference/units",
    "/docs/reference/units/layers/app",
    "/docs/reference/units/layers/entities",
    "/docs/reference/units/layers/features",
    "/docs/reference/units/layers/overview",
    "/docs/reference/units/layers/pages",
    "/docs/reference/units/layers/processes",
    "/docs/reference/units/layers/shared",
    "/docs/reference/units/layers/widgets",
    "/docs/reference/units/segments",
];
// from: "/en/docs/*" to "/docs/*"
const I18N_REDIRECTS = _TOTAL_ROUTES.map((route) => ({
    from: route.replace("/docs", "/en/docs"),
    to: route,
}));
// NOTE: temp redirects, resolve later
// https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
const REDIRECTS = [...SECTIONS_REDIRECTS, ...LEGACY_ROUTES_REDIRECTS, ...I18N_REDIRECTS];

module.exports = {
    LEGACY_ROUTES,
    REDIRECTS,
};
