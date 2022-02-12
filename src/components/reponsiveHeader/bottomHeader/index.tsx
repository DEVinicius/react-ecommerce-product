import { Cart } from "./cart";
import { Categories } from "./categories";
import { Container } from "./style";

export function BottomHeader() {
    return(
        <Container>
            <Categories/>
            <Cart />
        </Container>
    )
}