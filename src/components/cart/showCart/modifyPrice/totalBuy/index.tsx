import { useSelector } from "react-redux";
import { IStore } from "../../../../../redux";
import { ICartItem } from "../../../../../redux/modules/cart/dto/CartItem.dto";
import { Container } from "./style";

export function TotalBuy() {
    const products = useSelector<IStore, ICartItem[]>(state => state.cart.cart);
    const productSubTotal = products.map(product => product.quantity * parseFloat(product.product.promotionPrice)).reduce((previousValue, currentValue) => previousValue + currentValue);
    return (
        <Container>
            <header>
                <p>
                    <strong>
                        Sub-total
                    </strong>
                </p>
                <p>
                    {productSubTotal}
                </p>
            </header>
            <main>
                {
                    products.map(product => (
                        <p>
                            {product.product.product_name} - x {product.quantity}
                        </p>
                    ))
                }
            </main>
        </Container>
    );
}