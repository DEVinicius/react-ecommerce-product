import { colors } from '../../../../../../config/colors';
import styled from "styled-components";

export const Container = styled.button`
    height: 3rem;
    width: 10rem;

    background: ${colors.primary};
    transition: 0.5s;

    color: ${colors.white};

    border: none;
    border-radius: 0.25rem;

    cursor: pointer;

    &:hover {
        background: ${colors.secondary};
    }
`;