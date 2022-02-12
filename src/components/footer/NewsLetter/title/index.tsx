import { Container } from "./style"

interface ITitle{
    title:string;
    description:string;
}

export function TitleNewsLette({title, description}:ITitle){

    return(
        <Container>
            <h3>{title}</h3>
            <p>{description}</p>
        </Container>
    )
    
}