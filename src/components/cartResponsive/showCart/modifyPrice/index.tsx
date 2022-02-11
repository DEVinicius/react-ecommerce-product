import { CouponDiscount } from "./couponDiscount";
import { GoToCheckout } from "./goToCheckout";
import { Container } from "./style";
import { TotalBuy } from "./totalBuy";

export function ModifyPrice() {
    return (
        <Container>
            <CouponDiscount />
            <section>
                <TotalBuy />
                <GoToCheckout />
            </section>
        </Container>
    );
}