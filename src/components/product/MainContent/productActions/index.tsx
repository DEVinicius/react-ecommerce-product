import { ProductHeader } from "./header";
import { MainProduct } from "./main";
import { Container } from "./style";

export function ProductActions() {
    return (
        <Container>
            <ProductHeader />
            <MainProduct />
        </Container>
    );
}