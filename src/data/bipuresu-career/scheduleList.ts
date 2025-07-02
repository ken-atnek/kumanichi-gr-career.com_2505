/* =======================================
 * 熊日サービス開発 スケジュールデータ
 * URL: src/data/bipuresu-career/scheduleList.ts
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import type { StaticImageData } from 'next/image';
import Img01 from '@/assets/images/bipuresu-career/schedule/list01.webp';
import Img02 from '@/assets/images/bipuresu-career/schedule/list02.webp';
import Img03 from '@/assets/images/bipuresu-career/schedule/list03.webp';

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
    title: '社員：Aの1日',
    schedule: [
      { time: '09:00', activity: '出社' },
      { time: '09:00〜', activity: 'スケジュール・メール確認' },
      { time: '10:30〜', activity: '工事立ち会いなど' },
      { time: '12:00〜', activity: '昼食' },
      { time: '13:00〜', activity: '館内業務連絡資料作成など' },
      { time: '14:00〜', activity: '会議参加・業者打ち合わせ' },
      { time: '16:00〜', activity: '稟議書作成・館内依頼対応など' },
      { time: '17:30', activity: '退社' },
    ],
    noteTitle: '【現在の仕事内容について】',
    note: 'びぷれす熊日会館の建物を維持管理する為、様々な工事・施工業者さんと取引を行っています。他にも、当館内のテナントから設備的故障・トラブル相談の対応や、火災・地震・洪水などの災害対応を行うのも私たちの仕事で、とてもやりがいのある仕事です。',
  },
  {
    image: Img02,
    title: '社員：B（中堅社員）の1日',

    schedule: [
      {
        time: '09:30～',
        activity: '防災センターにて朝礼（協力会社との打ち合わせ）',
      },
      { time: '10:00～', activity: '報告書の確認' },
      { time: '10:30～', activity: '社内会議' },
      { time: '12:00～', activity: '昼食' },
      { time: '13:00～', activity: '建物の巡回' },
      { time: '14:00～', activity: '建物総合連絡会議' },
      { time: '15:30～', activity: 'テナント従業員と打ち合わせ' },
      { time: '16:30～', activity: '明日以降の業務の確認' },
      { time: '17:30', activity: '退社' },
    ],
    noteTitle: '【現在の仕事内容について】',
    note: '熊本市中心市街地に位置する複合ビル「びぷれす熊日会館」の管理運営会社で、建物に常駐している設備・警備・清掃等の協力会社のスタッフと共に、「安心・安全」を念頭に日々業務を行っています。ホテル、商業、美術館など、テナントとの信頼関係や、目配り・気配りを大事にしています。',
  },
  {
    image: Img03,
    title: '社員：C（ベテラン社員）の1日',
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
    noteTitle: '【現在の仕事内容について】',
    note: '弊社の総務は、総務業務だけでなく経理や人事業務なども含みます。経理業務では日々の仕訳から、年度末の決算まで行います。いろいろな法改正へも対応、順守しています。業務は多岐にわたりますが、『会社』を陰から支える大切な業務です。',
  },
];
