import { Trash } from 'phosphor-react'
import {
  CartItemContainer,
  CartItemPreview,
  CartItemPrice,
  RemoveButton,
} from './styles'

import coffeeImage from '../../../../public/expresso-tradicional.png'
import { CounterInput } from '../../../components/CounterInput'

export function CartItem() {
  return (
    <CartItemContainer>
      <CartItemPreview>
        <img src={coffeeImage} alt="" />

        <div>
          <p>Expresso Tradicional</p>
          <span>
            <CounterInput />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </span>
        </div>
      </CartItemPreview>

      <CartItemPrice>
        <span>R$</span> 9,90
      </CartItemPrice>
    </CartItemContainer>
  )
}
