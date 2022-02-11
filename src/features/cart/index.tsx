import { Cart } from "../../components/cart";
import { useWindowSize } from "../../hooks/useWindowSize";

export function CartFeature() {
    const { width } = useWindowSize();
    
    return (
        <>
            {
                width > 800 && <Cart/>
            }
        </>
    );
}