'use strict';

module.exports = {
  "extends": [
    "stylelint-config-styled-components",
  ],
  'plugins': [
    'stylelint-high-performance-animation',
    'stylelint-order',
  ],
  'processors': [
    [
      'stylelint-processor-styled-components',
      {
        'parserPlugins': [
          'jsx',
          'classProperties',
          'exportDefaultFrom',
        ],
      },
    ],
  ],
  'rules': {
    'plugin/no-low-performance-animation-properties': true,
    'color-no-invalid-hex': true,

    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,

    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,

    'string-no-newline': true,

    'unit-no-unknown': true,

    'property-no-unknown': true,

    'keyframe-declaration-no-important': true,

    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,

    'block-no-empty': true,

    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,

    'media-feature-name-no-unknown': [true, {
      ignoreMediaFeatureNames: [
        'min-device-pixel-ratio',
      ],
    }],

    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'each',
        'else',
        'extend',
        'function',
        'for',
        'if',
        'include',
        'mixin',
        'return',
      ],
    }],

    'comment-no-empty': true,

    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,

    'color-named': 'never',
    'color-no-hex': null,

    'number-max-precision': 2,

    'unit-blacklist': ['em', {
      'severity': 'warning',
    }],

    'shorthand-property-no-redundant-values': true,

    'property-blacklist': ['float', {
      'severity': 'warning',
    }],

    'declaration-block-no-redundant-longhand-properties': true,

    'comment-word-blacklist': ['/^TODO:/', {
      'severity': 'warning',
    }],

    'no-unknown-animations': true,

    'color-hex-case': 'upper',
    'color-hex-length': 'long',

    'font-family-name-quotes': 'always-where-recommended',

    'font-weight-notation': 'numeric',

    'function-comma-newline-after': 'always-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',

    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    'length-zero-no-unit': true,

    'unit-case': 'lower',

    'value-keyword-case': null,

    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-max-empty-lines': 0,

    'property-case': 'lower',

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': null,

    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    'block-closing-brace-empty-line-before': ['never'],
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-before': 'always-single-line',

    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    'indentation': 2,
    'linebreaks': 'unix',
    'max-empty-lines': 1,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true,

    'order/properties-order': [
      'content',

      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',

      'z-index',
      'position',
      'top',
      'right',
      'bottom',
      'left',

      'display',
      'align-items',
      'align-self',
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'justify-content',
      'order',

      'background',
      'background-attachment',
      'background-clip',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',

      'width',
      'max-width',
      'min-width',

      'height',
      'max-height',
      'min-height',

      'border',
      'border-color',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-radius',

      'box-shadow',

      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'box-sizing',

      'float',
      'clear',

      'columns',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-span',
      'column-count',
      'column-width',

      'transform',
      'transform-origin',

      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',

      'animation',
      'animation-delay',
      'animation-direction',
      'animation-duration',
      'animation-fill-mode',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',

      'color',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'font-style',
      'font-variant',
      'font-weight',
      'letter-spacing',
      'line-height',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-shadow',
      'text-transform',
      'text-wrap',

      'white-space',
      'word-spacing',

      'overflow',
      'overflow-x',
      'overflow-y',

      'opacity',
      'vertical-align',
      'visibility',
      'cursor',
    ],
  },
};
