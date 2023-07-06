import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 256px;
  border-radius: 6px 36px;
  padding: 0 1.25rem;
  padding-bottom: 1.25rem;

  text-align: center;

  background: ${(props) => props.theme.colors.base.card};

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }
`

export const CoffeeCardBadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.25rem;
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
    width: 100%;

    font: ${(props) => props.theme.fonts.text.sm.regular};
    color: ${(props) => props.theme.colors.base.label};
  }
`

export const CoffeeCardFooter = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  p {
    display: flex;
    align-items: baseline;

    font: ${(props) => props.theme.fonts.title.md};

    span {
      font: ${(props) => props.theme.fonts.text.sm.regular};
    }
  }
`

export const CoffeeCardFooterActions = styled.span`
  display: flex;
  align-items: center;

  gap: 0.5rem;
`
export const CartButton = styled.button`
  display: flex;
  cursor: pointer;

  border-radius: 6px;
  padding: 0.5rem;
  border: 0;

  color: ${(props) => props.theme.colors.base.white};
  background: ${(props) => props.theme.colors.brand.purple.dark};
  transition: background-color 200ms;

  &:hover {
    background: ${(props) => props.theme.colors.brand.purple.normal};
  }
`
