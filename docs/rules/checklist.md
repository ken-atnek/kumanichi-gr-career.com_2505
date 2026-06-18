## チェックリスト

作業開始前に確認:

- [ ] `next.config.ts` に `output: 'export'` がある
- [ ] dynamic route の page.tsx で `params` を同期型にしていない
- [ ] `generateMetadata` / `generateStaticParams` を非同期で書いていない
- [ ] `force-dynamic` を使っていない
- [ ] SEO設定を触る前に `docs/seo/SEO_SETUP.md` を確認した
- [ ] 旧サイトの該当ページを確認せずに文言や導線を決め打ちしていない
