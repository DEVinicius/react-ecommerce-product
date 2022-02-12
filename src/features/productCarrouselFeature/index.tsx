import { useWindowSize } from "../../hooks/useWindowSize";

export function ProductCarrouselFeature()  {
    const { width } = useWindowSize();
    
    return (
        <>
            {
                width > 720 ? <ProductCarrouselFeature /> : <ProductCarrouselFeature />
            }
        </>
    );
}