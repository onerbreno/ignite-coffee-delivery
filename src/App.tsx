import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartContext'
import { OrderContextProvider } from './contexts/OrderContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <OrderContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </OrderContextProvider>
      </CartContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
