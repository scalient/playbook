module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    /**
     * The arrow function's arrow should be preceded and succeeded by a space.
     */
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    /* Dangling commas enforce consistency and make diffs easy on the eye. */
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    /* Disallows weird comma placement. */
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    /*
     * Curly braces denote new basic blocks. Since control flow statements lead to Turing completeness, keywords like
     * `if` statements should be clearly delineated.
     */
    curly: [
      'error',
      'all',
    ],
    /*
     * Dots pertaining to property access and function calls should be placed before the line break, like so:
     *
     * ```
     * let joined = ''.
     *   concat('1').
     *   concat('2').
     *   concat('3');
     * ```
     *
     * Although this style looks awkward, it not-so-subtly hints to the parser which production rules to expect.
     */
    'dot-location': [
      'error',
      'object',
    ],
    /* Files should end with a newline. */
    'eol-last': [
      'error',
      'always',
    ],
    /* If you are using type coercion of any kind with `==`, you're not in control of the code. */
    'eqeqeq': [
      'error',
      'always',
    ],
    /* Four spaces is too extravagant. */
    indent: [
      'error',
      2,
      {
        /*
         * `switch` cases need another level of indentation since they might have their own lexical scope and `switch`
         * itself demands curly braces.
         */
        SwitchCase: 1,
        /* A workaround for `https://github.com/babel/babel-eslint/issues/681`. */
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    /* Object keys should be followed by a colon, followed by exactly one space, followed by the value. */
    'key-spacing': [
      'error',
      {},
    ],
    /* Improves readability of keywords. */
    'keyword-spacing': [
      'error',
      {after: true},
    ],
    /* We work on Unix-like systems. Also, Windows is weird and non-compliant. */
    'linebreak-style': [
      'error',
      'unix',
    ],
    /*
     * This is a multiline starred block comment. This is a multiline starred block comment. This is a multiline starred
     * block comment. This is a multiline starred block comment. This is a multiline starred block comment. This is a...
     */
    'multiline-comment-style': [
      'error',
      'starred-block',
    ],
    /* Helps the user identify stray `console.log`s. */
    'no-console': [
      'error',
      {allow: ['warn', 'error']},
    ],
    /* Disallows extra spaces in between lexical constructs. */
    'no-multi-spaces': [
      'error',
      {'ignoreEOLComments': true},
    ],
    /* Disallows too many empty lines. */
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    /* Disallows trailing spaces outside of comments. */
    'no-trailing-spaces': [
      'error',
      {ignoreComments: true},
    ],
    /* Disallows unused variables. */
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    /*
     * Disallows spaces inside of curly braces for consistency.
     */
    'object-curly-spacing': [
      'error',
      'never',
    ],
    /* Use of multiline declarations in curly braces should have consistent spacing. */
    'object-curly-newline': [
      'error',
      {consistent: true},
    ],
    /**
     * Binary operators straddling different lines should be placed before the line break, like so:
     *
     * ```
     * let sum = 1 +
     *         2 +
     *         3;
     * ```
     *
     * Although this style looks awkward, it not-so-subtly hints to the parser which production rules to expect.
     */
    'operator-linebreak': [
      'error',
      'after',
    ],
    /*
     * Single and double quotes are equivalent in JavaScript, except using single quotes frees us up to not escape
     * double-quoted HTML attribute values in strings. See
     * `https://www.reddit.com/r/javascript/comments/4m715v/should_i_use_or/d3tpk1o`.
     */
    'quotes': [
      'error',
      'single',
    ],
    /* Semicolons terminate statements, and they should do just that. */
    semi: [
      'error',
      'always',
    ],
    /* Semicolons should appear at the end of statements. */
    'semi-style': [
      'error',
      'last',
    ],
    /* Control flow statements used to delineate new basic blocks should be treated care: See the `curly` rule. */
    'space-before-blocks': [
      'error',
      'always',
    ],
    /*
     * Parentheses should be separated from keywords in the case of `function () {}` and `async () => {}` for
     * readability.
     */
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    /*
     * Disallows spaces inside of parentheses for consistency.
     */
    'space-in-parens': [
      'error',
      'never',
    ],
    /**
     * Binary operators should be surrounded by spaces.
     */
    'space-infix-ops': [
      'error',
      {'int32Hint': false},
    ],
  },
};
