module.exports = {
    parser: '@typescript-eslint/parse',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier:@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    perserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {},
};
