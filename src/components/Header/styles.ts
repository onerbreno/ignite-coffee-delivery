import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;

    border-radius: 6px;
    gap: 0.25rem;
    padding: 0.5rem;

    color: ${(props) => props.theme.colors.brand.purple.normal};
    background: ${(props) => props.theme.colors.brand.purple.light};
  }

  a {
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme.colors.brand.yellow.light};
    color: ${(props) => props.theme.colors.brand.yellow.dark};
  }
`
