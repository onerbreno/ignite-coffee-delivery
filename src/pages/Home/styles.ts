import styled from 'styled-components'

const ICON_COLORS = {
  'yellow-dark': '#C47F17',
  'yellow-normal': '#DBAC2C',
  'purple-normal': '#8047F8',
  'base-text': '#574F4D',
} as const

interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const Hero = styled.section`
  display: flex;
  gap: 2.5rem;
  padding: 5.75rem 0;
`

export const HeroTitle = styled.div`
  margin-bottom: 4.125rem;

  h1 {
    margin-bottom: 1rem;

    color: ${(props) => props.theme.colors.base.title};
    font: ${(props) => props.theme.fonts.title.xl};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;

    color: ${(props) => props.theme.colors.base.subtitle};
    font: ${(props) => props.theme.fonts.text.lg.regular};
  }
`

export const HeroItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`

export const HeroItem = styled.li`
  display: flex;
  align-items: center;

  min-width: 251px;
  gap: 0.75rem;
  line-height: 1.3;

  color: ${(props) => props.theme.colors.base.text};
`

export const Icon = styled.i<IconProps>`
  display: flex;

  padding: 1rem;
  border-radius: 50%;

  color: ${(props) => props.theme.colors.base.white};
  background: ${(props) => ICON_COLORS[props.iconColor]};
`

export const CoffeeSection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 3.375rem;

  h2 {
    font: ${(props) => props.theme.fonts.title.lg};
    color: ${(props) => props.theme.colors.base.subtitle};
  }
`

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
