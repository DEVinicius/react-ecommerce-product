import { useSelector } from "react-redux";
import { IStore } from "../../../../../redux";
import { ICartItem } from "../../../../../redux/modules/cart/dto/CartItem.dto";
import { ICouponDiscount } from "../../../../../redux/modules/cart/dto/couponDiscount.dto";
import { Container } from "./style";

export function TotalBuy() {
  const products = useSelector<IStore, ICartItem[]>((state) => state.cart.cart);
  const couponDiscount = useSelector<IStore, ICouponDiscount>(
    (state) => state.cart.couponDiscount
  );
  const productSubTotal = products
    .map(
      (product) => product.quantity * parseFloat(product.product.promotionPrice)
    )
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  const productsTotalWithCouponDiscount = Object.keys(couponDiscount).length > 0
    ? couponDiscount.typeCoupon === "percent"
      ? productSubTotal - (couponDiscount.couponValue * productSubTotal) / 100
      : productSubTotal - couponDiscount.couponValue
    : productSubTotal;
  return (
    <Container>
      <header>
        <p>
          <strong>Sub-total</strong>
        </p>
        <p>{productSubTotal}</p>
      </header>
      <main>
        {products.map((product) => (
          <p>
            {product.product.product_name} - x {product.quantity}
          </p>
        ))}
      </main>
      <footer>
        <p>
          <strong>Sub-total</strong>
        </p>
        <p>{productsTotalWithCouponDiscount}</p>
      </footer>
    </Container>
  );
}
