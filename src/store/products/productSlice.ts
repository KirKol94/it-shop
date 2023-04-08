import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/types/IProduct'

type ProductState = {
  isLoading: boolean
  products: IProduct[]
}

const initialState: ProductState = {
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
    {
      id: '5',
      isHasSizes: false,
      category: { name: 'Доска' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1091432098503594125/1-removebg-preview.png',
      name: 'Волчистая доска для разделки',
      description: 'Описание, нужно дописать...',
      price: 799,
      oldPrice: 1499,
    },
    {
      id: '6',
      isHasSizes: false,
      category: { name: 'Фигурка' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1091432098268717096/f5cpgjswiz0dnal6ck1g6ql5rcd1r3tj-removebg-preview.png',
      name: 'Собрат',
      description: 'Описание, нужно дописать...',
      price: 649,
      oldPrice: 980,
    },
    {
      id: '7',
      isHasSizes: false,
      category: { name: 'Кружка' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1091432098038038528/6426799121-removebg-preview.png',
      name: 'Волчья морда в твоих руках',
      description: `Это не просто кружка, когда вы возьмете эту кружку в руки, вы почувствуете себя настоящим хозяином леса - сильным и непокорным, как самый настоящий волк! 
  \nБлагодаря своей форме и размеру, она станет идеальным выбором для утреннего кофе или вечернего чая, и принесет вам массу приятных эмоций каждый день!`,
      price: 1999,
      oldPrice: 2800,
    },
    {
      id: '8',
      isHasSizes: false,
      category: { name: 'Шапка' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1091432097534713917/1__1_-removebg-preview.png',
      name: 'Вожак стаи',
      description: 'Для тех кто любит попариться или просто вожак',
      price: 10999,
      oldPrice: 11099,
    },
    {
      id: '9',
      isHasSizes: false,
      category: { name: 'Маска' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1091432097761202266/maska_volka_1_465_auto_jpg__100-removebg-preview.png',
      name: 'Маска оборотень',
      description: 'Описание, нужно дописать...',
      price: 10999,
      oldPrice: 11099,
    },
    {
      id: '10',
      isHasSizes: false,
      category: { name: 'Трость' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1091435802405384303/759389c8dc308b9f02db87e3a478--ukrasheniya-opornaya-trost-volk.png',
      name: 'Трость вождя',
      description:
        'По древнему приданию тот кто обладает этой тростью будет иметь деньги и влияние, ну еще ей можно кого-нибудь отпиздить',
      price: 20999,
      oldPrice: 24099,
    },
    {
      id: '11',
      isHasSizes: false,
      category: { name: 'Кубок' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1091437463622406264/2023-03-31_22-01-16-removebg-preview.png',
      name: 'Кубок Волчьей Силы: Отважься на победу',
      description:
        'Смело иди к своей победе, уверенный в своей силе, с кубком Волчьей Силы в руках!',
      price: 2100,
      oldPrice: 3400,
    },
    {
      id: '12',
      isHasSizes: false,
      category: { name: 'Браслет' },
      image:
        'https://cdn.discordapp.com/attachments/1080428490379247716/1091438261395787876/2023-03-31_22-04-41-removebg-preview.png',
      name: 'Браслет Волчьих Духов: Соединение с природой',
      description:
        'Этот унисекс браслет вдохновлен древней культурой друидов и символизирует силу и связь с природой. Браслет изготовлен из натуральных материалов и украшен волчьими символами, которые напоминают о смелости и духовной силе. Носите браслет Волчьих Духов, чтобы поддерживать свою силу и баланс с природой в повседневной жизни.',
      price: 10999,
      oldPrice: 11099,
    },
  ],
}

const productSlice = createSlice({
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
  },
})

// экспортируем экшены
export const { setIsLoading, setProducts } = productSlice.actions

export default productSlice.reducer
