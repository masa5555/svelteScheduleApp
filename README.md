## なぜやるか
- svelte, cypress試す

## コンセプト
- TODO細分化
- カレンダー表示
- 時間計測、達成度表示
全部組み合わせたアプリは新しい気がしたので

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
- pre-commit hook で lint, testを行う
- github action


### まだやっていない
issueに挙げた

### 考慮
- svelteKitまだ使ってない
[SvelteKit](https://kit.svelte.dev)
- ブラウザにsvelte-devtool入れても、有効にならない
