import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 256px;
  border-radius: 6px 36px;
  padding: 0 1.5rem;
  padding-bottom: 1.25rem;

  background: ${(props) => props.theme.colors.base.card};

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }
`

export const CoffeeCardBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  background: ${(props) => props.theme.colors.brand.yellow.light};
  font: ${(props) => props.theme.fonts.components.tag};
  color: ${(props) => props.theme.colors.brand.yellow.dark};
`

export const CoffeeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  h4 {
    font: ${(props) => props.theme.fonts.title.sm};
    color: ${(props) => props.theme.colors.base.subtitle};
  }

  p {
    text-align: center;
    font: ${(props) => props.theme.fonts.text.sm.regular};
    color: ${(props) => props.theme.colors.base.label};
  }
`

export const CoffeeCardFooter = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  p {
    font: ${(props) => props.theme.fonts.title.md};

    span {
      font: ${(props) => props.theme.fonts.text.sm.regular};
    }
  }
`

export const CoffeeCardFooterActions = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
export const CartButton = styled.button`
  display: flex;
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme.colors.base.white};
  background: ${(props) => props.theme.colors.brand.purple.dark};
  padding: 0.5rem;
`
