import styled from "styled-components";

export const Container = styled.div`
 padding-bottom: .7rem;
    a{
        position: relative;
        color: #666;
        text-decoration: none;
        &:before{
            content:'';
            position:absolute;
            left:0;
            bottom: 0;
            width:0;
            height:1px;
            background: #666;
            transition: 0.4s;
        }
        &:hover:before{
            width:100%;
            transition: 0.4s;
        }
    }
`