import { Reducer } from "redux";
import { IProductAnnouncement } from "./../dto/productAnnouncement.dto";
import { IProductAnnouncementState } from "./../dto/productAnnouncementState.dto";
import { FIND_PRODUCT_ANNOUNCEMENT } from "./../enum/actions.enum";
import produce from "immer";
import { FindProductAnnouncementRequest } from "./requests/findProductAnnouncement.request";

const INITIAL_STATE: IProductAnnouncementState = {
  announcement: {} as IProductAnnouncement,
};

export const productAnnouncement: Reducer<IProductAnnouncementState> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FIND_PRODUCT_ANNOUNCEMENT:
          const productAnnouncementRequest = FindProductAnnouncementRequest();
          return {
              ...state,
              announcement: productAnnouncementRequest
          }
    }
  });
};
