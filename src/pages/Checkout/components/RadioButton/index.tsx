import { useFormContext } from 'react-hook-form'
import { RadioButtonContainer, RadioButtonContent } from './styles'
import { ReactNode } from 'react'

interface RadioButtonProps {
  children: ReactNode
  id: string
}

export function RadioButton({ children, id }: RadioButtonProps) {
  const { register } = useFormContext()
  return (
    <RadioButtonContainer>
      <input type="radio" id={id} {...register('paymentMethod')} />
      <RadioButtonContent htmlFor={id}>{children}</RadioButtonContent>
    </RadioButtonContainer>
  )
}
