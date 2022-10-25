// enforces commits in the form "<type>(scope): <subject>"
const fullEnforcementHeaderPattern = /^(\w*)\((\w*)\):\s(.*)$/;

// enforces commits in the form "<subject>"
const ticketNumberOnlyHeaderPattern = /^(.*)$/;

// enforces commits in the form "<type>: <subject>"
const typeEnforcementHeaderPattern = /^(\w*):\s(.*)$/;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: fullEnforcementHeaderPattern, // TODO: add the commit enforcement pattern to your liking
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'scope-empty': [1, 'never'],
  },
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
