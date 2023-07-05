import { CounterInput } from '../../../../components/CounterInput'
import { ShoppingCart } from 'phosphor-react'

import {
  CartButton,
  CoffeeCardBadge,
  CoffeeCardBadgeContainer,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardFooterActions,
  CoffeeCardInfo,
} from './styles'

import { ChangeEvent, useContext, useState } from 'react'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { CartContext } from '../../../../contexts/CartContext'

export interface CoffeeType {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  preview: string
}

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { AddNewItem, changeAmountOfItem, items } = useContext(CartContext)
  const [amount, setAmount] = useState(1)

  function handleIncrement() {
    setAmount((state) => state + 1)
  }

  function handleDecrement() {
    setAmount((state) => state - 1)
  }

  function handleCounterChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value)
    if (newValue <= 5) {
      setAmount(newValue)
    }
  }

  function handleClickCartButton() {
    const itemInCart = items.find((item) => item.id === coffee.id)
    if (itemInCart) {
      changeAmountOfItem(itemInCart, amount)
    } else {
      AddNewItem({ ...coffee, amount })
    }
  }

  const price = formatCurrency(coffee.price).split('R$')[1]

  return (
    <CoffeeCardContainer>
      <img src={`../../../../../${coffee.preview}`} alt="" />

      <CoffeeCardBadgeContainer>
        {coffee.tags.map((tag) => (
          <CoffeeCardBadge key={tag}>{tag}</CoffeeCardBadge>
        ))}
      </CoffeeCardBadgeContainer>

      <CoffeeCardInfo>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>
      </CoffeeCardInfo>

      <CoffeeCardFooter>
        <p>
          <span>R$</span> {price}
        </p>

        <CoffeeCardFooterActions>
          <CounterInput
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            onCounterChange={handleCounterChange}
            amount={amount}
            limit={5}
          />
          <CartButton onClick={handleClickCartButton}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </CoffeeCardFooterActions>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
