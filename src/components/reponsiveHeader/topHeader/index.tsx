import { MainActivity } from "./mainActivity";
import { SearchBar } from "./searchBar";
import { Container } from "./style";

export function TopHeader() {
    return (
        <Container>
            <MainActivity />
            <SearchBar/>
        </Container>
    );
}