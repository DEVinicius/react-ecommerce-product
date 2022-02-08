import { useSelector } from "react-redux";
import { Container } from "./style";
import { IStore } from '../../../../../redux';
import { IProduct } from "../../../../../redux/modules/product/dto/product.dto";

export function MainProduct() {
    const product = useSelector<IStore, IProduct>(state => state.product.product);
    return (
        <Container>
            <article>
                <p>
                    {
                        Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(parseFloat(product.originalPrice))
                    }
                </p>
                <p>
                    {
                        Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(parseFloat(product.promotionPrice))
                    }    
                </p>
            </article>
            <p>
                <strong>
                    Vendido Por:
                </strong>
                {product.shopkeeper.name}
            </p>
        </Container>
    );
}