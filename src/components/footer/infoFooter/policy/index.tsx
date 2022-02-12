import { UILink } from "../../../../ui/links"
import { Container } from "./style"

export function Policy(){

    return(
        <Container>
        <h4>Quick links</h4>
        <UILink url='Policy' title='Our Press'/>
        <UILink url='Termo E Condições' title='Termo E Condições'/>
        <UILink url='Shippinh' title='Shippinh'/>
        <UILink url='Return' title='Return'/>
        <UILink url='FAQs' title='FAQs'/>
    </Container>
    )
    
}