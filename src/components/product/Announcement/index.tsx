import { CardAnnouncement } from "./card";
import { SameBrandProducts } from "./sameBrandProducts";
import { Container } from "./style";

export function Announcement() {
    return (
        <Container>
            <CardAnnouncement />
            <SameBrandProducts />
        </Container>
    );
}