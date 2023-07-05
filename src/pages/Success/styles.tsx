import styled from 'styled-components'

const ICON_COLORS = {
  'yellow-dark': '#C47F17',
  'yellow-normal': '#DBAC2C',
  'purple-normal': '#8047F8',
} as const

interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const SuccessContainer = styled.main`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const SuccessHeader = styled.header`
  h1 {
    font: ${(props) => props.theme.fonts.title.lg};
    color: ${(props) => props.theme.colors.brand.yellow.dark};
  }

  p {
    font: ${(props) => props.theme.fonts.text.lg.regular};
    color: ${(props) => props.theme.colors.base.subtitle};
  }
`

export const SuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.5rem;
`

export const SuccessDetails = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;

  gap: 2rem;
  padding: 40px;
  border-width: 1px;
  width: 100%;
  border-radius: 6px 36px;

  background: ${(props) => props.theme.colors.base.background};

  &::after {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;
    padding: 1px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    border-radius: 6px 36px;

    background: linear-gradient(134deg, #dbac2c 0%, #8047f8 100%);
  }
`

export const SuccessItem = styled.li`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`
export const Icon = styled.i<IconProps>`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  border-radius: 50%;

  color: ${(props) => props.theme.colors.base.white};
  background: ${(props) => ICON_COLORS[props.iconColor]};
`
