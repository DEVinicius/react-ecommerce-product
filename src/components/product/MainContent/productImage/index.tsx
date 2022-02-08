import { useCallback, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { IStore } from "../../../../redux";
import { IProductImages } from "../../../../redux/modules/product/dto/productImages.dto";
import { Button } from "../../../../ui/button";
import { MicroImagesSlider } from "./microImagesSlider";
import { Container } from "./style";

export function ProductImage() {
    const [imageNumber, setImageNumber] = useState<number>(0);

    const productImages = useSelector<IStore, IProductImages[]>(state => state.product.product.images)

    const handleChangeImage = useCallback(async(image: IProductImages) => {
        const imageIndex = productImages.indexOf(image);
        setImageNumber(imageIndex)
    }, [setImageNumber, productImages]);

    const handleNextImage = useCallback(async() => {
        if(!(imageNumber + 1 > (productImages.length - 1))) {
            setImageNumber(imageNumber + 1);
            return;
        } 

        setImageNumber(0)
    }, [imageNumber, setImageNumber, productImages]);

    const handleBackImage = useCallback(async() => {
        if(imageNumber - 1 > 0) {
            setImageNumber(imageNumber - 1)
            return
        } 

        setImageNumber(productImages.length - 1)
    }, [imageNumber, setImageNumber, productImages]);

    return (
        <Container>
            <MicroImagesSlider 
                chooseImage={handleChangeImage}
            />

            <aside>
                <Button
                    handleClick={handleNextImage}
                    height="3rem"
                    width="3rem"
                >
                    <FiChevronLeft />
                </Button>

                <img src={productImages[imageNumber].imageUrl} alt=""/>

                <Button
                    handleClick={handleNextImage}
                    height="3rem"
                    width="3rem"
                >
                    <FiChevronRight />
                </Button>
            </aside>
        </Container>
    );
}