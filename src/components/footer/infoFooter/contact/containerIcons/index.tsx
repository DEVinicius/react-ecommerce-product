import { Container } from "./style";
import {FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG} from 'react-icons/fa'
import { Icons } from "./icons";

export function ContainerIcons(){
    return (
        <Container>
            <Icons icon={<FaFacebookF/>} color='3B5998' url='asdasdasd'/>
            <Icons icon={<FaTwitter/>} color='0084B4' url='asdasdasd'/>
            <Icons icon={<FaGooglePlusG/>} color='ff0000' url='asdasdasd'/>
            <Icons icon={<FaInstagram/>} color='C92AA3' url='asdasdasd'/>
        </Container>
    )
}