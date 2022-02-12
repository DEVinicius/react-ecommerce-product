import { Container } from "./style"
import { NewsLatter } from './NewsLetter/index';
import { InfoFooter } from "./infoFooter";
import { ListCategory } from "./ListCategory";
import { Direct } from "./direct";

export function Footer(){

    return(
        <Container>
           <InfoFooter/>
           <ListCategory/>
           <Direct/>
        </Container>
    )
    
}