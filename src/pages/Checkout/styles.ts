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
  display: grid;
  grid-template-columns: minmax(min-content, 640px) minmax(min-content, 448px);

  margin-top: 2.5rem;
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

export const RadioButtonGroup = styled.span`
  display: flex;

  width: 100%;
  gap: 0.75rem;
`

export const WrapperHeader = styled.header<IconProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => ICON_COLORS[props.iconColor]};
  }

  legend {
    margin-bottom: 0.15rem;

    font: ${(props) => props.theme.fonts.text.md.regular};
    color: ${(props) => props.theme.colors.base.subtitle};
  }
`

export const AddressInputs = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 12.5rem) 1fr minmax(
      min-content,
      3.75rem
    );
  grid-template-areas:
    'zip-code . .'
    'street street street'
    'number complement complement'
    'neighborhood city uf';

  width: 100%;
  gap: 1rem 0.75rem;
`

export const InputGroup = styled.div`
  position: relative;

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

  input {
    width: 100%;
    padding: 0.75rem;

    border: 0;
    border-radius: 4px;
  }

  span {
    position: absolute;
    transform: translateY(-50%);

    top: 50%;
    right: 0.75rem;
    user-select: none;

    color: ${(props) => props.theme.colors.base.label};
    font: normal italic 0.75rem Roboto;
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme.colors.brand.yellow.dark};
  }

  input::-webkit-calendar-picker-indicator {
    width: 0px;
    height: 0px;

    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    color: transparent;
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
`

export const SummaryContainer = styled.div`
  ${baseWrapper}
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`

export const NoItemsLabel = styled.span`
  text-align: center;
  padding: 1rem 1rem 1rem;
`

export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 1px solid ${(props) => props.theme.colors.base.button};
  padding-top: 1.5rem;
  gap: 0.75rem;

  span {
    display: flex;
    justify-content: space-between;
  }
`

export const FinishButton = styled.button`
  border: none;
  cursor: pointer;

  border-radius: 6px;
  padding: 0.75rem;

  font: ${(props) => props.theme.fonts.components.button.lg};
  background: ${(props) => props.theme.colors.brand.yellow.normal};
  color: ${(props) => props.theme.colors.base.white};

  transition: background-color 0.3s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.brand.yellow.dark};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`
