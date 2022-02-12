import { Container } from "./style";
import Link  from 'next/link';

interface IIcons{
    icon:React.ReactNode;
    url:string;
    color:string;
}




export function Icons({url, icon, color}:IIcons){
    return (
        <Container color={color}>
            <Link href={url}>
                {icon}
            </Link>
        </Container>
    )
}