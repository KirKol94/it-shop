export interface ICartProduct {
  id: string
  img: string
  product: string
  productPrice: number
  count: number
  size: 'xs' | 's' | 'm' | 'l' | 'xl'
  totalPrice: number
}
