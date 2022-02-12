import { Container } from "./style";
import { FiSearch } from 'react-icons/fi';

export function SearchBar() {
    return (
        <Container>
            <select name="" id="">
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
            </select>
            <input type="text" />
            <button>
                <FiSearch />
            </button>
        </Container>
    );
}