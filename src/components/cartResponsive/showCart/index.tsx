import { CartTable } from "./cartTable";
import { ModifyPrice } from "./modifyPrice";
import { Container } from "./style";

export function ShowCart() {
    return (
        <Container>
            <CartTable />
            <ModifyPrice />
        </Container>
    );
}