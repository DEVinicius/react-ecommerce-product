
import { ImageCredit } from "./image";
import { Container } from "./style";


export function CreditInfo(){
    return (
        <Container>
            <p>We Using Safe Payment For:</p>
            <ImageCredit name="mastercard" url="https://reactstorefronts.com/static/img/payment-method/3.jpg"/>
            <ImageCredit name="mastercard" url="https://reactstorefronts.com/static/img/payment-method/3.jpg"/>
            <ImageCredit name="mastercard" url="https://reactstorefronts.com/static/img/payment-method/3.jpg"/>
            <ImageCredit name="mastercard" url="https://reactstorefronts.com/static/img/payment-method/3.jpg"/>
            
        </Container>
    )
}