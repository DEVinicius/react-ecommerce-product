import { ReactNode } from "react";
import { Container } from "./style";

interface IButtton {
    height?: string;
    width?: string;
    handleClick: () => Promise<void>;
    children: ReactNode;
}

export function Button({
    handleClick,
    height = "3rem",
    width = "3rem",
    children
}:IButtton) {
    return (
        <Container
            onClick={handleClick}
            height={height}
            width={width}
        >
            {children}
        </Container>
    );
}