/* =======================================
 * ブログ記事DATA
 * URL:src/data/blogData.ts
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */


import { BlogItem } from '@/types/blog';

import { body005 } from "./blogBody/body005";
import { body004 } from "./blogBody/body004";
import { body003 } from "./blogBody/body003";
import { body002 } from "./blogBody/body002";
import { body001 } from "./blogBody/body001";


export const blogData: BlogItem[] = [


  {
    id: "005",
    date: "2025-05-12", 
    category: {
      parent: "熊日グループ",
      child: "熊日広告社",
    },
    title: "熊日広告社 中途採用者インタビュー",
    thumb: body005.thumb, 
    body: body005,
  },
  {
    id: "004",
    date: "2025-05-12", 
    category: {
      parent: "熊日グループ",
      child: "熊日デジタル",
    },
    title: "熊日デジタル 中途採用者インタビュー",
    thumb: body004.thumb, 
    body: body004,
  },
  {
    id: "003",
    date: "2025-04-01", 
    category: {
      parent: "熊日グループ",
      child: "熊日広告社",
    },
    title: "熊日広告社 中途採用者インタビュー",
    thumb: body003.thumb, 
    body: body003,
  },
  {
    id: "002",
    date: "2024-05-21", 
    category: {
      parent: "熊日グループ",
      child: "熊日サービス開発",
    },
    title: "熊日サービス開発 中途採用者インタビュー",
    thumb: body002.thumb, 
    body: body002,
  },
  {
    id: "001",
    date: "2023-09-12", 
    category: {
      parent: "熊日グループ",
      // child: "熊日広告社",
    },
    title: "キャリア採用サイトをオープンしました",
    thumb: body001.thumb, 
    body: body001,
  },

];
