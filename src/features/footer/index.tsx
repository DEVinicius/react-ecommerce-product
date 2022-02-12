import { Footer } from "../../components/footer";
import { MobileFooter } from "../../components/mobileFooter";
import { useWindowSize } from "../../hooks/useWindowSize";

export function FooterFeature() {
    const { width } = useWindowSize();
    
    return (
        <>
            {
                width > 1000 ? <Footer /> : <MobileFooter />
            }
        </>
    );
}