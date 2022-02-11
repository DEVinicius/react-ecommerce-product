import { useDispatch } from "react-redux";
import { Container } from "./style";

interface IAddToChart {
    handleAddToChart: () => Promise<void>;
}

export function AddToChart({
    handleAddToChart
}:IAddToChart) {
    
    return (
        <Container onClick={handleAddToChart}>
            Adicionar ao Carrinho
        </Container>
    )
}