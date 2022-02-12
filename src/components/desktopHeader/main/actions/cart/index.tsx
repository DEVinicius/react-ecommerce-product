import { useCallback, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Container } from "./style";
import { CartModal } from "./cartModal";

export function CartAction() {
    const [cartModal, setCartModal] = useState<boolean>(false);
    
    const handleOpenCartModal = useCallback(async() => {
        setCartModal(true);
    }, [setCartModal]);

    const handleCloseCartModal = useCallback(() => {
        setCartModal(false);
    }, [setCartModal]);

    return (
        <>
            <a href="/cart">
                <Container onMouseOver={handleOpenCartModal}>
                    <FiShoppingCart />
                </Container>
            </a>
            {
                cartModal && (
                    <CartModal 
                        onRequestClose={handleCloseCartModal}
                    />
                )
            }
        </>
    );
}