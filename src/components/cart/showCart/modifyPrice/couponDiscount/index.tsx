import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCouponDiscount } from "../../../../../redux/modules/cart/actions/addCouponDiscount.action";
import { Button } from "../../../../../ui/button";
import { Container } from "./style";

export function CouponDiscount() {
    const [couponDiscount, setCouponDiscount] = useState<string>("");
    const dispactch = useDispatch();
    
    const handleChangeCouponText = useCallback(async(text: string) => {
        setCouponDiscount(text);
    }, [setCouponDiscount])

    const handleApplyCouponDiscount = useCallback(async() => {
        dispactch(AddCouponDiscount(couponDiscount))
    }, [dispactch, couponDiscount]);

    return (
        <Container>
            <header>
                <h1>Cupom de Desconto</h1>
            </header>
            <main>
                <input type="text" value={couponDiscount} onChange={(event) => {
                    handleChangeCouponText(event.target.value)
                }}/>

                <Button 
                    handleClick={handleApplyCouponDiscount}
                    height="3rem"
                    width="15rem"
                >
                    <p>
                        APLICAR
                    </p>
                </Button>
            </main>
        </Container>
    );
}