import { Container } from "./style";


interface IImage{
    url:string;
    name:string
}




export function ImageCredit({name, url}: IImage){
    return (
        <Container src={url} alt={name}>
            
        </Container>
    )
}