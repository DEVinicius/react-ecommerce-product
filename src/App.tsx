import { useEffect } from "react";
import { Product } from "./components/product";
import { findProduct } from "./redux/modules/product/actions/findProduct.action";
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findProduct(1))
  })
  return (
    <Product />
  );
}

export default App;
