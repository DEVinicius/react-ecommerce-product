import { FiSearch } from "react-icons/fi";
import { Container } from "./style";

export function SearchBar() {
    return(
        <Container>
            <input type="text" />
            <button>
                <FiSearch />
            </button>
        </Container>
    );
}