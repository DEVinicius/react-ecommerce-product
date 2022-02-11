import { IAddress } from './Address.dto';
export interface IAddressState {
    address: IAddress[];
    selectedAddress: IAddress
}