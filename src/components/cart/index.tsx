import { useSelector } from "react-redux"
import { IStore } from "../../redux";
import { ICartItem } from "../../redux/modules/cart/dto/CartItem.dto";
import { EmptyCart } from "./emptyCart";
import { ShowCart } from "./showCart";
import { Container } from "./style";

export function Cart() {
    const cart = useSelector<IStore, ICartItem[]>(state => state.cart.cart);
    return (
        <Container>
            <h1>Carrinho de Compras</h1>
            {
                cart.length > 0 ? <ShowCart /> : <EmptyCart />
            }
        </Container>
    )
}