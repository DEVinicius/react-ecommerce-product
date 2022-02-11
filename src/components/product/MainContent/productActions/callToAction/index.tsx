import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../../../../redux";
import { insertProductToCart } from "../../../../../redux/modules/cart/actions/insertProductToCart.action";
import { IProduct } from "../../../../../redux/modules/product/dto/product.dto";
import { Quantity } from "../../../../../ui/quantity";
import { AddToChart } from "./addToChart";
import { Container } from "./style";

export function CallToAction() {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const product = useSelector<IStore, IProduct>(
    (state) => state.product.product
  );
  
  const dispatch = useDispatch();

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

  const handleAddToChart = useCallback(async() => {
      dispatch(insertProductToCart({
          product,
          quantity: productQuantity
      }))
  }, [productQuantity, dispatch, product]);
  
  return (
    <Container>
      <Quantity
        handleAddOneToQuantity={handleAddOneToQuantity}
        handleRemoveOneToQuantity={handleRemoveOneToQuantity}
        quantity={productQuantity}
      />
      <AddToChart 
        handleAddToChart={handleAddToChart}
      />
    </Container>
  );
}
