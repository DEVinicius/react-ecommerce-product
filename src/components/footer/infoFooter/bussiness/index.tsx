import { UILink } from "../../../../ui/links"
import { Container } from "./style"

export function Bussiness(){

    return(
        <Container>
            <h4>Bussiness</h4>
            <UILink url='Our Press' title='Our Press'/>
            <UILink url='Checkout' title='Checkout'/>
            <UILink url='My Account' title='My Account'/>
            <UILink url='Shop' title='Shop'/>
        </Container>
    )
    
}