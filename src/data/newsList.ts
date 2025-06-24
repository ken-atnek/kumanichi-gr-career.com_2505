/* =======================================
 * ニュースDATA
 * URL:src/data/newsList.ts
 * Created: 2025-06-21
 * Last updated: 2025-06-21
 * ======================================= */

export type NewsItem = {
  id: string;
  date: string;
  company: '熊日グループ' | '熊日' | '熊日デジタル' | '熊日広告社' | '熊日サービス開発';
  title: string;
};

export const newsList: NewsItem[] = [
  {
    id: 'n003',
    date: '2025.06.23',
    company: '熊日デジタル',
    title: '採用サイトを公開しました',
  },
  {
    id: 'n002',
    date: '2025.06.21',
    company: '熊日グループ',
    title: '採用サイトを公開しました',
  },
  {
    id: 'n001',
    date: '2025.06.20',
    company: '熊日広告社',
    title: '新卒採用エントリー受付開始',
  },
];