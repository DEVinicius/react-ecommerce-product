import { useSelector } from "react-redux";
import { IStore } from "../../../../redux";
import { IProductAnnouncement } from "../../../../redux/modules/productAnnouncement/dto/productAnnouncement.dto";
import { Container } from "./style";

export function CardAnnouncement() {
    const productAnnouncement = useSelector<IStore, IProductAnnouncement>(state => state.productAnnouncement.announcement);

    return (
        <Container>
            <img src={productAnnouncement.imageUrl} alt="Announcement" />
        </Container>
    );
}