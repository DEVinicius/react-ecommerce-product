import { useCallback, useState } from "react";
import { Container } from "./style";

export function CouponDiscount() {
    const [couponDiscount, setCouponDiscount] = useState<string>("");
    
    const handleChangeCouponText = useCallback(async(text: string) => {
        setCouponDiscount(text);
    }, [setCouponDiscount])

    const handleApplyCouponDiscount = useCallback(async() => {}, []);

    return (
        <Container>
            <header>
                <h1>Cupom de Desconto</h1>
            </header>
            <main>
                <input type="text" value={couponDiscount} onChange={(event) => {
                    handleChangeCouponText(event.target.value)
                }}/>

                <button>
                    APLICAR
                </button>
            </main>
        </Container>
    );
}