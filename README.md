# kumanichi-gr-career.com_2505

熊日グループ採用サイトの引き継ぎ用 Next.js repo。  
2026-06-18 時点では `create-next-app` 初期状態に近いため、まずは docs と static export 方針を先に整備している。

## ドキュメント参照順

1. `AGENTS.md`
2. `docs/PAGE_STRUCTURE.md`
3. `docs/rules/nextjs-export.md`
4. `docs/seo/SEO_SETUP.md`

## 開発コマンド

```bash
npm run dev
npm run build
```

## 現在の前提

- Next.js 15 / App Router
- TypeScript
- static export を基本方針として運用予定
- 旧サイトのページ構成や文言はこれから棚卸し

## まずやること

- 旧サイトのページ一覧を `docs/PAGE_STRUCTURE.md` に追記する
- 本番 / デモ URL を `docs/seo/SEO_SETUP.md` に整理する
- トップページの情報設計から実装を始める
