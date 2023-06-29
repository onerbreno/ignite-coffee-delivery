import {
  CartButton,
  CoffeeCardBadge,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardFooterActions,
  CoffeeCardInfo,
} from './styles'
import { CounterInput } from '../../../../components/CounterInput'

import expressoTradicional from '../../../../../public/expresso-tradicional.png'
import { ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expressoTradicional} alt="" />

      <CoffeeCardBadge>Tradicional</CoffeeCardBadge>

      <CoffeeCardInfo>
        <h4>Expresso Tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeCardInfo>

      <CoffeeCardFooter>
        <p>
          <span>R$</span> 9,90
        </p>

        <CoffeeCardFooterActions>
          <CounterInput />
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </CoffeeCardFooterActions>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
