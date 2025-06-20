import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type BlogItem = {
  id: string;
  date:string;
  title: string;
  thumb: StaticImageData;
  category: {
    parent: string;
    child?: string;
  };
    body: {
    content: ReactNode;
  };
};
