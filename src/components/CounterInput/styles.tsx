import styled from 'styled-components'

export const CounterInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  width: 72px;
  height: 38px;
  border-radius: 6px;

  background: ${(props) => props.theme.colors.base.button};

  button {
    display: flex;
    align-items: center;
    cursor: pointer;

    border: 0;
    outline: 0;

    background: transparent;
    color: ${(props) => props.theme.colors.brand.purple.normal};
  }

  input {
    text-align: center;
    border: 0;
    outline: 0;
    background: transparent;

    width: 35%;
    height: 100%;

    font: ${(props) => props.theme.fonts.text.md.regular};
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    margin: 0;

    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
