# wawoon.dev ブログ

Next.js と MDX で構築した個人技術ブログです。Tailwind CSS と Emotion を組み合わせたモダンなフロントエンド環境で、記事は **完全静的生成 (SSG)** され Vercel へデプロイされます。

---

## 主な特徴

- **Markdown / MDX** で直感的に記事を記述
- **Tailwind CSS + Emotion** による柔軟かつ高速なスタイリング
- **Prism.js (prism-react-renderer)** によるコードハイライト
- **next-seo** を利用した SEO / OGP タグ自動生成
- Google Analytics 連携 & 自動サイトマップ生成
- Vercel ワンクリックデプロイ (now.json 同梱)

## 使用技術

- Next.js 9 (TypeScript)
- MDX / next-mdx-enhanced
- Tailwind CSS (twin.macro) + Emotion
- Prism.js (prism-react-renderer)
- next-seo, sitemap-generator
- Vercel (旧 ZEIT Now)

## 動作環境

- Node.js **v12 以上** を推奨
- Yarn または npm

## クイックスタート

```bash
# リポジトリを取得
$ git clone https://github.com/wawoon/blog.git
$ cd blog

# 依存関係をインストール
$ yarn install        # または npm install

# 開発サーバーを起動
$ yarn dev            # または npm run dev

# ブラウザで確認
# → http://localhost:3000 を開く
```

### 本番ビルド

```bash
$ yarn build  # 静的ファイルを生成
$ yarn start  # 本番サーバーを起動
```

## ディレクトリ構成

```text
.
├── components/               共通 React コンポーネント
│   └── posts/                記事専用コンポーネント
├── hooks/                    カスタムフック
├── layouts/                  MDX レイアウト
├── lib/                      ユーティリティ関数
├── pages/                    Next.js ページ & API ルート
│   ├── posts/                記事 (.mdx) 本体
│   └── tags/                 タグ別一覧ページ
├── post_data/                フロントマターを解析し記事一覧を生成
├── public/                   静的アセット
├── tailwind.config.js        Tailwind 設定
├── next.config.js            Next.js 設定（MDX 連携など）
├── now.json                  Vercel デプロイ設定
└── package.json              スクリプト & 依存関係
```

## 記事の書き方

1. `pages/posts/` 配下に **`.mdx`** ファイルを作成します。
2. ファイル冒頭に以下のフロントマターを記述してください。

```markdown
---
title: "記事タイトル"
tags: "react nextjs"
published_at: "2023-01-01"
image: "/ogp/my-post.png"   # 任意
---

ここに本文を書きます。MDX のため React コンポーネントも挿入可能です 🎉
```

3. 開発サーバーを再読み込みすると新しい記事が自動で反映されます。

## デプロイ

Vercel CLI を使えば簡単にデプロイできます。

```bash
# ビルド → デプロイ
$ vercel
```

`now.json` によりビルドコマンドや環境変数が自動設定されます。

## ライセンス

MIT License © 2023 Yoshinori Kosaka

