import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styled/global'
import { GlobalFonts } from './styled/fonts'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalFonts />
      <GlobalCss />
    </BrowserRouter>
  </Provider>
)
