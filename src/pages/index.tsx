import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductFeature } from "../features/product";
import { IStore } from "../redux";
import { findProduct } from "../redux/modules/product/actions/findProduct.action";
import { findProductsSameBrand } from "../redux/modules/product/actions/findProductsSameBrand.action";
import { IProduct } from "../redux/modules/product/dto/product.dto";
import { FindProductAnnouncement } from "../redux/modules/productAnnouncement/actions/findProductAnnouncement.action";

export function Index() {
  const dispatch = useDispatch();
  const product = useSelector<IStore, IProduct>(
    (state) => state.product.product
  );

  useEffect(() => {
    dispatch(findProduct(1));
    dispatch(FindProductAnnouncement());
    dispatch(findProductsSameBrand("Consul"));
  }, []);
  return <>{Object.keys(product).length > 0 && <ProductFeature />}</>;
}
