import Link from "next/link";
import { Container } from "./style";

interface ILink{
    url:string;
    title:string
}

export function UILink({url, title}:ILink){
    return(
        <Container>
            <Link href={url}>
                {title}
            </Link>
        </Container>
        
    )
}