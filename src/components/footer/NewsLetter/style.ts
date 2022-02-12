import styled from 'styled-components'


export const Container = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom:5rem;
border-top:1px solid #ccc;
padding-top: 4rem;

@media(max-width:1200px){
    flex-direction: column;
    align-items: start;
}
`