import { useCallback } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../../../redux";
import { IAddress } from "../../../../redux/modules/address/dto/Address.dto";
import { Button } from "../../../../ui/button";
import { Container } from "./style";

export function SelectAddress() {
    
    const addresses = useSelector<IStore, IAddress[]>(state => state.address.address);

    const handleSelectAddress = useCallback(async() => {}, []);
    
    return (
        <Container>
            <main>
                {
                    addresses.map(address => (
                        <label htmlFor="">
                            <input type="radio" name="address" id="" value={address.id}/>
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
                handleClick={handleSelectAddress}
                height="3rem"
                width="15rem"
            >
                <p>
                    Continuar Comprando
                </p>
            </Button>
        </Container>
    );
}