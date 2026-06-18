## プロジェクト概要

Next.js 15 App Router + TypeScript による引き継ぎ整理用プロジェクト。  
静的サイトとしての運用を前提に、初期段階で export / SEO / 命名ルールをそろえる。

## 現在の状態

- repo は clone 済み
- 実装は `create-next-app` 初期状態に近い
- md 基盤は 2026-06-18 時点で整備開始

## 初期セットアップ方針

- いきなりコンポーネントを増やさず、まず docs をそろえる
- `next.config.ts` は static export 前提の基本設定を先に入れる
- 旧サイト確認後に、必要なスタイル基盤や共通パーツを追加する

## next.config.ts の基準

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
```

## static export 時の App Router 補足

- `src/app/robots.ts` と `src/app/sitemap.ts` を使う時は `export const dynamic = 'force-static';` を付ける
- `useSearchParams()` を使う client component は、静的ビルド対象ページ側で `Suspense` 境界に入れる

## デモ / 本番ビルドのSEO切り替え

- `NEXT_PUBLIC_IS_REAL_PROD` を使って本番SEOの有効化を切り替える
- `NEXT_PUBLIC_METADATA_BASE` も build script 側で環境ごとに切り替える
- `src/lib/env.ts` に `isRealProduction` を切り出して、`layout.tsx` / `robots.ts` / `sitemap.ts` から共通利用する

## 今後必要になりやすいもの

- `sass`
- `prettier`
- `stylelint`
- 共通 `Header` / `Footer`
- 旧サイト由来の画像・JSON・SVG 資産整理
