import { useCallback } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../../../redux";
import { removeProductCart } from "../../../../redux/modules/cart/actions/removeProduct.action";
import { ICartItem } from "../../../../redux/modules/cart/dto/CartItem.dto";
import { Button } from "../../../../ui/button";
import { Container } from "./style";

export function CartTable() {
  const productsCart = useSelector<IStore, ICartItem[]>(
    (state) => state.cart.cart
  );

    const dispatch = useDispatch()

  const handleRemoveProduct = useCallback(async(productId: number) => {
      dispatch(removeProductCart(productId));
  }, [dispatch]);

  return (
    <Container>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Total</th>
          <th>Ação</th>
        </tr>
        <tbody>
          {productsCart.map((product) => (
            <tr key={product.product.id}>
              <td>
                {product.product.images.length > 0 ? (
                  <img src={product.product.images[0].imageUrl} alt="" />
                ) : (
                  <p>Não há imagem</p>
                )}
              </td>
              <td>
                <p>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(parseFloat(product.product.promotionPrice))}
                </p>
              </td>
              <td>
                <p>{product.quantity}</p>
              </td>
              <td>
                <p>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(parseFloat(product.product.promotionPrice) * product.quantity)}
                </p>
              </td>
              <td>
                  <Button
                    handleClick={async () => {
                        handleRemoveProduct(product.product.id)
                    }}
                    height="3rem"
                    width="3rem"
                  >
                      <FiTrash2 />
                  </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </thead>
    </Container>
  );
}
