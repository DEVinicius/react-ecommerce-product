import { LIST_ADDRESSES } from './../enum/actions.enum';

export function ListAddresses(userDocument: string) {
    return {
        type: LIST_ADDRESSES,
        payload: {
            userDocument
        }
    };
}