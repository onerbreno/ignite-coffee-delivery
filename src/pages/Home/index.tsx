import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeeListContainer,
  CoffeeSection,
  Hero,
  HeroItem,
  HeroItems,
  HeroTitle,
  HomeContainer,
  Icon,
} from './styles'

import coffeeImage from '../../../public/coffee.png'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <Hero>
        <div>
          <HeroTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HeroTitle>

          <HeroItems>
            <HeroItem>
              <Icon iconColor="yellow-dark">
                <ShoppingCart weight="fill" size={16} />
              </Icon>
              Compra simples e segura
            </HeroItem>
            <HeroItem>
              <Icon iconColor="yellow-normal">
                <Package weight="fill" size={16} />
              </Icon>
              Embalagem mantém o café intacto
            </HeroItem>
            <HeroItem>
              <Icon iconColor="purple-normal">
                <Timer weight="fill" size={16} />
              </Icon>
              Entrega rápida e rastreada
            </HeroItem>
            <HeroItem>
              <Icon iconColor="base-text">
                <Coffee weight="fill" size={16} />
              </Icon>
              O café chega fresquinho até você
            </HeroItem>
          </HeroItems>
        </div>

        <img src={coffeeImage} alt="" />
      </Hero>

      <CoffeeSection>
        <h2>Nossos cafés</h2>

        <CoffeeListContainer>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeListContainer>
      </CoffeeSection>
    </HomeContainer>
  )
}
