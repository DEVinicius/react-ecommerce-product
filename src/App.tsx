import { useEffect } from "react";
import { findProduct } from "./redux/modules/product/actions/findProduct.action";
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from "./redux";
import { IProduct } from "./redux/modules/product/dto/product.dto";
import { ProductFeature } from "./features/product";

function App() {
  const dispatch = useDispatch();
  const product = useSelector<IStore, IProduct>(state => state.product.product);

  useEffect(() => {
    dispatch(findProduct(1))
  }, [])
  return (
    <>
      {Object.keys(product).length > 0 && <ProductFeature />}
    </>
  );
}

export default App;
