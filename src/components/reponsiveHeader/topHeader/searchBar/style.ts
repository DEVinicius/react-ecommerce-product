import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;

    input {
        height: 5rem;
        width: 80%;
        border: none;
    }

    button {
        height: 5rem;
        width: 5rem;
        border: none;
    }
`;