import { Checkout } from "../../components/checkout";
import { useWindowSize } from "../../hooks/useWindowSize";

export function CheckoutFeature() {
    const { width } = useWindowSize();
    
    return (
        <>
            {
                width > 720 ? <Checkout /> : <Checkout />
            }
        </>
    );
}