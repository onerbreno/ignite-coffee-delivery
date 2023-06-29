import { Minus, Plus } from 'phosphor-react'
import { CounterInputContainer } from './styles'
import { ChangeEvent, useState } from 'react'

export function CounterInput() {
  const [counterProduct, setCounterProduct] = useState(0)

  function handleCounterChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value)
    setCounterProduct(newValue)
  }

  function handleIncrement() {
    setCounterProduct((state) => state + 1)
  }

  function handleDecrement() {
    if (counterProduct > 0) {
      setCounterProduct((state) => state - 1)
    }
  }

  return (
    <CounterInputContainer>
      <button onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
        min={0}
        max={99}
        placeholder="0"
        value={counterProduct}
        onChange={handleCounterChange}
      />
      <button onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterInputContainer>
  )
}
