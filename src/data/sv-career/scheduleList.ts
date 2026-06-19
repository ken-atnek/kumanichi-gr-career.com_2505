/* =======================================
 * 熊日サービス開発 スケジュールデータ
 * URL: src/data/sv-career/scheduleList.ts
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import type { StaticImageData } from 'next/image';
import Img01 from '@/assets/images/sv-career/260619/jigyou-center-itiniti.jpg';
import Img02 from '@/assets/images/sv-career/260619/seminar-itiniti.jpg';
import Img03 from '@/assets/images/sv-career/schedule/list03.webp';
import Img04 from '@/assets/images/sv-career/260619/shuppan-itiniti.jpg';

export type ScheduleItem = {
  time: string;
  activity: string;
};

export type ScheduleData = {
  image: StaticImageData;
  title: string;
  noteTitle?: string;
  schedule: ScheduleItem[];
  note?: string;
};

export const scheduleList: ScheduleData[] = [
  {
    image: Img01,
    title: 'セミナー・企画事業部\n「熊日事業センター」の1日',
    schedule: [
      { time: '09:00', activity: 'スケジュール確認＆メールチェック' },
      {
        time: '09:15',
        activity: '「熊日学童五輪」新聞掲載用名簿チェック',
      },
      { time: '12:00', activity: '昼食' },
      { time: '13:00', activity: '「熊日学童五輪」開会式会場へ' },
      {
        time: '14:00',
        activity: '現地着⇒PCセッティング・看板設置などの事前準備',
      },
      { time: '14:30', activity: '開会式運営' },
      { time: '15:30', activity: '撤収' },
      { time: '17:00', activity: '退社' },
    ],
  },
  {
    image: Img02,
    title: 'セミナー・企画事業部\n「ぷれった熊日」の1日',

    schedule: [
      { time: '11:30', activity: '講座準備（教室設営）' },
      { time: '12:00', activity: 'スケジュール確認＆メールチェック' },
      { time: '12:20', activity: '「くまにちすぱいす」用広告手配' },
      { time: '13:00', activity: '指定管理業務関連会議' },
      { time: '14:30', activity: '指定管理スタッフとの打ち合わせ' },
      { time: '15:30', activity: '昼食' },
      { time: '16:30', activity: '企画会議準備' },
      { time: '18:00', activity: '全体企画会議' },
      { time: '19:00', activity: '講師との打ち合わせ' },
      { time: '19:30', activity: '退社' },
    ],
    noteTitle: 'ぷれった熊日はローテーション勤務です。',
    note: '①9:00〜17:00\n②11:30〜19:30\n③13:00〜21:00\n※基本的には①または②の勤務となります',
  },
  {
    image: Img03,
    title: 'DTP部の1日',
    schedule: [
      { time: '09:30', activity: 'メール・原稿チェック' },
      { time: '10:00', activity: '制作業務' },
      { time: '13:00', activity: '昼食' },
      { time: '14:00', activity: 'ライターと打ち合わせ' },
      { time: '15:00', activity: '工程会議' },
      { time: '15:30', activity: 'オンデマンド印刷' },
      { time: '16:00', activity: '制作業務' },
      { time: '17:30', activity: '退社' },
    ],
    noteTitle: 'DTP部はローテーション勤務です。',

    note: '①9:30〜17:30\n②12:00〜20:00',
  },
  {
    image: Img04,
    title: '出版部の1日',
    schedule: [
      { time: '09:00', activity: 'スケジュール確認＆メールチェック' },
      { time: '09:15', activity: '編集作業' },
      { time: '11:00', activity: '外部デザイナーとの打ち合わせ' },
      { time: '12:00', activity: '昼食' },
      {
        time: '13:00',
        activity: '午前中の打ち合わせを元に、出版までのスケジュール作成',
      },
      {
        time: '14:00',
        activity: '編集会議（進捗状況報告やサポート体制要請etc.）',
      },
      { time: '15:00', activity: '資料収集・編集・校正作業' },
      { time: '17:00', activity: '退社' },
    ],
  },
];
