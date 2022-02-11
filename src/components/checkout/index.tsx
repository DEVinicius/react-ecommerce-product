import { ShippingAddress } from "./shippingAddress";
import { Container } from "./style";
import { YourOrder } from "./yourOrder";

export function Checkout() {
    return (
        <Container>
            <ShippingAddress />
            <YourOrder />
        </Container>
    );
}