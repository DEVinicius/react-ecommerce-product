import { Container } from "./style";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../../../../../redux";
import { IProduct } from "../../../../../../redux/modules/product/dto/product.dto";

export function Quantity() {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const product = useSelector<IStore, IProduct>(
    (state) => state.product.product
  );

  const handleAddOneToQuantity = useCallback(async () => {
    if (product.quantity === productQuantity) {
      return;
    }

    setProductQuantity(productQuantity + 1);
  }, [productQuantity, setProductQuantity, product]);

  const handleRemoveOneToQuantity = useCallback(async () => {
    if (!(productQuantity === 1)) {
      setProductQuantity(productQuantity - 1);
      return;
    }
  }, [productQuantity, setProductQuantity]);

  return (
    <Container>
      <p>Quantidade</p>
      <div>
        {productQuantity > 1 && (
          <button onClick={handleRemoveOneToQuantity}>
            <FiMinus />
          </button>
        )}
        <input type="number" name="" readOnly id="" value={productQuantity} />
        {productQuantity < product.quantity && (
          <button onClick={handleAddOneToQuantity}>
            <FiPlus />
          </button>
        )}
      </div>
    </Container>
  );
}
