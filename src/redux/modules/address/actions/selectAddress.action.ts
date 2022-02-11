import { SELECT_ADDRESS } from "../enum/actions.enum";

export function SelectAddress(addressId: number) {
    return {
        type: SELECT_ADDRESS,
        payload: {
            addressId
        }
    }
}