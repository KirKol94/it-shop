import { ICategory } from './ICategory'

export interface IProduct {
  category?: ICategory
  name: string
  image: string
  description: string
  price: number
  available?: boolean
}
