import { Container } from "./style";

interface ILink{
    url:string;
    title:string
}

export function UILink({url, title}:ILink){
    return(
        <Container>
            <a href={url}>
                {title}
            </a>
        </Container>
        
    )
}