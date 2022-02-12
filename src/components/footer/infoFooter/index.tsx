import { Company } from "./company"
import { Contact } from "./contact"
import { Policy } from "./policy"
import { Container } from "./style"
import { Bussiness } from './bussiness';

export function InfoFooter(){

    return(
        <Container>
            <Contact/>
            <Policy/>
            <Company/>
            <Bussiness/>
        </Container>
    )
    
}