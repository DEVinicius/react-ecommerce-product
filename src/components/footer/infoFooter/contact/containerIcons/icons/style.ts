import styled from 'styled-components'

interface IColor{
    color: string;
}

export const Container = styled.div<IColor>`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    svg{
        width: 1.3rem;
        height: 1.3rem;
        fill:#${props=>props.color}
    }
`