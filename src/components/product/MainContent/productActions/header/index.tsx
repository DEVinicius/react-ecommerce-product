import { useSelector } from "react-redux";
import { IStore } from "../../../../../redux";
import { IProduct } from "../../../../../redux/modules/product/dto/product.dto";
import { Container } from "./style";

export function ProductHeader() {
    const product = useSelector<IStore, IProduct>(state => state.product.product)
    return (
        <Container>
            <h1>{product.product_name}</h1>
            <aside>
                <p>Marca: {product.brand.brand_name}</p>
            </aside>
            <hr />
        </Container>
    );
}