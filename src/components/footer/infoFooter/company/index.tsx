import { UILink } from "../../../../ui/links"
import { Container } from "./style"

export function Company(){

    return(
        <Container>
            <h4>Company</h4>
            <UILink url='About Us' title='Our Press'/>
            <UILink url='Affilate' title='Affilate'/>
            <UILink url='Career' title='Career'/>
            <UILink url='Contact' title='Contact'/>
        </Container>
    )
    
}