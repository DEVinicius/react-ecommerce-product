import { Link } from "react-router-dom";
import { Cart } from "./cart";
import { Profile } from "./profile";
import { Container } from "./style";

export function MainActivity() {
    return (
        <Container>
            <a href="/">
                <img src="/OriginalLogo.png" alt="" />
            </a>
            <aside>
                <Cart />
                <Profile />
            </aside>
        </Container>
    );
}