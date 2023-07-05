import { CartItem } from './components/CartItem'
import { RadioButton } from './components/RadioButton'
import { CartContext } from '../../contexts/CartContext'
import { ChangeEvent, useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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
  RadioButtonGroup,
  SummaryContainer,
  SummaryInfo,
  WrapperHeader,
  WrapperOrder,
} from './styles'

const AddressFormValidationSchema = zod.object({
  zip_code: zod.string().refine((value) => /^[0-9]{8}$/.test(value), {
    message: 'Informe um CEP válido',
  }),
  street: zod
    .string()
    .min(1, 'Informe a rua')
    .max(60, 'A rua deve ter no máximo 60 caracteres'),
  number: zod.string().min(1).max(10),
  complement: zod.string().optional(),
  neighborhood: zod
    .string()
    .min(1, 'Informe o bairro')
    .max(60, 'A cidade deve ter no máximo 60 caracteres'),
  city: zod
    .string()
    .min(1, 'Informe a cidade')
    .max(60, 'A cidade deve ter no máximo 60 caracteres'),
  uf: zod
    .string()
    .min(1, 'Informe a cidade')
    .max(2, 'O estado deve ter no máximo 2 caracteres'),
  // paymentMethod: zod
})

type AddressFormData = zod.infer<typeof AddressFormValidationSchema>

export function Checkout() {
  const { items } = useContext(CartContext)

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

  const { register, handleSubmit, formState } = AddressForm

  console.log(formState.errors)

  const onSubmit = (data: AddressFormData) => console.log(data)

  return (
    <main>
      <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
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
                  min={8}
                  onInvalid={(e: ChangeEvent<HTMLInputElement>) => {
                    e.target.setCustomValidity(
                      formState.errors?.zip_code?.message || '',
                    )
                  }}
                />
              </InputGroup>
              <InputGroup data-input-name="street">
                <label htmlFor="street">Rua</label>
                <input {...register('street')} placeholder="Rua" id="street" />
              </InputGroup>
              <InputGroup data-input-name="number">
                <label htmlFor="number">Número</label>
                <input
                  {...register('number', { valueAsNumber: false })}
                  placeholder="Número"
                  id="number"
                />
              </InputGroup>
              <InputGroup data-input-name="complement">
                <label htmlFor="complement">Complemento</label>
                <input
                  {...register('complement', { required: false })}
                  placeholder="Complemento"
                  id="complement"
                />
              </InputGroup>
              <InputGroup data-input-name="neighborhood">
                <label htmlFor="neighborhood">Bairro</label>
                <input
                  {...register('neighborhood')}
                  placeholder="Bairro"
                  id="neighborhood"
                />
              </InputGroup>
              <InputGroup data-input-name="city">
                <label htmlFor="">Cidade</label>
                <input {...register('city')} placeholder="Cidade" id="city" />
              </InputGroup>
              <InputGroup data-input-name="uf">
                <label htmlFor="uf">UF</label>
                <input
                  {...register('uf')}
                  placeholder="UF"
                  id="uf"
                  list="uf-list"
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
                <RadioButton id="credit">
                  <i>
                    <CreditCard size={16} />
                  </i>
                  <span>CARTÃO DE CRÉDITO</span>
                </RadioButton>
                <RadioButton id="debit">
                  <i>
                    <Bank size={16} />
                  </i>
                  <span>CARTÃO DE DÉBITO</span>
                </RadioButton>
                <RadioButton id="money">
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
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <SummaryInfo>
              <span>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </span>
              <span>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </span>
              <span>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </span>
            </SummaryInfo>

            <FinishButton type="submit">CONFIRMAR PEDIDO</FinishButton>
          </SummaryContainer>
        </div>
      </CheckoutContainer>
    </main>
  )
}
