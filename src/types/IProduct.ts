import { ICategory } from './ICategory'

export interface IProduct {
  id: string
  category?: ICategory
  name: string
  isHasSizes: boolean
  image: string
  count?: 1
  description: string
  price: number
  oldPrice: number
  available?: boolean
}
