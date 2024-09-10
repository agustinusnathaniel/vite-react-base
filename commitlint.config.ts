import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const commitLintConfiguration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [RuleConfigSeverity.Error, 'always', 'kebab-case'],
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        // general
        'components',
        'constants',
        'hooks',
        'layout',
        'models',
        'services',
        'pages',
        'styles',
        'utils',
      ],
    ],
  },
};

export default commitLintConfiguration;
