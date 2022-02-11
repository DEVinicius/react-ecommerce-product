import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CheckoutFeature } from "../features/checkout";
import { ListAddresses } from "../redux/modules/address/actions/listAddresses.action";

export function Checkout() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ListAddresses("1231241242"))
    }, [])
    
    return (
        <CheckoutFeature />
    );
}