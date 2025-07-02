/* =======================================
 * 株式会社熊日デジタル スケジュールデータ
 * URL: src/data/digital-career/scheduleList.ts
 * Created: 2025-06-27
 * Last updated: 2025-06-27
 * ======================================= */
import type { StaticImageData } from 'next/image';
import Img01 from '@/assets/images/koh-career/schedule/list01.webp';
import Img02 from '@/assets/images/koh-career/schedule/list02.webp';
import Img03 from '@/assets/images/koh-career/schedule/list03.webp';


export type ScheduleItem = {
  time: string;
  activity: string;
};

export type ScheduleData = {
  image: StaticImageData;
  title: string;
  schedule: ScheduleItem[];
};

export const scheduleList: ScheduleData[] = [
  {
    image: Img01,
    title: '営業部　若手男性社員の1日',
    schedule: [
  { time: '09:00', activity: '出社・メールチェック・朝礼' },
  { time: '09:15', activity: '営業チーム会議' },
  { time: '10:30', activity: 'HP制作についてデザインイメージ提案' },
  { time: '12:00', activity: '昼食' },
  { time: '13:00', activity: '事前にアポイントを取っていたクライアント先で\n新商品のWEB広報について提案' },
  { time: '15:00', activity: 'クライアントのHP制作についてデザイナーとZOOM会議' },
  { time: '16:30', activity: '翌日のクライアントへの提案書の作成' },
  { time: '17:00', activity: 'メールチェック・返信' },
  { time: '18:00', activity: '退社' },
],
  },
  {
    image: Img02,
    title: '企画制作部　若手男性社員の1日',

schedule: [
  { time: '09:00', activity: '出社・メールチェック・朝礼' },
  { time: '10:30', activity: '新CMのロケハン' },
  { time: '12:00', activity: '昼食' },
  { time: '15:00', activity: '社内打ち合わせ' },
  { time: '16:30', activity: 'デジタル関連の勉強会参加など' },
  { time: '17:00', activity: 'メールチェック・返信' },
  { time: '17:30', activity: '退社' },
],
  },
  {
    image: Img03,
    title: '共創プロジェクト室　中堅男性写真の1日',
schedule: [
  { time: '09:00', activity: '出社・メール確認・会議' },
  { time: '09:30', activity: '共創プロジェクトチーム会議' },
  { time: '10:30', activity: '熊本県内行政機関との打ち合わせ（受託事業等について）' },
  { time: '12:00', activity: '昼食' },
  { time: '13:30', activity: '熊本市内行政機関各部局との打ち合わせ（全国事業について等）' },
  { time: '16:00', activity: '行政事業に関する関係協力会社との打ち合わせ' },
  { time: '17:00', activity: 'チームミーティング、メール対応、社内各種資料作成' },
  { time: '18:00', activity: '退社' },
],
  },
];