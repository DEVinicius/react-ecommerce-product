import { FiShoppingBag } from "react-icons/fi";
import { Container } from "./style";

export function Cart() {
  return (
    <Container href="/cart">
        <>
          <FiShoppingBag />
          <p>Carrinho</p>
        </>
    </Container>
  );
}
