import { ReactNode, createContext, useReducer } from 'react'
import { formatCurrency } from '../utils/formatCurrency'
import { Item, cartReducer } from '../reducers/cart/reducer'
import {
  AddNewItemAction,
  changeAmountOfItemAction,
  removeItemAction,
} from '../reducers/cart/actions'

interface CurrencyOfDelivery {
  format: string
  value: number
}

interface CartContextType {
  items: Item[]
  currencyOfDelivery: CurrencyOfDelivery
  AddNewItem: (item: Item) => void
  changeAmountOfItem: (item: Item, newAmount: number) => void
  removeItem: (item: Item) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, dispatch] = useReducer(cartReducer, [])

  function AddNewItem(newItem: Item) {
    dispatch(AddNewItemAction(newItem))
  }

  function changeAmountOfItem(item: Item, newAmount: number) {
    dispatch(changeAmountOfItemAction(item, newAmount))
  }

  function removeItem(item: Item) {
    dispatch(removeItemAction(item))
  }

  const initialDeliveryCoast = 3.5

  const currencyOfDelivery = {
    format: formatCurrency(initialDeliveryCoast),
    value: initialDeliveryCoast,
  }

  return (
    <CartContext.Provider
      value={{
        items,
        AddNewItem,
        changeAmountOfItem,
        removeItem,
        currencyOfDelivery,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
