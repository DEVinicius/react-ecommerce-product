import { IAddress } from "./../dto/Address.dto";
import { LIST_ADDRESSES, SELECT_ADDRESS } from "./../enum/actions.enum";
import produce from "immer";
import { Reducer } from "redux";
import { IAddressState } from "./../dto/AddressState.dto";
import { listAddressesRequest } from "./request/listAddresses.request";

const INITIAL_STATE: IAddressState = {
  address: [],
  selectedAddress: {} as IAddress,
};

export const address: Reducer<IAddressState> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LIST_ADDRESSES:
        const { userDocument } = action.payload;
        const addresses = listAddressesRequest(userDocument as string);

        draft.address = addresses;
        break;

      case SELECT_ADDRESS:
        const { addressId } = action.payload;

        const selectedAddress = draft.address.find(
          (address) => address.id === addressId
        );

        if (!selectedAddress) {
          throw Error("Endereço não encontrado");
        }

        draft.selectedAddress = selectedAddress;
        break;
    }
  });
};
