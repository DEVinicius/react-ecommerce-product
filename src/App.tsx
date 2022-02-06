import { useEffect } from "react";
import { Product } from "./components/product";
import { findProduct } from "./redux/modules/product/actions/findProduct.action";
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from "./redux";
import { IProduct } from "./redux/modules/product/dto/product.dto";

function App() {
  const dispatch = useDispatch();
  const product = useSelector<IStore, IProduct>(state => state.product.product);

  useEffect(() => {
    dispatch(findProduct(1))
  }, [])
  return (
    <>
      {Object.keys(product).length > 0 && <Product />}
    </>
  );
}

export default App;
