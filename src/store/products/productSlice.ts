import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@/types/IProduct'

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
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086233923924791328/image.png',
      name: 'Футболка на плечиках',
      description: 'Её позволит только айтишник',
      price: 1399,
    },
    {
      id: '2',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086235329457033246/image.png',
      name: 'Футболка с рукой',
      description: 'Рука, плечики, футболка',
      price: 1299,
    },
    {
      id: '3',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086234758331252776/image.png',
      name: 'Рубашка с галстуком',
      description:
        'Очень крутая рубашка белого цвета для очень успешных людей, которые знают толк в хороших вещах и имеют потрясающий вкус, а ещё она доступна каждому  Купи - и будь пиздат!',
      price: 5999,
    },
    {
      id: '4',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086233923924791328/image.png',
      name: 'Футболка с циферками',
      description: 'Шляпа, если честно',
      price: 0,
    },
    {
      id: '5',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086235329457033246/image.png',
      name: 'Кепка-кастрюля',
      description: 'Чисто шапка для волка',
      price: 1699,
    },
    {
      id: '6',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086234758331252776/image.png',
      name: 'Свитер разной расцветки',
      description: 'Вязанная кофта',
      price: 10999,
    },
    {
      id: '7',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086233923924791328/image.png',
      name: 'Свитер сисадмина',
      description: 'Ты не тру сисадмин, если нет такого шмота',
      price: 1984,
    },
    {
      id: '8',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086235329457033246/image.png',
      name: 'Сорочка для Си-разработчика',
      description: 'Ну тут не надо описание даже',
      price: 1905,
    },
    {
      id: '9',
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086235329457033246/image.png',
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
