import styled from "styled-components";

interface IContainer {
    height: string;
    width: string;
}

export const Container = styled.button<IContainer>`
    height: ${props => props.height};
    width: ${props => props.width};
`;