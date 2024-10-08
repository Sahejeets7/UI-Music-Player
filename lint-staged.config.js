module.exports = {
  '**/*.{json,yaml,scss}': ['prettier --write'],
  '!(**/.storybook/**/*)*.html': ['prettier --write'],
  '**/*.{js,jsx,ts,tsx}': ['prettier --write'],
};
