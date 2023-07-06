import { CartItem } from './components/CartItem'
import { RadioButton } from './components/RadioButton'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { formatCurrency } from '../../utils/formatCurrency'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  AddressInputs,
  CheckoutContainer,
  FinishButton,
  InputGroup,
  NoItemsLabel,
  RadioButtonGroup,
  SummaryContainer,
  SummaryInfo,
  WrapperHeader,
  WrapperOrder,
} from './styles'
import { OrderContext } from '../../contexts/OrderContext'
import { useNavigate } from 'react-router-dom'

const AddressFormValidationSchema = zod.object({
  zip_code: zod
    .string()
    .length(8, 'O CEP deve ter exatamente 8 dígitos')
    .regex(/^\d{8}$/, 'Informe um CEP válido'),
  street: zod
    .string()
    .min(1, 'Informe a rua')
    .max(60, 'A rua deve ter no máximo 60 caracteres'),
  number: zod
    .string()
    .min(1, 'Informe o número')
    .max(10, 'O número deve ter no máximo 10 caracteres'),
  complement: zod.string().optional(),
  neighborhood: zod
    .string()
    .min(1, 'Informe o bairro')
    .max(60, 'O bairro deve ter no máximo 60 caracteres'),
  city: zod
    .string()
    .min(1, 'Informe a cidade')
    .max(60, 'A cidade deve ter no máximo 60 caracteres'),
  uf: zod
    .string()
    .min(2, 'Informe o estado')
    .max(2, 'O estado deve ter exatamente 2 caracteres'),
  paymentMethod: zod.enum(['credit', 'debit', 'money']),
})

export type AddressFormData = zod.infer<typeof AddressFormValidationSchema>

export function Checkout() {
  const { items, currencyOfDelivery } = useContext(CartContext)
  const { onFinishOrder } = useContext(OrderContext)

  const navigate = useNavigate()

  const AddressForm = useForm<AddressFormData>({
    resolver: zodResolver(AddressFormValidationSchema),
    defaultValues: {
      zip_code: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
    },
  })

  const { register, handleSubmit } = AddressForm

  function handleSubmitOrder(data: AddressFormData) {
    onFinishOrder(data)

    navigate('/sucesso')
  }

  const hasItems = !!items.length

  const isOrderSubmitButtonDisabled = !hasItems

  const totalPriceItems = items.reduce(
    (value, item) => value + item.price * item.amount,
    0,
  )

  const formatTotalPriceItems = formatCurrency(totalPriceItems)

  const totalOrder = totalPriceItems + currencyOfDelivery.value
  const formatTotalOrder = formatCurrency(totalOrder)

  return (
    <main>
      <CheckoutContainer onSubmit={handleSubmit(handleSubmitOrder)}>
        <div>
          <h4>Complete seu pedido</h4>
          <WrapperOrder>
            <WrapperHeader iconColor="yellow-dark">
              <MapPinLine size={22} />

              <div>
                <legend>Endereço de entrega</legend>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </WrapperHeader>

            <AddressInputs>
              <InputGroup data-input-name="zip-code">
                <label htmlFor="">CEP</label>
                <input
                  {...register('zip_code', { valueAsNumber: false })}
                  placeholder="CEP"
                  id="zip_code"
                  required
                  minLength={8}
                  maxLength={8}
                />
              </InputGroup>
              <InputGroup data-input-name="street">
                <label htmlFor="street">Rua</label>
                <input
                  {...register('street')}
                  placeholder="Rua"
                  id="street"
                  required
                  minLength={1}
                  maxLength={60}
                />
              </InputGroup>
              <InputGroup data-input-name="number">
                <label htmlFor="number">Número</label>
                <input
                  {...register('number', { valueAsNumber: false })}
                  placeholder="Número"
                  id="number"
                  required
                  minLength={1}
                  maxLength={60}
                />
              </InputGroup>
              <InputGroup data-input-name="complement">
                <label htmlFor="complement">Complemento</label>
                <input
                  {...register('complement', { required: false })}
                  placeholder="Complemento"
                  id="complement"
                  minLength={1}
                  maxLength={60}
                />
              </InputGroup>
              <InputGroup data-input-name="neighborhood">
                <label htmlFor="neighborhood">Bairro</label>
                <input
                  {...register('neighborhood')}
                  placeholder="Bairro"
                  id="neighborhood"
                  required
                  minLength={1}
                  maxLength={60}
                />
              </InputGroup>
              <InputGroup data-input-name="city">
                <label htmlFor="">Cidade</label>
                <input
                  {...register('city')}
                  placeholder="Cidade"
                  id="city"
                  required
                  minLength={1}
                  maxLength={60}
                />
              </InputGroup>
              <InputGroup data-input-name="uf">
                <label htmlFor="uf">UF</label>
                <input
                  {...register('uf')}
                  placeholder="UF"
                  id="uf"
                  list="uf-list"
                  required
                  minLength={2}
                  maxLength={2}
                />
                <datalist id="uf-list">
                  <option value="AC"></option>
                  <option value="AL"></option>
                  <option value="AP"></option>
                  <option value="AM"></option>
                  <option value="BA"></option>
                  <option value="CE"></option>
                  <option value="DF"></option>
                  <option value="ES"></option>
                  <option value="GO"></option>
                  <option value="MA"></option>
                  <option value="MT"></option>
                  <option value="MS"></option>
                  <option value="MG"></option>
                  <option value="PA"></option>
                  <option value="PB"></option>
                  <option value="PR"></option>
                  <option value="PE"></option>
                  <option value="PI"></option>
                  <option value="RJ"></option>
                  <option value="RN"></option>
                  <option value="RS"></option>
                  <option value="RO"></option>
                  <option value="RR"></option>
                  <option value="SC"></option>
                  <option value="SP"></option>
                  <option value="SE"></option>
                  <option value="TO"></option>
                </datalist>
              </InputGroup>
            </AddressInputs>
          </WrapperOrder>

          <WrapperOrder>
            <WrapperHeader iconColor="purple-normal">
              <CurrencyDollar size={22} />
              <div>
                <legend>Pagamento</legend>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </WrapperHeader>

            <FormProvider {...AddressForm}>
              <RadioButtonGroup>
                <RadioButton
                  id="credit"
                  value="credit"
                  formName="paymentMethod"
                >
                  <i>
                    <CreditCard size={16} />
                  </i>
                  <span>CARTÃO DE CRÉDITO</span>
                </RadioButton>
                <RadioButton id="debit" value="debit" formName="paymentMethod">
                  <i>
                    <Bank size={16} />
                  </i>
                  <span>CARTÃO DE DÉBITO</span>
                </RadioButton>
                <RadioButton id="money" value="money" formName="paymentMethod">
                  <i>
                    <Money size={16} />
                  </i>
                  <span>DINHEIRO</span>
                </RadioButton>
              </RadioButtonGroup>
            </FormProvider>
          </WrapperOrder>
        </div>

        <div>
          <h4>Cafés selecionados</h4>
          <SummaryContainer>
            {hasItems ? (
              items.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <NoItemsLabel>Nenhum café selecionado</NoItemsLabel>
            )}
            <SummaryInfo>
              <span>
                <p>Total de itens</p>
                <p>{formatTotalPriceItems}</p>
              </span>
              <span>
                <p>Entrega</p>
                <p>
                  {hasItems ? currencyOfDelivery.format : formatCurrency(0)}
                </p>
              </span>
              <span>
                <strong>Total</strong>
                <strong>{formatTotalOrder}</strong>
              </span>
            </SummaryInfo>

            <FinishButton type="submit" disabled={isOrderSubmitButtonDisabled}>
              CONFIRMAR PEDIDO
            </FinishButton>
          </SummaryContainer>
        </div>
      </CheckoutContainer>
    </main>
  )
}
