import { CurrencyDollar, MapPinLine, Trash } from 'phosphor-react'
import {
  AddressInputs,
  CartItem,
  CheckoutContainer,
  InputGroup,
  SummaryContainer,
  SummaryInfo,
  WrapperHeader,
  WrapperOrder,
} from './styles'

import coffeeImage from '../../../public/expresso-tradicional.png'

export function Checkout() {
  return (
    <main>
      <CheckoutContainer>
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
                  type="text"
                  name="zip-code"
                  placeholder="CEP"
                  id="zip-code"
                />
              </InputGroup>
              <InputGroup data-input-name="street">
                <label htmlFor="">Rua</label>
                <input
                  type="text"
                  name="street"
                  placeholder="Rua"
                  id="street"
                />
              </InputGroup>
              <InputGroup data-input-name="number">
                <label htmlFor="">Número</label>
                <input type="text" name="number" placeholder="Número" id="" />
              </InputGroup>
              <InputGroup data-input-name="complement">
                <label htmlFor="">Complemento</label>
                <input
                  type="text"
                  name="complement"
                  placeholder="Complemento"
                  id=""
                />
              </InputGroup>
              <InputGroup data-input-name="neighborhood">
                <label htmlFor="">Bairro</label>
                <input
                  type="text"
                  name="neighborhood"
                  placeholder="Bairro"
                  id=""
                />
              </InputGroup>
              <InputGroup data-input-name="city">
                <label htmlFor="">Cidade</label>
                <input type="text" name="city" placeholder="Cidade" id="" />
              </InputGroup>
              <InputGroup data-input-name="uf">
                <label htmlFor="uf">UF</label>
                <input
                  type="data"
                  name="uf"
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
                <legend>Endereço de entrega</legend>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </WrapperHeader>
          </WrapperOrder>
        </div>

        <div>
          <h4>Cafés selecionados</h4>
          <SummaryContainer>
            <CartItem>
              <span>
                <img src={coffeeImage} alt="" />
                <div>
                  <p>Expresso Tradicional</p>
                  {/* <CounterInput /> */}
                  <button>
                    <Trash />
                    Remover
                  </button>
                </div>
              </span>
              <p>
                <span>R$</span> 9,90
              </p>
            </CartItem>
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
                <strong>R$ 3,50</strong>
                <strong>R$ 33,20</strong>
              </span>
            </SummaryInfo>
            <button></button>
          </SummaryContainer>
        </div>
      </CheckoutContainer>
    </main>
  )
}
