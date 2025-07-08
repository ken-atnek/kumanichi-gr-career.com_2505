/* =======================================
 * 熊日サービス開発 スケジュールデータ
 * URL: src/data/yusou-career/scheduleList.ts
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import type { StaticImageData } from 'next/image';
import Img01 from '@/assets/images/yusou-career/schedule/list01.webp';
import Img02 from '@/assets/images/yusou-career/schedule/list02.webp';
import Img03 from '@/assets/images/yusou-career/schedule/list03.webp';

export type ScheduleItem = {
  time: string;
  activity: string;
};
export type QuestionsItem = {
  question: string;
  answerTitle: string;
  answer?: string;
};

export type ScheduleData = {
  image: StaticImageData;
  title: string;
  dept: string;
  name: string;
  schedule: ScheduleItem[];
  questions: QuestionsItem[];
  note?: string;
};

export const scheduleList: ScheduleData[] = [
  {
    image: Img01,
    title:
      '何もないところから道を切り開き、新しい収益を運ぶ道づくりを行う大切な仕事',
    dept: '事業開発部',
    name: 'A・O',
    questions: [
      {
        question: 'これが私の仕事',
        answerTitle: '物販企画・新規事業開発・チラシデザイン',
        answer: `新聞などを取り扱うデリバリーセンターで販売している商品の企画・管理、物品販売全般の窓口となり各取引メーカー様と価格交渉などの商談を行っています。\nまた、新しいビジネスチャンスを探し、市場や顧客ニーズの調査・分析を行い新規事業の立ち上げも行っています。`,
      },
      {
        question: 'ズバリ！私がこの会社を選んだ理由',
        answerTitle: '安心して働ける、誠実な会社',
        answer: `生まれ育った、熊本での知名度が高い熊本日日新聞社のグループ企業であること。様々な部署があり、多くの経験ができ自分自身のスキルアップに繋げていけると感じたから。`,
      },
      {
        question: 'これまでのキャリア',
        answerTitle:
          '販売デリバリーセンター勤務を経験し、現在の事業開発部に至る',
      },
    ],
    schedule: [
      { time: '09:00～', activity: '部内ミーティング' },
      { time: '09:15～', activity: 'メールチェック' },
      {
        time: '10:00～',
        activity: 'デリバリーセンターからの発注を集計し各メーカーへ発注',
      },
      { time: '12:00～', activity: 'ランチ' },
      {
        time: '13:00～',
        activity: '取引先と次回のキャンペーンへ向けての打ち合わせ',
      },
      { time: '16:00～', activity: '物品販売チラシの制作作業' },
      { time: '17:00', activity: '退社' },
    ],
  },
  {
    image: Img02,
    title: 'お客様の大切なチラシを読者の皆様へお届けします',
    dept: '営業部',
    name: 'T・O',
    questions: [
      {
        question: 'これが私の仕事',
        answerTitle: '新聞や「くまにちすぱいす」の折込チラシの営業および管理',
        answer: `熊本県内で流通する新聞やくまにちすぱいすの折込チラシの営業及び管理業務が主な仕事です。県内外の広告会社や広告主様との折衝は大きな責任が伴いますが、やりがいがあります。また、熊本日日新聞の販売センターの配達網を生かした「熊日デリバリー」の管理業務も行っています。`,
      },
      {
        question: 'ズバリ！私がこの会社を選んだ理由',
        answerTitle: '紙媒体ならではの価値で地域貢献',
        answer: `「紙媒体ならではの価値」に魅力を感じていたので、就活の際、キーワードにしていました。熊本日日新聞社グループの一員として各部署と連携し、地元・熊本に役立つ仕事ができることをうれしく思います。`,
      },
      {
        question: 'これまでのキャリア',
        answerTitle:
          '企画部やデリバリーセンター、熊本日日新聞社販売局出向を経て、現在の営業部に至る',
      },
    ],
    schedule: [
      { time: '09:00〜', activity: '部内ミーティング' },
      { time: '09:30〜', activity: 'クライアントからのメールチェック' },
      { time: '10:00〜', activity: '書類・営業資料の作成' },
      { time: '12:00〜', activity: 'ランチ' },
      { time: '13:00〜', activity: '広告審査' },
      { time: '14:30〜', activity: 'クライアントとの打ち合わせ' },
      { time: '16:00〜', activity: '折込手配、デリバリー管理作業' },
      { time: '17:00', activity: '退社' },
    ],
  },
  {
    image: Img03,
    title: '会社の中心となる仕事',
    dept: '総務部',
    name: 'Y・M',
    questions: [
      {
        question: 'これが私の仕事',
        answerTitle: '会社の経営に携わる重要な役割',
        answer: `現預金の入出金や予算管理など会社を経営していくうえではなくてはならない業務を行っています。常に責任が伴う仕事内容ばかりですが、関連会社の株式会社熊日物流販売の総務部門も担っているため、ほかの部署の人たちとも信頼関係を築きながら仕事をすることができ、非常にやりがいを感じています。`,
      },
      {
        question: 'ズバリ！私がこの会社を選んだ理由',
        answerTitle: '身近な仕事。アットホームな職場',
        answer: `親が熊本日日新聞の販売センターで働いていることもあり、「学生時代から年末年始の作業の手伝いをしていました。\nまた学生の時に開催されていた合同説明会のブースに立ち寄り、話を聞いた際の先輩社員の方々の雰囲気が良く、私はこの会社を選びました。`,
      },
      {
        question: 'これまでのキャリア',
        answerTitle: '入社後、半年間の試用期間を経て、現在の総務部に至る',
      },
      {
        question: '就活時代にやってよかったこと',
        answerTitle: '自分の気持ちを正直に伝える',
        answer: `私が就職活動の時に大事にしていたことは、自分のことを正直に伝え、本当の自分を知ってもらうことです。だからこそ、私のとき面接の受け答えは思ったことを素直に伝えることで、自分の想いも相手にしっかりと伝えることができました。企業側は履歴書で学歴や資格などはわかりますが、どんな人かまではわかりません。そのため面接など直接会うところでありのままの自分をアピールすることを意識していました。`,
      },
    ],
    schedule: [
      { time: '09：00～', activity: '部内ミーティング・業務分担確認' },
      { time: '09：15～', activity: '各部署からの連絡事項を確認' },
      { time: '10：00～', activity: '経理業務（支払・入金確認）' },
      { time: '12：00～', activity: 'ランチ' },
      { time: '13：00～', activity: '取引先との打ち合わせ' },
      { time: '15：00～', activity: '月次資料作成' },
      {
        time: '16：30～',
        activity: '翌日のスケジュール確認・段取り＆資料作成',
      },
      { time: '17：00', activity: '退社' },
    ],
  },
];
