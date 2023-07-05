import { ReactNode, createContext, useState } from 'react'
import { CoffeeType } from '../pages/Home/components/CoffeeCard'

export interface Item extends CoffeeType {
  amount: number
}

interface CartContextType {
  items: Item[]
  AddNewItem: (item: Item) => void
  changeAmountOfItem: (item: Item, newAmount: number) => void
  removeItem: (item: Item) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

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

  return (
    <CartContext.Provider
      value={{ items, AddNewItem, changeAmountOfItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
