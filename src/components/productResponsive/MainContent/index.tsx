import { ProductActions } from "./productActions";
import { ProductImage } from "./productImage";
import { Container } from "./style";

export function MainContent() {
    return (
        <Container>
            <ProductImage />
            <ProductActions />
        </Container>
    );
}