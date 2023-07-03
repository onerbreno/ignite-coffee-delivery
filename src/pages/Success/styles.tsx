import styled from "styled-components";

const ICON_COLORS = {
    'yellow-dark': '#C47F17',
    'yellow-normal': '#DBAC2C',
    'purple-normal': '#8047F8',
    'base-text': '#574F4D',
} as const

interface IconProps {
    iconColor: keyof typeof ICON_COLORS
}

export const SuccessContainer = styled.main`
    display: flex;
    flex-direction: column;

`

export const SuccessHeader = styled.header`
    h1 {
        font: ${(props) => props.theme.fonts.title.lg};
        color: ${(props) => props.theme.colors.brand.yellow.dark};
    }
    
    p {
        font: ${(props) => props.theme.fonts.text.lg.regular};
        color: ${(props) => props.theme.colors.base.subtitle    };
        
    }
`


export const Icon = styled.i<IconProps>`
  
    color: ${(props) => props.theme.colors.base.white};
    color: ${(props) => props.theme.colors.base.white};
    background: ${(props) => ICON_COLORS[props.iconColor]};
`

export const SuccessWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SuccessDetails = styled.ul`
    display: flex;
    flex-direction: column;
    height: max-content;
    gap: 2rem;
    padding: 40px;
    border: 1px solid ${props => props.theme.colors.brand.yellow.normal};
`

export const SuccessItem = styled.li`
    display: flex;
    gap: 0.75rem;
`
