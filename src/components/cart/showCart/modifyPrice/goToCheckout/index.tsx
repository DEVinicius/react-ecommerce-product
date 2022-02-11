import { Container } from "./style";
import { Link } from 'react-router-dom';

export function GoToCheckout() {
    return (
        <Container>
            <Link to="/checkout">
                Prosseguir
            </Link>
        </Container>
    );
}