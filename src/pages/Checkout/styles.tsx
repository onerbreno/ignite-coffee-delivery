import styled, { css } from 'styled-components'

const ICON_COLORS = {
  'yellow-dark': '#C47F17',
  'purple-normal': '#8047F8',
} as const

interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

const baseWrapper = css`
  background: ${(props) => props.theme.colors.base.card};
  padding: 2.5rem;
`

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: minmax(min-content, 640px) minmax(min-content, 448px);
  gap: 2rem;

  h4 {
    margin-bottom: 1rem;
    font: ${(props) => props.theme.fonts.title.xs};
  }
`

export const WrapperOrder = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${baseWrapper}
  border: 0;

  & + & {
    margin-top: 0.75rem;
  }
`

export const WrapperHeader = styled.header<IconProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => ICON_COLORS[props.iconColor]};
  }

  legend {
    font: ${(props) => props.theme.fonts.text.md.regular};
    color: ${(props) => props.theme.colors.base.subtitle};
    margin-bottom: 0.15rem;
  }
`

export const AddressInputs = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem 0.75rem;
  grid-template-columns: minmax(min-content, 12.5rem) 1fr minmax(
      min-content,
      3.75rem
    );
  grid-template-areas:
    'zip-code . .'
    'street street street'
    'number complement complement'
    'neighborhood city uf';
`

export const InputGroup = styled.div`
  input {
    border: 0;
    border-radius: 4px;
    padding: 0.75rem;
    width: 100%;
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    margin: 0;
  }

  label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  &[data-input-name='zip-code'] {
    grid-area: zip-code;
  }

  &[data-input-name='street'] {
    grid-area: street;
  }

  &[data-input-name='number'] {
    grid-area: number;
  }

  &[data-input-name='complement'] {
    grid-area: complement;
  }

  &[data-input-name='neighborhood'] {
    grid-area: neighborhood;
  }

  &[data-input-name='city'] {
    grid-area: city;
  }

  &[data-input-name='uf'] {
    grid-area: uf;
  }
`

export const SummaryContainer = styled.div`
  ${baseWrapper}
`

export const CartItem = styled.div`
  padding: 0.5rem 0.25rem;
  display: flex;
  /* justify-content: ; */

  gap: 1.25rem;
  img {
    width: 64px;
    height: 64px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      font: ${(props) => props.theme.fonts.text.md.regular};
    }
  }
`

export const SummaryInfo = styled.div``
