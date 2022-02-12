import { Categories } from "./categories";
import { Main } from "./main";
import { Container } from "./style";

export function DesktopHeader() {
    return(
        <Container>
            <Main />
            <Categories />
        </Container>
    );
}