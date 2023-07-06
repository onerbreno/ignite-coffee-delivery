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

  & > span {
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
    position: relative;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme.colors.brand.yellow.light};
    color: ${(props) => props.theme.colors.brand.yellow.dark};

    span {
      position: absolute;

      height: 20px;
      min-width: 20px;

      display: flex;
      align-items: center;
      text-align: center;

      border-radius: 50px;

      padding: 0.5rem 0.45rem;
      padding-bottom: 0.35rem;
      top: -12px;
      right: -12px;

      font: ${(props) => props.theme.fonts.text.sm.bold};
      color: ${(props) => props.theme.colors.base.white};
      background: ${(props) => props.theme.colors.brand.yellow.dark};
    }
  }
`
