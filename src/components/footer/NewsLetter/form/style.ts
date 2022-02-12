import styled from 'styled-components'


export const Container = styled.div`
width:45rem;
display:flex;
justify-content: start;
align-items: center;
position: relative;

input{
    width:44rem;
    height: 2.7rem;
    border-radius: .1rem;
    border: 1px solid #ccc;
    background: #f9f5f599;
}
button{
    position: absolute;
    right:0;
    padding: .76rem 3.5rem;
    color:#fff;
    border: 1px solid rgb(244, 14, 93);
    background-color:rgb(244, 14, 93);
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
    font-weight: bold;
    font-size: 1.05rem;
}
@media(max-width:1200px){
    flex-direction: column;
    align-items: start;
    width:100%;
    button, input{
        margin-top: 1.5rem;
    }
    input{
        
        width:90vw;
    }
    
}
`