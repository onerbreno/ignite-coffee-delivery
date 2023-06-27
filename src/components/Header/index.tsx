import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderActions, HeaderContainer } from './styles'
import CoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
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
        </NavLink>
      </HeaderActions>
    </HeaderContainer>
  )
}
