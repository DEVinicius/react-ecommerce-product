import { Marketing } from "./Marketing";
import { ShopByDepartament } from "./shopByDepartament";
import { Container } from "./style";

export function Categories() {
    return (
        <Container>
            <ShopByDepartament />
            <Marketing /> 
        </Container>
    );
}