import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    p{
        padding-right: 1rem;
    }
    @media(max-width:400px){
        p{
            width:100%;
            text-align: center;
        }
    }
`