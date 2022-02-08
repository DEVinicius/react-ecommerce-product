import { IProduct } from './../../dto/product.dto';
export function FindProductsSameBrandRequest(brand: string): IProduct[] {
    return [
        { 
            id: 1,
            product_name: "Máquina de Lavar",
            brand: {
                brand_name: "Consul"
            },
            originalPrice: "125",
            promotionPrice: "150",
            images: [
                {
                    id: 1,
                    imageUrl: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg"
                },
                {
                    id: 2,
                    imageUrl: "https://cdn.pixabay.com/photo/2021/09/17/12/12/coffee-6632524_960_720.jpg"
                },
                {
                    id: 3,
                    imageUrl: "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_960_720.jpg"
                },
                {
                    id: 4,
                    imageUrl: "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_960_720.jpg"
                },
            ],
            quantity: 5,
            shopkeeper: { 
                name: "Vinicius Pereira de Oliveira"
            }
        },
        { 
            id: 2,
            product_name: "Máquina de Lavar 2",
            brand: {
                brand_name: "Consul 2"
            },
            originalPrice: "125",
            promotionPrice: "150",
            images: [
                {
                    id: 2,
                    imageUrl: "https://cdn.pixabay.com/photo/2021/09/17/12/12/coffee-6632524_960_720.jpg"
                },
                {
                    id: 1,
                    imageUrl: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg"
                },
                {
                    id: 3,
                    imageUrl: "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_960_720.jpg"
                },
                {
                    id: 4,
                    imageUrl: "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_960_720.jpg"
                },
            ],
            quantity: 5,
            shopkeeper: { 
                name: "Vinicius Pereira de Oliveira"
            }
        } 
    ]
}