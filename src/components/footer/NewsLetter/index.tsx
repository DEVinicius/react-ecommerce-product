import { FormNewsLetter } from "./form"
import { Container } from "./style"
import { TitleNewsLette } from "./title"

export function NewsLatter(){

    return(
        <Container>
            <TitleNewsLette title='Newsletter' description='Subcribe to get information about products and coupons'/>
            <FormNewsLetter/>
        </Container>
    )
    
}