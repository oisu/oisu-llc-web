# oisu.jp

合同会社おいすのサイト。Astro で静的な HTML を作り、Vercel に置いている（`master` へ push すると本番にデプロイ）。

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # dist/ に出力
```

- Node 22。
- ページ: `src/pages/index.astro`。会社の情報・差し色・お問い合わせフォームの送り先は `src/config.ts`。
- 色・線・影は `src/styles/global.css` の変数。差し色は `html[data-accent]` で切り替わる（ヘッダーの丸）。
- `public/` の中はそのまま配る。
  - `public/apps/gyoseishoshi/`: 行政書士アプリのサポート・プライバシーポリシー・利用規約。flashcards リポジトリの `scripts/build_legal_pages.py` で作ってコピーする。
  - `public/projects/gyoseishoshi/`: トップの「自社プロジェクト」の行政書士アプリの紹介動画（`promo.mp4`・540×960）と最初のコマ（`poster.jpg`）、拡大して見る用のフル解像度の動画（`promo-1080.mp4`。`out/promo.mp4` をコピー）。flashcards リポジトリの `promo/` で `npx remotion render Promo out/promo-540.mp4 --scale=0.5` と書き出してコピーする。
  - `public/service-worker.js`: 以前のサイトのサービスワーカーを消すためのもの。消さない。
