[![End-to-End Tests (cypress)](https://github.com/masa5555/svelteScheduleApp/actions/workflows/e2e.yml/badge.svg?branch=master)](https://github.com/masa5555/svelteScheduleApp/actions/workflows/e2e.yml)

[![deploy GitHub Pages](https://github.com/masa5555/svelteScheduleApp/actions/workflows/github_pages.yml/badge.svg?branch=master)](https://github.com/masa5555/svelteScheduleApp/actions/workflows/github_pages.yml)

[![lint](https://github.com/masa5555/svelteScheduleApp/actions/workflows/linting.yml/badge.svg?branch=master)](https://github.com/masa5555/svelteScheduleApp/actions/workflows/linting.yml)

## なぜやるか
- svelte, cypress試す 

## コンセプト
- TODO細分化
- カレンダー表示
- 時間計測、達成度表示

全部が一つになったアプリは新しい気がしたので

## 技術
- server: ???
- frontend: svelte
- E2E test: cypress
https://typescript-jp.gitbook.io/deep-dive/intro-1/cypress#insutru

## app start
```sh
npm run dev
npm run test
```

## 工夫した点
- TypeScript, eslint, tsconfig導入
- フロントエンドに cypress で End-to-End テストを行う
- components 内を atomic design 風にした
  -（ネットで少し調べたことがある程度）
- pre-commit hook で lint, testを行う
- github action でも lint, test を行う
  - 成功しないと、masterに取り組めないように　(branch protection rule)

## 課題（わかっていないこと）
- 開発中で表示内容に変更がある場合、テストも変えなければいけないが、うまくやる方法はあるかどうか
- history 機能が現時点では無い

### まだやっていない
issueに挙げた

### 考慮
- svelteKitまだ使ってない
[SvelteKit](https://kit.svelte.dev)
- ブラウザにsvelte-devtool入れても、有効にならない
