# TODOs: リファクタリング計画

本プロジェクトにおけるリファクタリングの優先度・タスク一覧をまとめる。

## 🥇 優先度：高
### 1. TypeScript 移行・型定義強化
- `post_data/raw.js` → `post_data/raw.ts` への移行とインターフェイス追加
- `hooks/useWindowSize.tsx` のファイル名およびコード typo 修正（`useWindowSize`）
- `lib/redirect.tsx` / `lib/date.ts` / `components` 配下の未型定義部分を TS 化し、`any` 排除
- MDXProvider のプロパティに対する型明示

### 2. スタイル・UI コンポーネント整理
- Emotion と Tailwind (twin.macro) の併用ルール定義とフォルダ分割
- グローバルスタイル・テーマ設定の分離（`src/styles/theme.ts` 等）
- 重複スタイルの共通コンポーネント化

### 3. MDX・FrontMatter 処理改善
- `raw.ts` での front-matter パースロジックをユーティリティ化して再利用性向上
- MDX ファイルの動的インポート化によるバンドルサイズ最適化

## 🥈 優先度：中
### 4. パスエイリアス導入
- `tsconfig.json` / `next.config.js` の `baseUrl` / `paths` 設定で絶対パスを利用
- `@components` / `@lib` / `@hooks` / `@layouts` などのエイリアスを定義

### 5. テスト環境・CI セットアップ
- Jest + React Testing Library / Testing Library for React の導入
- 主要コンポーネント（Header, PostCard, CodeBlock など）のユニットテスト作成
- GitHub Actions などで PR 時にテスト自動実行

### 6. ドキュメント整備
- `README.md` に環境構築・開発・デプロイ手順を追記
- 投稿フローやMDX記法ガイドを `docs/` 配下に整理
- `CONTRIBUTING.md` / `CODE_OF_CONDUCT.md` を追加検討

## 🥉 優先度：低
### 7. パフォーマンス最適化
- Next.js `next/image` の導入による画像最適化
- LCP 改善（動的インポート / プリフェッチ / キャッシュ戦略見直し）
- Lighthouse CI 連携

### 8. SEO 強化
- `next-seo.config.ts` のメタ情報拡充（OGP, TwitterCard, JSON-LD）
- サイトマップ自動生成 (`next-sitemap`)・ロボット設定

### 9. インフラ／運用自動化
- CI/CD パイプライン構築 (GitHub Actions / Vercel / Firebase)
- エラートラッキング (Sentry 等) の導入

---

*このファイルは今後のリファクタリング方針を可視化・共有するためのものです。随時更新してください。*