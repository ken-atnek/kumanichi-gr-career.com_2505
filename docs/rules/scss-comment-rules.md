# SCSSコメントヘッダー運用ルール

## 目的

`scss` / `module.scss` ファイルの先頭に、用途・参照元・更新日が分かるコメントを統一して記載する。

---

## 対象

- `src/**/*.scss`
- `src/**/*.module.scss`

---

## 記載ルール

- `module.scss` を新規作成する時は、必要に応じて `@use` を先に記載する
- ファイル先頭に記載する
- `URL` はプロジェクトルートからの絶対パス風で書く
- `Referenced in` は対応する `tsx` や読み込み元を書く
- 修正したら `Last updated` を更新する
- タイトルは「熊日グループ採用 + コンポーネント名 + スタイル」で簡潔に書く

---

## テンプレート

```scss
/* =======================================
 * 熊日グループ採用 Header スタイル
 * URL: /src/components/common/Header.module.scss
 * Referenced in: /src/components/common/Header.tsx
 * Created: 2026-06-18
 * Last updated: 2026-06-18
 * ======================================= */
```

---

## 補足

- 日付は `YYYY-MM-DD` で統一する
- SCSS 導入後は `foundation` 読み込み位置もあわせて統一する
