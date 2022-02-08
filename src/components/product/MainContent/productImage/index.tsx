import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../../../redux";
import { IProductImages } from "../../../../redux/modules/product/dto/productImages.dto";
import { MicroImagesSlider } from "./microImagesSlider";
import { Container } from "./style";

export function ProductImage() {
    const [imageNumber, setImageNumber] = useState<number>(0);

    const productImages = useSelector<IStore, IProductImages[]>(state => state.product.product.images)

    const handleChangeImage = useCallback(async(image: IProductImages) => {
        const imageIndex = productImages.indexOf(image);
        setImageNumber(imageIndex)
    }, [setImageNumber, productImages]);

    return (
        <Container>
            <MicroImagesSlider 
                chooseImage={handleChangeImage}
            />
        </Container>
    );
}