import { Container } from "./style";

interface IIcons{
    icon:React.ReactNode;
    url:string;
    color:string;
}




export function Icons({url, icon, color}:IIcons){
    return (
        <Container color={color}>
            <a href={url}>
                {icon}
            </a>
        </Container>
    )
}