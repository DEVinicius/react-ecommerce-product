import { Product } from "../../components/product";
import { ProductResponsive } from "../../components/productResponsive";
import { useWindowSize } from "../../hooks/useWindowSize";

export function ProductFeature() {
    const { width } = useWindowSize();
    
    return (
        <>
            {
                width > 720 ? <Product /> : <ProductResponsive />
            }
        </>
    );
}