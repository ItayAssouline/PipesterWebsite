export type PipesterBrandColor = {
  dark: string;
  median: string;
  normal: string;
  main: string;
  bright: string;
};

export interface PipesterMenuCategory {
  title: string;
  products: PipesterProduct[];
}
export interface PipesterProduct {
  title: string;
  description: string;
  imageUrl: string;
}
