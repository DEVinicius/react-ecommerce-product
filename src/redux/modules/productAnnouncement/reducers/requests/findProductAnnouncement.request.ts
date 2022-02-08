import { IProductAnnouncement } from './../../dto/productAnnouncement.dto';
export function FindProductAnnouncementRequest() {
    return {
        id: 1,
        imageUrl: "https://cdn.pixabay.com/photo/2017/12/23/23/28/businessman-3036181_960_720.jpg"
    } as IProductAnnouncement;
}