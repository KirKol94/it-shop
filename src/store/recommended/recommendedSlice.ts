import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/types/IProduct'

type recommendedState = {
  isLoading: boolean
  products: IProduct[]
}

const initialState: recommendedState = {
  isLoading: false,
  products: [
    {
      id: '1',
      isHasSizes: true,
      category: { name: 'Футболка' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086233923924791328/image.png',
      name: 'IT-Пузырь',
      description: 'Тряпка для мужиком с круглым авторитетом',
      price: 1399,
      oldPrice: 1599,
    },
    {
      id: '2',
      isHasSizes: true,
      category: { name: 'Футболка' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086235329457033246/image.png',
      name: 'Меня мама любит',
      description: 'Не, ну по-факту же',
      price: 1299,
      oldPrice: 1499,
    },
    {
      id: '3',
      isHasSizes: true,
      category: { name: 'Футболка' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1086234758331252776/image.png',
      name: 'Этот принт говорит сам за себя',
      description:
        'Сначала ты работаешь на принт, потом принт работает на тебя',
      price: 5999,
      oldPrice: 6599,
    },
    {
      id: '4',
      isHasSizes: true,
      category: { name: 'Футболка' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1090702570089103422/Card_pic2.png',
      name: 'Для тех, кто в теме',
      description: 'Не обошлось без внутрянки',
      price: 10999,
      oldPrice: 11099,
    },
  ],
}

const recommendedSlice = createSlice({
  name: 'recommended',
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
  },
})

// экспортируем экшены
export const { setIsLoading, setProducts } = recommendedSlice.actions

export default recommendedSlice.reducer
