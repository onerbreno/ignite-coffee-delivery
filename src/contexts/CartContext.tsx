import { ReactNode, createContext, useState } from 'react'
import { CoffeeType } from '../pages/Home/components/CoffeeCard'
import { formatCurrency } from '../utils/formatCurrency'

export interface Item extends CoffeeType {
  amount: number
}

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
  removeAllItems: () => void
}
interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<Item[]>([])

  function AddNewItem(item: Item) {
    setItems((state) => [...state, item])
  }

  function changeAmountOfItem(item: Item, newAmount: number) {
    setItems((state) =>
      state.map((itemCart) => {
        if (itemCart.id === item.id) {
          return { ...itemCart, amount: newAmount }
        }
        return itemCart
      }),
    )
  }

  function removeItem(item: Item) {
    setItems((state) => state.filter((itemCart) => itemCart.id !== item.id))
  }

  function removeAllItems() {
    setItems((state) => state.filter((itemCart) => itemCart.id === 9999))
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
        removeAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
