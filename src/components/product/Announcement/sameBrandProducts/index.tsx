import { useSelector } from "react-redux";
import { IStore } from "../../../../redux";
import { IProduct } from "../../../../redux/modules/product/dto/product.dto";
import { Container } from "./style";

export function SameBrandProducts() {
    const productSameBrand = useSelector<IStore, IProduct[]>(state => state.product.productsSameBrand);

    return (
        <Container>
            <header>
                <h3>Mesma Marca</h3>
            </header>
            <main>
                {/* 
                    USAR O COMPONENTE DE PRODUTO UNITÁRIO NESSE ARQUIVO
                */}

                {
                    productSameBrand.map(product => (
                        <a href="/" key={product.id}>
                            <>
                                <h2>{product.product_name}</h2>
                            </>
                        </a>
                    ))
                }
            </main>
        </Container>
    );
}