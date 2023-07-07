import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  AmountItemsCart,
  HeaderActions,
  HeaderContainer,
  LocationBadge,
} from './styles'
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
        <LocationBadge>
          <MapPin size={22} weight="fill" />
          Porto Alegre
        </LocationBadge>

        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {amountItems && <AmountItemsCart>{amountItems}</AmountItemsCart>}
        </NavLink>
      </HeaderActions>
    </HeaderContainer>
  )
}
