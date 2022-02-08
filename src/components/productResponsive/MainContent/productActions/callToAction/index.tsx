import { AddToChart } from "./addToChart";
import { Quantity } from "./quantity";
import { Container } from "./style";

export function CallToAction() {
    return (
        <Container>
            <Quantity />
            <AddToChart />
        </Container>
    )
}