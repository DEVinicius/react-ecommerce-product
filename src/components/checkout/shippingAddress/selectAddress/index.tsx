import { ChangeEvent, useCallback } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../../../redux";
import { IAddress } from "../../../../redux/modules/address/dto/Address.dto";
import { Button } from "../../../../ui/button";
import { Container } from "./style";

interface ISelectAddress {
  handleChangeAddressForm: () => void;

}

export function SelectAddress({
    handleChangeAddressForm
}:ISelectAddress) {
    
    const addresses = useSelector<IStore, IAddress[]>(state => state.address.address);

    const handleSelectAddress = useCallback(async(event: ChangeEvent<any>) => {
        console.log(event.target.value);
    }, []);
    
    return (
        <Container>
            <main>
                {
                    addresses.map(address => (
                        <label htmlFor="">
                            <input type="radio" onChange={handleSelectAddress}  name="address" id="" value={address.id}/>
                            <section>
                                <h4>{address.address}, {address.identifier}</h4>
                                <p>
                                    <strong>
                                        Cidade: {address.city} - {address.state}
                                    </strong>
                                </p>
                                <p>
                                    CEP: {address.zipCode}
                                </p>
                            </section>
                        </label>
                    ))
                }
            </main>
            <Button
                handleClick={async() => {}}
                height="3rem"
                width="15rem"
            >
                <p>
                    Continuar Comprando
                </p>
            </Button>
            <Button
                handleClick={async() => {
                    handleChangeAddressForm()
                }}
                height="3rem"
                width="15rem"
            >
                <p>
                    Adicionar novo Endereço
                </p>
            </Button>
        </Container>
    );
}