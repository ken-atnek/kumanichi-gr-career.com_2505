/* =======================================
 * 株式会社熊日デジタル スケジュールデータ
 * URL: src/data/digital-career/scheduleList.ts
 * Created: 2025-06-23
 * Last updated: 2025-06-23
 * ======================================= */
import type { StaticImageData } from 'next/image';
import Img01 from '@/assets/images/digital-career/schedule/list01.webp';
import Img02 from '@/assets/images/digital-career/schedule/list02.webp';
import Img03 from '@/assets/images/digital-career/schedule/list03.webp';

export type ScheduleItem = {
  time: string;
  activity: string;
};

export type ScheduleData = {
  image: StaticImageData;
  title: string;
  // name: string;
  role: string;
  schedule: ScheduleItem[];
};

export const scheduleList: ScheduleData[] = [
  {
    image: Img01,
    title: '社会人歴7年目若手社員Iさんの1日',
    // name: 'Iさん',
    role: '映像クリエイター職',
    schedule: [
      { time: '09:30', activity: '出社、撮影機材の準備' },
      { time: '10:00', activity: '撮影現場へ移動、外部スタッフと連携して撮影' },
      { time: '13:00', activity: '撮影終了、ランチをして帰社' },
      { time: '14:00', activity: '後日行うライブ配信の打ち合わせ' },
      {
        time: '16:30',
        activity: '編集作業、判断に迷う部分をチームメンバーに相談',
      },
      { time: '19:00', activity: 'きりがいいところで終了し、退社' },
    ],
  },
  {
    image: Img02,
    title: '社会人歴9年目中堅社員Hさんの1日',
    // name: 'Hさん',
    role: '広告運用職',
    schedule: [
      { time: '08:00', activity: '出社、メールチェック、運用状況確認＆調整' },
      { time: '10:00', activity: '新規案件打ち合わせ、配信クリエティブ制作' },
      { time: '12:00', activity: 'オフィス近くでランチ' },
      { time: '13:00', activity: '広告運用提案資料の作成' },
      {
        time: '14:00',
        activity: '外出中のビジネス担当とのチャットやWEBミーティング対応',
      },
      { time: '16:00', activity: '配信状況チェック・配信レポート作成' },
      { time: '17:30', activity: 'フレックスタイムを利用して少し早めに退社' },
    ],
  },
  {
    image: Img03,
    title: '社会人歴18年目ベテラン社員Mさんの1日',
    // name: 'Mさん',
    role: 'ビジネス職',
    schedule: [
      { time: '09:30', activity: '出社、メールチェック' },
      {
        time: '10:00',
        activity:
          '制作チームの進捗確認・状況確認・クライアントとWEBミーティング',
      },
      { time: '12:00', activity: '社員食堂でランチ' },
      {
        time: '13:00',
        activity: '広告配信運用レポートの確認、クライアントへの説明',
      },
      { time: '15:00', activity: '動画撮影立ち会いディレクション' },
      { time: '17:30', activity: '帰社・翌日の資料作成等' },
      { time: '19:00', activity: 'フレックスタイムを利用して少し遅めに退社' },
    ],
  },
];
