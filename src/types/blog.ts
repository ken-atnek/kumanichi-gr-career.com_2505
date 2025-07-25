// import { StaticImageData } from "next/image";
// import { ReactNode } from "react";

export type BlogItem = {
  id: string;
  s_id: string;
  date:string;
  title: string;
  // thumb: StaticImageData;
  thumb: string;
  category: {
    parent: string;
    child?: string;
  };
  // body: {
  //   content: ReactNode;
  //   thumb: StaticImageData;
  // };
  body: {
    content: string;
    // thumb: string;
  };
};
