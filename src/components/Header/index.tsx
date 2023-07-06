import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderActions, HeaderContainer } from './styles'
import CoffeeDelivery from '../../../public/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { items } = useContext(CartContext)

  const amountItems = items.length
    ? items
        .map((item) => item.amount)
        .reduce((amount, item) => (amount += item), 0)
    : ''

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeDelivery} alt="" />
      </NavLink>

      <HeaderActions>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre
        </span>

        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {amountItems && <span>{amountItems}</span>}
        </NavLink>
      </HeaderActions>
    </HeaderContainer>
  )
}
