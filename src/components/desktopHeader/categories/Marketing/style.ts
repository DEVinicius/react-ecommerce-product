import { colors } from '../../../../config/colors';
import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    aside {
        height: 2rem;
        width: 0.15rem;

        margin: 0 0.5rem 0 0.5rem;
        background: ${colors.black};
    }
    
    a {
        transition: 0.25s;
        &:hover {
            color: ${shade(0.3, colors.black)};
        }
    }
`;