import { Announcement } from "./Announcement";
import { MainContent } from "./MainContent";
import { Container } from "./style";

export function Product() {
    return (
        <Container>
            <MainContent />
            <Announcement />
        </Container>
    );
}