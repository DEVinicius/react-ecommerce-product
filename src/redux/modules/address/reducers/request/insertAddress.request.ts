import { IAddress } from './../../dto/Address.dto';

export interface IInsertAddressRequest {
    address: IAddress
}

export function insertAddressRequest(data: IInsertAddressRequest):IAddress {
    //Inserir Na API
    const { address } = data;
    console.log(address);
    return {
        ...address,
        id: Math.random()
    };
}