import { ICouponDiscount } from "../../dto/couponDiscount.dto";

export function searchCouponDiscount(couponCode: string):ICouponDiscount {
    if(couponCode !== "TESTE_HAYMAY") {
        throw Error("Cupom Não Existe");
    }

    return {
        couponCode: "TESTE_HAYMAY",
        couponValue: 19,
        typeCoupon: "percent"
    }
}