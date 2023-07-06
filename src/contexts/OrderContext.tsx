import { ReactNode, createContext, useState } from 'react'
import { AddressFormData } from '../pages/Checkout'

interface OrderContextType {
  order: AddressFormData
  onFinishOrder: (order: AddressFormData) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<AddressFormData>({} as AddressFormData)

  function onFinishOrder(order: AddressFormData) {
    setOrder(order)
  }

  return (
    <OrderContext.Provider value={{ onFinishOrder, order }}>
      {children}
    </OrderContext.Provider>
  )
}
