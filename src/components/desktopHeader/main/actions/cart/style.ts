import { shade } from 'polished';
import { colors } from '../../../../../config/colors';
import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    
    &:hover {
        svg {
            color: ${shade(0.5, colors.black)};
        }
    }
    
    svg {
        transition: 0.25s;
        color: ${colors.black};
        font-size: 2rem;
    }
`;