import { ICategory } from "./ICategory";

export interface IProduct {
  category: ICategory;
  name: string;
  slug: string;
  image: File;
  description: string;
  price: number;
  available: boolean;
  created: Date;
  updated: Date;
}
