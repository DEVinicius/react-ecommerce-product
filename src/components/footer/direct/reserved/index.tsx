import { Container } from "./style";

interface IReserved{
    title:string
}





export function Reserved({title}:IReserved){
    return(
        <Container>
            <p>{title}</p>
        </Container>
    )
}