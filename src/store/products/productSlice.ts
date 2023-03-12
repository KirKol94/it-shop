import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/IProduct'

type ProductState = {
  isLoading: boolean
  searchProductValue: string
  products: IProduct[]
}

const initialState: ProductState = {
  isLoading: false,
  searchProductValue: '',
  products: [
    {
      id: '1',
      image:
        'https://uhd.name/uploads/posts/2022-01/thumbs/1643228396_2-uhd-name-p-futbolka-na-veshalke-devushka-krasivo-foto-3.jpg',
      name: 'Футболка на плечиках',
      description: 'Её позволит только айтишник',
      price: 1399,
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      name: 'Футболка с рукой',
      description: 'Рука, плечики, футболка',
      price: 1299,
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3725&q=80',
      name: 'Рубашка с галстуком',
      description:
        'Очень крутая рубашка белого цвета для очень успешных людей, которые знают толк в хороших вещах и имеют потрясающий вкус, а ещё она доступна каждому  Купи - и будь пиздат!',
      price: 5999,
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2215&q=80',
      name: 'Футболка с циферками',
      description: 'Шляпа, если честно',
      price: 0,
    },
    {
      id: '5',
      image:
        'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      name: 'Кепка-кастрюля',
      description: 'Чисто шапка для волка',
      price: 1699,
    },
    {
      id: '6',
      image: 'https://ae01.alicdn.com/kf/HTB1vR_OqwMPMeJjy1Xdq6ysrXXaY.jpg',
      name: 'Свитер разной расцветки',
      description: 'Вязанная кофта',
      price: 10999,
    },
    {
      id: '7',
      image: 'https://sloot.ru/images/mujskoy_sviter_s_olenyami.jpg',
      name: 'Свитер сисадмина',
      description: 'Ты не тру сисадмин, если нет такого шмота',
      price: 1984,
    },
    {
      id: '8',
      image:
        'https://avatars.mds.yandex.net/get-znatoki/1506847/2a000001823dcc9560614c9df0bd1940c5eb/orig',
      name: 'Сорочка для Си-разработчика',
      description: 'Ну тут не надо описание даже',
      price: 1905,
    },
  ],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // меняем статус процесса загрузки
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },

    // получаем товары с бека
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload
    },

    //   получить массив отфильтрованных товаров
    setSearchProductValue(state, action: PayloadAction<string>) {
      state.searchProductValue = action.payload
    },
  },
})

// экспортируем экшены
export const { setIsLoading, setProducts, setSearchProductValue } =
  productSlice.actions

export default productSlice.reducer
