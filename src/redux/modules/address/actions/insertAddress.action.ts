import { IInsertAddressRequest } from './../reducers/request/insertAddress.request';
import { INSERT_ADDRESS } from './../enum/actions.enum';


export function InsertAddress(data: IInsertAddressRequest) {
    const { address } = data;
    
    return {
        type: INSERT_ADDRESS,
        payload: {
            address
        }
    }
}