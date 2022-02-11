import { IAddress } from './../../dto/Address.dto';

export interface IInsertAddressRequest {
    address: IAddress
}

export async function insertAddressRequest(data: IInsertAddressRequest):Promise<IAddress> {
    //Inserir Na API
    const { address } = data;
    return address;
}