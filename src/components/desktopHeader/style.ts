import { colors } from '../../config/colors';
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    background: ${colors.background};
`;