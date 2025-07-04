module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'chore',
        'style',
        'fix',
        'hotfix',
        'docs',
        'refactor',
        'test',
        'init',
        'build',
        'deploy',
      ],
    ],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100],
    'header-issue-suffix': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-issue-suffix': (parsed) => {
          const { header } = parsed;
          const issuePattern = /\(#\d+\)$/;
          const typePattern = /^(feat|fix|chore|style|docs|refactor|test|init|build|deploy|hotfix)/;

          if (!typePattern.test(header)) {
            return [false, '❌ 커밋 메시지는 feat, fix, chore 등 올바른 타입을 포함해야 합니다.'];
          }

          if (!issuePattern.test(header)) {
            return [false, '❌ 커밋 메시지는 반드시 이슈 번호로 끝나야 합니다.'];
          }

          return [true];
        },
      },
    },
  ],
};
