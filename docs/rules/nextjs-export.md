## Next.js 15 App Router の制約

### params は Promise 型を使う

**Next.js 15 では `output: 'export'` でも、型制約として `params: Promise<...>` が必要。**  
ビルド時に静的生成されるため `await params` は問題なく動作する。

#### 正しい書き方

```ts
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
}
```

#### NG

```ts
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
}
```

### generateMetadata / generateStaticParams

静的エクスポート時は同期関数で定義する。

#### OK

```ts
export function generateMetadata() {
  return { title: 'Page' };
}

export function generateStaticParams() {
  return [{ id: '1' }];
}
```

### robots.ts / sitemap.ts は `force-static` を明示する

`output: 'export'` を使う案件で `src/app/robots.ts` / `src/app/sitemap.ts` を置く場合は、先頭に `export const dynamic = 'force-static';` を付ける。

#### 推奨

```ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  };
}
```

### `useSearchParams()` を使う client component は `Suspense` で包む

静的ビルド対象ページで `useSearchParams()` を使う client component を読む場合、page 側で `Suspense` 境界を用意する。

#### 推奨

```tsx
import { Suspense } from 'react';

export default function WorksPage() {
  return (
    <main>
      <Suspense fallback={null}>{/* client component */}</Suspense>
    </main>
  );
}
```
