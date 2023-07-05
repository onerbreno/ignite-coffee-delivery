import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 1rem 1.5rem 1rem;
  gap: 1.25rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.base.button};
`

export const CartItemPreview = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    height: 64px;
  }

  div {
    gap: 0.5rem;

    p {
      font: ${(props) => props.theme.fonts.text.md.regular};
      color: ${(props) => props.theme.colors.base.subtitle};
    }

    svg {
      color: ${(props) => props.theme.colors.brand.purple.normal};
    }

    span {
      display: flex;
      gap: 0.5rem;
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 0.5rem;
  border: 0;
  gap: 0.25rem;
  border-radius: 6px;

  font: ${(props) => props.theme.fonts.components.button.sm};
  background: ${(props) => props.theme.colors.base.button};
  color: ${(props) => props.theme.colors.base.text};
  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.base.hover};

    svg {
      color: ${(props) => props.theme.colors.brand.purple.dark};
    }
  }
`

export const CartItemPrice = styled.p`
  font: ${(props) => props.theme.fonts.text.md.bold};
  color: ${(props) => props.theme.colors.base.text};
`
