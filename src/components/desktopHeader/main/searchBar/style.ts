import { colors } from '../../../../config/colors';
import styled from "styled-components";

export const Container = styled.div`
    select, input, button {
        outline: none;
    }

    select {
        border: none;
        height: 2rem;
        width: 8rem;

        background: ${colors.white};
        border: 1px solid ${colors.black};
        
    }

    input {
        height: 2rem;
        width: 30rem;
        padding: 0.25rem;
        border: 1px solid ${colors.black};

        border-left: 1px solid black;
    }

    button {
        height: 2rem;
        width: 5rem;

        border: none;
        &:hover {
            cursor: pointer;
        }

    }
`;