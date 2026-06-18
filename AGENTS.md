# AGENTS.md

## 基本方針

このプロジェクトは、`kumanichi-gr-career.com` の引き継ぎ・再整理用です。  
まずは実装を急がず、旧サイトのページ構成・SEO・運用方針を md に残してから進めます。

---

## 新規スレッド開始時の必須確認

- 新しいスレッドを開いたら、実装や提案の前に必ずこの `AGENTS.md` を読む
- 続けて `docs/PAGE_STRUCTURE.md` を確認し、棚卸し済みページと未確認ページを把握する
- `tsx` を触る前は `docs/rules/tsx-comment-rules.md` を確認する
- `scss` を触る前は `docs/rules/scss-comment-rules.md` と `docs/rules/coding-style.md` を確認する
- SEOや公開設定を触る前は `docs/rules/nextjs-export.md` と `docs/seo/SEO_SETUP.md` を確認する
- 作業前に該当ルール md の確認が済んでいない状態で、コード編集を始めない

---

## 技術方針

- Next.js（App Router）前提
- TypeScript
- 静的書き出しを基本方針として検討する
- 現状は初期 clone 直後のため、必要な実装は小さく積み上げる

---

## 作業方針

- いきなり大きく作らない
- まずはページ棚卸しとトップページ方針の整理を優先する
- コンテンツ未確定の間は、空テンプレとメモで管理する
- 変更は最小単位で行う
- 依頼がない限り、大きな設計変更や全面リファクタはしない

---

## ドキュメント参照順

1. `AGENTS.md`
2. `docs/PAGE_STRUCTURE.md`
3. `docs/rules/tsx-comment-rules.md`（`tsx` 編集時）
4. `docs/rules/scss-comment-rules.md`（`scss` 編集時）
5. `docs/rules/project-setup.md`
6. `docs/rules/coding-style.md`
7. `docs/rules/nextjs-export.md`
8. `docs/rules/fetch-pattern.md`
9. `docs/rules/ui-interactions.md`
10. `docs/rules/checklist.md`
11. `docs/seo/SEO_SETUP.md`
12. `docs/seo/SEO_AUDIT_REQUEST_TEMPLATE.md`
13. `docs/seo/SEO_FIX_TRACKER_TEMPLATE.md`

---

## 注意点

- 旧サイトの実体が未反映でも、構成・SEOの枠は先に用意する
- `title`、`description`、`canonical`、robots の設計は初期段階で決める
- built artifact 確認が必要な時は `out/sitemap.xml` と `out/robots.txt` まで見る
- 表示文言やページ情報は、あとから JSON などへ逃がせる形を意識する
