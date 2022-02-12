import { Actions } from "./actions";
import { SearchBar } from "./searchBar";
import { Container } from "./style";

export function Main() {
    return (
        <Container>
            <a href="/">
                <img src="/OriginalLogo.png" alt="" />
            </a>
            <SearchBar />
            <Actions />
        </Container>
    );
}