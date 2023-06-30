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
import { ChangeEvent, useState } from 'react'

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
          <span>R$</span> {coffee.price.toFixed(2).replace('.', ',')}
        </p>

        <CoffeeCardFooterActions>
          <CounterInput
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            onCounterChange={handleCounterChange}
            amount={amount}
            limit={5}
          />
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </CoffeeCardFooterActions>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
