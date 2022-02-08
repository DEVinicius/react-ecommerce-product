import { useSelector } from "react-redux";
import { IStore } from "../../../../../redux";
import { IProductImages } from "../../../../../redux/modules/product/dto/productImages.dto";
import { Container } from "./style";

interface IMicroImagesSlider {
    chooseImage: (image: IProductImages) => Promise<void>;
}

export function MicroImagesSlider({
    chooseImage
}:IMicroImagesSlider) {
    const productImages = useSelector<IStore, IProductImages[]>(state => state.product.product.images)
    return (
        <Container>
            {
                productImages.map(image => (
                    <img src="" alt="" onClick={() => {
                        chooseImage(image)
                    }}/>
                ))
            }
        </Container>
    );
}