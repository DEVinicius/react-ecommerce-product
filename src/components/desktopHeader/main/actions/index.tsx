import { FiUser } from "react-icons/fi";
import { CartAction } from "./cart";
import { Action, Container, Login } from "./style";

export function Actions() {
    return (
        <Container>
            <Action>
                <CartAction />
            </Action>
            <Login>
                <FiUser />
                <div>
                    <a href="/">Login</a>
                    <a href="/">Cadastrar-se</a>
                </div>
            </Login>
        </Container>
    );
}