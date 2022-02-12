import { CreditInfo } from "./creditInfo";
import { Reserved } from "./reserved";
import { Container } from "./style";



export function Direct(){
    return(
        <Container>
            <Reserved title="© 2021 Martfury. All Rights Reserved"/>
            <CreditInfo/>
        </Container>
    )
}