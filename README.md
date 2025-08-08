# wawoon.dev

Next.js、MDX、Tailwind CSS、Emotion で構築した個人ブログです。

## 機能
- フロントマター（`title`、`tags`、`published_at`、任意の `image`）付きの Markdown/MDX で記事を執筆
- Tailwind CSS と Emotion によるレスポンシブなスタイリング
- Prism.js（`prism-react-renderer`）によるコードシンタックスハイライト
- `next-seo` と動的 Open Graph タグによる SEO 最適化
- サイトマップと `robots.txt` を自動生成
- Google Analytics 連携
- Vercel（旧 ZEIT Now）への簡単デプロイ

## 必要条件
- Node.js v10 以上
- Yarn または npm

## はじめ方

1. リポジトリをクローン
   ```bash
   git clone https://github.com/wawoon/blog.git
   cd blog
   ```
2. 依存関係をインストール
   ```bash
   yarn install
   # または
   npm install
   ```
3. 開発サーバーを起動
   ```bash
   yarn dev
   # または
   npm run dev
   ```
4. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

## 本番ビルドと起動

```bash
yarn build
yarn start
# npm の場合:
npm run build
npm run start
```

## フォルダ構成

```
.
├── components/               共有 React コンポーネント
│   └── posts/                ブログ記事向けコンポーネント
├── layouts/                  MDX レイアウト（デフォルトのポストレイアウト）
├── lib/                      ユーティリティ関数（例: 日付フォーマット）
├── post_data/                MDX のフロントマター解析・ソート
├── pages/                    Next.js ページ（`posts/` や API ルートを含む）
├── public/                   静的アセット（robots.txt、favicon など）
├── tailwind.config.js        Tailwind CSS の設定
├── babel-plugin-macros.config.js  Tailwind マクロ用の Babel 設定
├── next.config.js            MDX 対応の Next.js 設定
├── now.json                  Vercel（Now）デプロイ設定
├── package.json              プロジェクトメタデータとスクリプト
└── tsconfig.json             TypeScript 設定
```

## 記事の書き方

`pages/posts/` 配下に YAML フロントマター付きの `.md` または `.mdx` ファイルを作成します。

```markdown
---
title: "My New Post"
tags: "tag1 tag2"
published_at: "2021-01-01"
image: "/assets/image.png"  # 任意
---

ここに Markdown または MDX で本文を書きます...
```

## デプロイ

`now.json` は Vercel へのデプロイに対応済みです。以下を実行してください:

```bash
vercel
```

## ライセンス

MIT © Yoshinori Kosaka
