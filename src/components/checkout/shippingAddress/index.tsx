import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";
import { IAddress } from "../../../redux/modules/address/dto/Address.dto";
import { AddressForm } from "./addressForm";
import { SelectAddress } from "./selectAddress";
import { Container } from "./style";

export function ShippingAddress() {
    const [isAddressFormActive, setIsAddressFormActive] = useState<boolean>(true);
    
    const addresses = useSelector<IStore, IAddress[]>(state => state.address.address);

    const changeAddressFormStatus = useCallback(async() => {
        if(addresses.length > 0) {
            setIsAddressFormActive(false);
        }
    }, [setIsAddressFormActive, addresses]);

    useEffect(() => {
        changeAddressFormStatus();
    }, []);
    
    return (
        <Container>
            {
                isAddressFormActive ? <AddressForm /> : <SelectAddress />
            }
        </Container>
    );
}