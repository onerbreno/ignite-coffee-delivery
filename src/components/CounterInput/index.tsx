import { Minus, Plus } from 'phosphor-react'
import { CounterInputContainer } from './styles'
import { ChangeEvent } from 'react'

interface CounterInputProps {
  onDecrement: () => void
  onIncrement: () => void
  onCounterChange: (event: ChangeEvent<HTMLInputElement>) => void
  amount: number
  limit: number
}

export function CounterInput({
  onDecrement,
  onIncrement,
  onCounterChange,
  amount,
  limit,
}: CounterInputProps) {
  const incrementDisabled = amount === limit
  const decrementDisabled = amount <= 1

  return (
    <CounterInputContainer>
      <button onClick={onDecrement} disabled={decrementDisabled}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
        placeholder="1"
        maxLength={1}
        value={amount}
        onChange={onCounterChange}
      />
      <button onClick={onIncrement} disabled={incrementDisabled}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterInputContainer>
  )
}
