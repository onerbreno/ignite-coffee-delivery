import { Trash } from 'phosphor-react'
import { CounterInput } from '../../../../components/CounterInput'

import {
  CartItemContainer,
  CartItemPreview,
  CartItemPrice,
  RemoveButton,
} from './styles'
import { ChangeEvent, useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatCurrency } from '../../../../utils/formatCurrency'

interface Item {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  preview: string
  amount: number
}

interface CartItemProps {
  item: Item
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem, changeAmountOfItem } = useContext(CartContext)

  const price = formatCurrency(item.price)

  function handleIncrement() {
    changeAmountOfItem(item, item.amount + 1)
  }

  function handleDecrement() {
    changeAmountOfItem(item, item.amount - 1)
  }

  function handleRemove() {
    removeItem(item)
  }

  function handleCounterChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value)
    if (newValue <= 5) {
      changeAmountOfItem(item, newValue)
    }
  }
  return (
    <CartItemContainer>
      <CartItemPreview>
        <img src={item.preview} alt="" />

        <div>
          <p>{item.name}</p>
          <span>
            <CounterInput
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              onCounterChange={handleCounterChange}
              amount={item.amount}
              limit={5}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </span>
        </div>
      </CartItemPreview>

      <CartItemPrice>
        <span>{price}</span>
      </CartItemPrice>
    </CartItemContainer>
  )
}
