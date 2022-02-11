import { Container } from "./style";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useSelector } from "react-redux";
import { IStore } from "../../redux";
import { IProduct } from "../../redux/modules/product/dto/product.dto";

interface IQuantity {
  quantity: number;
  handleRemoveOneToQuantity: () => Promise<void>;
  handleAddOneToQuantity: () => Promise<void>;
}

export function Quantity({
  handleAddOneToQuantity,
  handleRemoveOneToQuantity,
  quantity
}:IQuantity) {
  const product = useSelector<IStore, IProduct>(
    (state) => state.product.product
  );

  return (
    <Container>
      <p>Quantidade</p>
      <div>
        {quantity > 1 && (
          <button onClick={handleRemoveOneToQuantity}>
            <FiMinus />
          </button>
        )}
        <input type="number" name="" readOnly id="" value={quantity} />
        {quantity < product.quantity && (
          <button onClick={handleAddOneToQuantity}>
            <FiPlus />
          </button>
        )}
      </div>
    </Container>
  );
}
