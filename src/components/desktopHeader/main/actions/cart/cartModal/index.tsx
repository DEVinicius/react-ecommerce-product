import { Container } from "./style";

interface ICartModal {
  onRequestClose: () => void;
}

export function CartModal({ onRequestClose }: ICartModal) {
  return <Container onMouseLeave={onRequestClose}></Container>;
}
