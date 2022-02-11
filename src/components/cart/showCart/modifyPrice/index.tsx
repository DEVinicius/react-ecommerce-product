import { CouponDiscount } from "./couponDiscount";
import { Container } from "./style";
import { TotalBuy } from "./totalBuy";

export function ModifyPrice() {
    return (
        <Container>
            <CouponDiscount />
            <section>
                <TotalBuy />
            </section>
        </Container>
    );
}