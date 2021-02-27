export type ArticleHeader = {
  date: string;
  title: string;
  id: string;
  tags?: string[];
};

export type Tag = { name: string; itemCount: number };
