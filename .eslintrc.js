module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier',
    ],
    ignorePatterns: [
        '!.*',
        'dist',
        'node-modules'
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
        },
    ],
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        indent: ['error', 4],
        eqeqeq: ['warn', 'smart'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'linebreak-style': ['warn', 'unix'],
        'no-multi-assign': 'error',
        'no-var': 'warn',
        'no-duplicate-imports': 'warn',
        'prefer-const': 'warn',
        '@typescript-eslint/ban-ts-comment': [
            'warn',
            { 'ts-ignore': 'allow-with-description' },
        ],
        '@typescript-eslint/consistent-type-definitions': [
            'error',
            'interface'
        ]
    },
};
