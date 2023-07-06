import { useFormContext } from 'react-hook-form'
import { RadioButtonContainer, RadioButtonContent } from './styles'
import { ReactNode } from 'react'

interface RadioButtonProps {
  children: ReactNode
  id: string
  value: string
  formName: string
}

export function RadioButton({
  children,
  id,
  value,
  formName,
}: RadioButtonProps) {
  const { register } = useFormContext()
  return (
    <RadioButtonContainer>
      <input type="radio" id={id} value={value} {...register(formName)} />
      <RadioButtonContent htmlFor={id}>{children}</RadioButtonContent>
    </RadioButtonContainer>
  )
}
