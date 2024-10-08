module.exports = {
    cache: true,
    reportDescriptionlessDisables: true,
    reportInvalidScopeDisables: false,
    reportNeedlessDisables: true,
    extends: ['stylelint-config-standard'],
    customSyntax: 'postcss-styled-syntax',
    rules: {
      'declaration-no-important': true,
      'declaration-block-no-shorthand-property-overrides': true,
      'length-zero-no-unit': true,
      'color-named': 'never',
      'font-weight-notation': 'numeric',
      'color-no-invalid-hex': true,
      'selector-disallowed-list': [
        '/(\\.|#)+(?!shortcut-).*$/',
      ],
      'no-irregular-whitespace': true,
      'declaration-property-unit-disallowed-list': [
        {
          'font-size': ['px', 'em', 'rem', '%'],
          'border-radius': ['px', 'em', 'rem', '%'],
        },
      ],
      'declaration-property-value-disallowed-list': [
        {
          '/color|background-color|border-color|fill|stroke/': ['/^#/', '/^rbg/', '/^rgba/'],
          '/border|background/': ['/#/', '/rbg/', '/rgba/'],
        },
      ],
    },
  };
