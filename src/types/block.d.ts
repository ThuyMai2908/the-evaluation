export type ActionBlock = {
  blockType?: "ActionBlock";
  href?: string;
  arrowRightIcon?: boolean;
} & ButtonProps;

export interface MediaBlock {
  blockType?: "MediaBlock";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  aspectRatio?: number;
  shadow?: boolean;
  rounded?: boolean;
  w?: number | string;
  h?: number | string;
  asBgImage?: boolean;
}

export interface PageHeaderBlock {
  blockType?: "PageHeaderBlock";
  title: string;
  background?: string;
}

export interface CallToActionBlock {
  blockType?: "CallToActionBlock";
  header?: string;
  content?: string;
  image?: string;
  action?: ActionBlock;
}

export interface TextMediaCardProps {
  id?: number;
  imageUrl?: string;
  title?: string;
  content?: string;
  className?: string;
}

export interface IconBlockProps {
  icon: React.ReactNode;
  title?: string;
  content: string;
}

export interface AnalysisBlock {
  id: number;
  header: string;
  data: IconBlockProps[];
}

export type AnalysisSensitiveData = AnalysisBlock[];
