import { Announcement } from "./Announcement";
import { MainContent } from "./MainContent";
import { Container } from "./style";

export function ProductResponsive() {
    return (
        <Container>
            <MainContent />
            <Announcement />
        </Container>
    );
}