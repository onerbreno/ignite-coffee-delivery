import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryImage from '../../../public/delivery.png'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Navigate } from 'react-router-dom'

import {
  Icon,
  SuccessContainer,
  SuccessDetails,
  SuccessHeader,
  SuccessItem,
  SuccessWrapper,
} from './styles'

export function Success() {
  const { order } = useContext(OrderContext)
  const notExistOrder = !order.zip_code
  if (notExistOrder) return <Navigate to="/" />

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de crédito',
    money: 'Cartão de crédito',
  }

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <SuccessWrapper>
        <SuccessDetails>
          <SuccessItem>
            <Icon iconColor="purple-normal">
              <MapPin weight="fill" size={16} />
            </Icon>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {order.street}, {order.number}
                </strong>
              </p>

              <p>
                {order.neighborhood} - {order.city}, {order.uf}
              </p>
            </div>
          </SuccessItem>
          <SuccessItem>
            <Icon iconColor="yellow-normal">
              <Timer />
            </Icon>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </SuccessItem>
          <SuccessItem>
            <Icon iconColor="yellow-dark">
              <CurrencyDollar />
            </Icon>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethod[order.paymentMethod]}</strong>
            </div>
          </SuccessItem>
        </SuccessDetails>

        <img src={deliveryImage} alt="" />
      </SuccessWrapper>
    </SuccessContainer>
  )
}
