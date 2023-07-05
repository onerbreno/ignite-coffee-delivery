import styled from 'styled-components'

export const RadioButtonContainer = styled.div`
  width: 100%;
  input {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  input:checked + label {
    background: ${(props) => props.theme.colors.brand.purple.light};
    border: 1px solid ${(props) => props.theme.colors.brand.purple.normal};
  }
`

export const RadioButtonContent = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;
  width: 100%;
  border-radius: 6px;
  padding: 1rem;

  background: ${(props) => props.theme.colors.base.button};
  border: 1px solid ${(props) => props.theme.colors.base.button};

  i {
    color: ${(props) => props.theme.colors.brand.purple.normal};
  }

  span {
    font: ${(props) => props.theme.fonts.components.button.sm};
  }

  &:hover {
    background: ${(props) => props.theme.colors.base.hover};
    border-color: ${(props) => props.theme.colors.base.hover};

    span {
      color: ${(props) => props.theme.colors.base.subtitle};
    }
  }
`
