import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryImage from '../../../public/delivery.png'
import { Icon, SuccessContainer, SuccessDetails, SuccessHeader, SuccessItem, SuccessWrapper } from './styles'

export function Success() {
  return (
    <SuccessContainer>

      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <SuccessWrapper>
        <SuccessDetails>
          <SuccessItem>
            <Icon iconColor="yellow-dark">
              <MapPin weight="fill" size={16} />
            </Icon>
            <div>
              <p>Entrega em Rua João Daniel Martinelli, 102</p>

              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </SuccessItem>
          <SuccessItem>
            <i>
              <Timer />
            </i>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </SuccessItem>
          <SuccessItem>
            <i>
              <CurrencyDollar />
            </i>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </SuccessItem>
        </SuccessDetails>

        <img src={deliveryImage} alt="" />
      </SuccessWrapper>


    </SuccessContainer>
  )
}
